import { useState } from 'react'
import Gridpaint from './components/Gridpaint'

function App() {
  const [count, setCount] = useState(0)
  const [gridSize, setgridsize] = useState(28);
  const [cells, setCells] = useState(
    Array(gridSize * gridSize).fill(0)
  );
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-clip">
      <div className=" relative w-[40%]  h-full flex flex-col items-center justify-center gap-10   ">
        <h1 className="text-3xl  font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent ">
          DRAW A DIGIT
        </h1>
        <Gridpaint cells={cells} setCells={setCells} gridSize={gridSize} />
        <button onClick={console.log(cells)} className=' bg-gradient-to-r hover:cursor-pointer hover:scale-105 transition-transform duration-500 from-emerald-400 to-cyan-400 p-5 shadow-2xl w-2/5  h-14  rounded-md text-white font-medium text-xl bg-slate-100 flex items-center justify-center'>Predict</button>
      </div>
      <div className="w-1/5  h-full flex flex-col items-center justify-center gap-5">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center  h-10  w-10 shadow-2xl'>
              <h1 className='text-3xl bg-gradient-to-r from-slate-200 to-slate-400  border rounded-md border-slate-300 w-full h-full text-center text-white'>{item}</h1>
              {/* <h1 className='text-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md w-full h-full text-center text-white'>{item}</h1> */}
            </div>
          ))

        }

      </div>

    </div>
  )
}

export default App
