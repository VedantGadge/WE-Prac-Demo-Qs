import React, { useState } from 'react'

const Counter = () => {
   const changeCounter = ()=>{
        setCounter(counter+1)
    }
    const resetCounter = ()=>{
        setCounter(0)
    }
    const [counter,setCounter] = useState(0)
  return (
    <div style={{display:'flex' , alignItems:'center',flexDirection:'column'}}>
        <h2>Count: {counter}</h2>
        <button onClick={changeCounter}>Click Me!</button>
        <button onClick={resetCounter} style={{marginTop:'5px'}}>Reset</button>
    </div>
  )
}

export default Counter