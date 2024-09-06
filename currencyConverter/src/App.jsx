import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Optionbtn from './Components/Optionbtn'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App({amount,onAmountChange}) {
  const [count, setCount] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <>
      <div className='w-full h-screen bg-purple-400'>
        <div className=' w-[400px] h-[65%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2'>
          <div className='flex flex-col justify-center items-center'>
            <img className='h-[60px] w-[60px] ' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHOKhFnzOkc2jZtuq6FK4QepCeMYNQkONvKySIDsfALTHWuUA2" alt="" />
            <h1 className='uppercase font-bold text-2xl'>Currency converter</h1>
          </div>
          <div className='mt-5 flex justify-center gap-2'>
            <label htmlFor="" className='font-semibold'>Amount:</label>
            <input type="text" className='border-b-2 border-zinc-900 w-[70%]' value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
          </div>
          <div className=' mt-5 flex items-center justify-around'>
            <Optionbtn />
            <h2 className='font-bold text-xl'>to</h2>
            <Optionbtn/>
          </div>
          <button className='bg-purple-400 text-white font-bold w-full py-2 mt-5 rounded'>Convert</button>
        </div>
      </div>
    </>
  )
}

export default App
