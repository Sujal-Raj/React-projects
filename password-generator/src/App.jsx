import { useState ,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(true);
  const [charallowed, setCharallowed] = useState(true)
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);
  
  const passwordGenerator = ()=>{
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP";
    if (numallowed) str+="0123456789";
    if(charallowed) str+="!@#$%^&*()";
    
    for (let index = 0; index <=length; index++) {
      let char = Math.floor(Math.random()* str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    // console.log(Password);
  }

  const copyToClipBoard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }


  useEffect(()=>{
  passwordGenerator();
  },[length,numallowed,charallowed])

  return (
    <>
      <div className='bg-zinc-900 h-screen w-full text-white'>
        <h1 className='text-white text-6xl text-center pt-5 font-bold '>Password Generator</h1>
        <div className=' flex items-center justify-center flex-col mt-5 border-2 border-white w-[40%] m-auto text-2xl pt-4 pb-4'>
          <div className=''>
            <input className='text-yellow-500 w-[460px]' type="text"  value={Password} placeholder="Password" ref={passwordRef} />
            {/* <input className='text-yellow-500' type="text" /> */}
            <button className='bg-blue-400 rounded-sm hover:bg-blue-800' onClick={copyToClipBoard}>Copy</button>
          </div>
           <div className='mt-4'>
           <input onChange={(e)=>setLength(e.target.value)} min={6} max={50} type="range" value={length} name="" id="" defaultValue={length}/> length({length})
            <input type="checkbox" name="" id="number" defaultChecked={numallowed} onChange={()=>setNumallowed((prevCounter)=>!prevCounter)} /> Numbers
            <input type="checkbox" name="" id="number" defaultChecked={charallowed} onChange={()=>setCharallowed((prevCounter)=>!prevCounter)} /> Characters 
           </div>
           {/* <button onClick={passwordGenerator} className='bg-blue-400 rounded-lg p-2'>Generate</button> */}
          </div>
      </div>
    </>
  )
}

export default App
