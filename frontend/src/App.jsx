import { useState } from 'react'
import Gridpaint from './components/Gridpaint'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex overflow-clip max-[1100px]:flex-col">
      <div className="relative border w-[40%] max-[1100px]:w-full h-full flex flex-col items-center justify-center gap-10   max-[1100px]:h-1/2 max-[1100px]:justify-center">
        <h1 className="text-3xl max-[1100px]:hidden font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent ">
          DRAW A DIGIT
        </h1>
        <Gridpaint />
        <button className='max-[1100px]:scale-50 bg-gradient-to-r hover:cursor-pointer hover:scale-105 transition-transform duration-500 from-emerald-400 to-cyan-400 p-5 shadow-2xl w-2/5 max-[1100px]:w-[30%] max-[1100px]:absolute max-[1100px]:bottom-1 h-14 max-[1100px]:h-10 rounded-md text-white font-medium text-xl bg-slate-100 flex items-center justify-center'>Predict</button>
      </div>
      <div className="border w-[60%] max-[1100px]:w-full max-[1100px]:h-[50%]   h-full"></div>

    </div>
  )
}

export default App
