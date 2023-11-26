import { useState } from 'react'

// import Btn from "./components/Btn";/


function App() {
  const [color,setColor] = useState("olive")
  const [name,setName] = useState("No One")
  return (
    <>
      <div id='bg' className="w-full h-screen duration-500 text-center text-9xl font-extrabold"
        style={{ backgroundColor: color }}>{name} is Clicked!
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 p-2'>
          <div className="outline-dashed outline-amber-900 rounded-3xl flex-wrap flex gap-14 p-3 inset-x-0 text-lg">
            <button onClick={()=>(setColor("lavender"),setName("Lavender"))} className="outline-double text-black bg-lavender rounded p-4 font-bold text-1xl">Lavender</button>
            <button onClick={()=>(setColor("yellow"),setName("Yellow"))} className="text-black bg-yellow-600 rounded p-4 font-bold text-1xl">Yellow</button>
            <button onClick={()=>(setColor("green"),setName("Green"))} className="text-black bg-green-600 rounded p-4 font-bold text-1xl">Green</button>
            <button onClick={()=>(setColor("red"),setName("Red"))} className="text-black bg-red-600 rounded p-4 font-bold text-1xl">Red</button>
            <button onClick={()=>(setColor("blue"),setName("Blue"))} className="text-black bg-blue-600 rounded p-4 font-bold text-1xl">Blue</button>
            <button onClick={()=>(setColor("orange"),setName("Orange"))} className="text-black bg-orange-600 rounded p-4 font-bold text-1xl">Orange</button>
            <button onClick={()=>(setColor("purple"),setName("Purple"))} className="text-black bg-purple-600 rounded p-4 font-bold text-1xl">Purple</button>
            {/* <Btn color="grey" name="grey"/>
            <Btn color="orange" name="orange"/>
            <Btn color="purple" name="purple"/>
            <Btn color="blue" name="blue"/>
            <Btn color="yellow" name="yellow"/>
            <Btn color="red" name="red"/>
            <Btn color="lavender" name="lavender"/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
