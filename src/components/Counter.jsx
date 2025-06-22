import { useState } from 'react'
import '../components/Counter.css'

const Counter = () => {
    // COUNTER HAVE STATE that provide variable (count) & function (setCount)
    const [count, setCount] = useState(0); // use stateka use krke phle variable bnaynge or uske function ko bnaynge ko count ki value update krega
  return (
    <div className='counter-container'>
      <h1>Counter</h1>
       <p id='counter-para'>You have Clicked {count} times</p>
       {/* whenever clicked on thebuttion count value is updated  using state variable  */}
       <button className='counter-btn' onClick={()=>{ setCount(count+1) }}>Clicked me</button>
       <button className='counter-btn' onClick={()=>{ setCount(count-count) }}>Reset</button> 
    </div>
  )
}

export default Counter