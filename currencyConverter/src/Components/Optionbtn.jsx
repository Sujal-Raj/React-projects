import React from 'react'
import useCurrencyInfo from '../Hooks/useCurrencyInfo'

let currecyOptions = [Object.keys(useCurrencyInfo)]

function Optionbtn(selectCurrency,onCurrencyChange) {
  return (
    <>
        
        <select value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} className='bg-purple-400 text-white font-semibold px-2 py-1 rounded-lg'>
        {currecyOptions.map((currency,index)=>(
          <option key={index} value={currency}>{currency}</option>
        ))}
        </select>
        
        
    </>
  )
}

export default Optionbtn