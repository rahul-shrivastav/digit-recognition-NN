import { useState } from 'react'
import Gridpaint from './components/Gridpaint'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex overflow-clip">
      <div className="border w-1/2 h-full flex flex-col items-center justify-evenly">
        <h1 className="text-2xl font-extralight">Draw your digit</h1>
        <Gridpaint />
        <button className='p-5 shadow-2xl w-2/5 rounded-2xl bg-slate-100'>Predict</button>
      </div>
      <div className="border w-1/2 h-full"></div>

    </div>
  )
}

export default App
