import React, { useState } from 'react'

function App() {
  let [interest,setinterest] =useState(0);
  let [amount,setamount] =useState(0);
  let [rate,setrate] =useState(0);
  let [years,setyears] =useState(0);

  let calcinterest = (e)=>{
    e.preventDefault();
    let value = ((amount*rate*years)/100);
    setinterest(value);
  }

  let reload = ()=>{
    window.location.reload();
  }
  return (
    <>
      <h1>Simple Interest calculator</h1>
      <h2>Calculate your simple interest easily</h2>
      <h1>{`Rs.${interest}`}</h1>
      <form action="">
        <input type="number" name="" id="" placeholder='Principal amount' onChange={(e)=>setamount(e.target.value)}/>
        <input type="number" name="" id="" placeholder='Rate of interest(%)' onChange={(e)=>setrate(e.target.value)} />
        <input type="number" name="" id="" placeholder='Time period(years)' onChange={(e)=>setyears(e.target.value)} />
        <input type="submit" value="Calculate" onClick={calcinterest} />
        <button onClick={reload}>Reset</button>
      </form>
    </>
  )
}

export default App