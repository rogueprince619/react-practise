import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




function App() {
  const[color,setColor] = useState("olive");
 function changeColor(color){
  if(color === 'black'){
    setColor('black');
  }
 }
  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          <div className="flex flex-wrap justify-center gap-20 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"black"}} onClick={()=>{setColor("black")}}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"teal"}} onClick={()=>{setColor("teal")}}>Teal</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-orange-50" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>

        </div>
      </div>
  )
}

export default App
