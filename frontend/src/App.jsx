import { useState } from 'react'
import Gridpaint from './components/Gridpaint'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex overflow-clip">
      <div className="border w-1/2 h-full flex flex-col items-center justify-center gap-10">
        <h1 class="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent ">
          DRAW A DIGIT
        </h1>
        <Gridpaint />
        <button className='bg-gradient-to-r hover:cursor-pointer hover:scale-105 transition-transform duration-500 from-emerald-400 to-cyan-400 p-5 shadow-2xl w-2/5 h-14 rounded-md text-white font-medium text-xl bg-slate-100 flex items-center justify-center'>Predict</button>
      </div>
      <div className="border w-1/2 h-full"></div>

    </div>
  )
}

export default App
