import { useState } from 'react'
import Gridpaint from './components/Gridpaint'

function App() {
  const [prediction, setprediction] = useState(null)
  const [gridSize, setgridsize] = useState(28);
  const [cells, setCells] = useState(
    Array(gridSize * gridSize).fill(0)
  );
  const [predicting, setpredicting] = useState(false);

  const handleSubmit = async () => {
    setpredicting(true)
    let ans = [];
    for (let index = 0; index < 784; index += 28) {
      ans.push(cells.slice(index, index + 28))
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/predict`, {
      // mode: "no-cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dataArray: ans })
    });
    const data = await res.json();
    setprediction(data.prediction)
    setpredicting(false)
    console.log(data)
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-clip">
      <div className={predicting ? "w-full h-full absolute top-0 left-0 flex items-center justify-center bg-gray-300 z-10 opacity-80 " : 'hidden'}><span className='animate-pulse'>Connecting to Backend...Might take 1-2 minutes for first request</span></div>
      <div className=" relative w-[40%]  h-full flex flex-col items-center justify-center gap-10   ">
        <h1 className="text-3xl  font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent ">
          DRAW A DIGIT
        </h1>
        <Gridpaint cells={cells} setCells={setCells} gridSize={gridSize} setprediction={setprediction} />
        <button onClick={handleSubmit} className=' bg-gradient-to-r hover:cursor-pointer hover:scale-105 transition-transform duration-500 from-emerald-400 to-cyan-400 p-5 shadow-2xl w-2/5  h-14  rounded-md text-white font-medium text-xl bg-slate-100 flex items-center justify-center'>Predict</button>
      </div>
      <div className="w-1/5  h-full flex flex-col items-center justify-center gap-5">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {

            {
              if (prediction === item) {
                return (
                  <div key={index} className='flex flex-col items-center justify-center  h-10  w-10 shadow-2xl'>
                    <h1 className='text-3xl bg-gradient-to-r from-cyan-400 to-emerald-400  border rounded-md border-slate-300 w-full h-full text-center text-white'>{item}</h1>
                  </div>
                )

              } else {
                return (
                  <div key={index} className='flex flex-col items-center justify-center  h-10  w-10 shadow-2xl'>
                    <h1 className='text-3xl bg-gradient-to-r from-slate-200 to-slate-400  border rounded-md border-slate-300 w-full h-full text-center text-white'>{item}</h1>
                  </div>

                )
              }
            }
          }
          )
        }
      </div>

    </div>
  )
}

export default App
