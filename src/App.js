import "./App.css";
import { useState } from "react";

function App() {
 
  const [backgroundColor,setBackgroundColor] = useState("red")
   
  const changeColor=()=>{
      
  }

  return (
    <div className="w-full h-screen  text-white flex flex-col justify-end items-center pt " style={{backgroundColor: backgroundColor}}>
        <div className="flex flex-row w-64 h-12 bg-white mb-10 justify-center items-center gap-4 rounded-full">
          <button className="bg-red-600 w-16 h-8  rounded-full " onClick={()=>setBackgroundColor("red")}>Red</button>
          <button className="bg-green-600 w-16 h-8  rounded-full" onClick={()=>setBackgroundColor("green")}>Green</button>
          <button className="bg-yellow-600 w-16 h-8  rounded-full" onClick={()=>setBackgroundColor("yellow")}>Yellow</button>
        </div>
        
    </div>
  );
}

export default App;
