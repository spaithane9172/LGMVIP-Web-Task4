import React from 'react'
import '../css/calci.css'
export const Calci = () => {
  
  const one=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"1";
  }
  const two=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"2";
  }
  const three=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"3";
  }
  const four=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"4";
  }
  const five=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"5";
  }
  const six=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"6";
  }
  const seven=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"7";
  }
  const eight=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"8";
  }
  const nine=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"9";
  }
  const zero=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"0";
  }
  const add=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"+";
  }
  const sub=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"-";
  }
  const mul=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"*";
  }
  const div=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value+"/";
  }
  const del=()=>{
    document.getElementById("inputValue").value=document.getElementById("inputValue").value.slice(0,document.getElementById("inputValue").value.length-1);
  }
  const clear=()=>{
    document.getElementById("inputValue").value="";
  }
  const eql=()=>{
    try {
      document.getElementById("inputValue").value=eval(document.getElementById("inputValue").value) 
    } catch (error) {
      document.getElementById("inputValue").value="Error";
    }
  }
  return (
    <>
    <h1>Calculator</h1>
    <div className='calci'>
        <div className='input'>
            <input type="text" id="inputValue" disabled/>
        </div>
        <div className='btns'>
            <button className='mr' onClick={one}>1</button>
            <button className='mr' onClick={two}>2</button>
            <button className='mr' onClick={three}>3</button>
            <button onClick={add}>+</button>
        </div>
        <div className='btns'>
            <button className='mr' onClick={four}>4</button>
            <button className='mr' onClick={five}>5</button>
            <button className='mr' onClick={six}>6</button>
            <button onClick={sub}>-</button>
        </div>
        <div className='btns'>
            <button className='mr' onClick={seven}>7</button>
            <button className='mr' onClick={eight}>8</button>
            <button className='mr' onClick={nine}>9</button>
            <button onClick={mul}>*</button>
        </div>
        <div className='btns'>
            <button className='mr' onClick={del}>&#x2190;</button>
            <button className='mr' onClick={zero}>0</button>
            <button className='mr' onClick={eql}>=</button>
            <button onClick={div}>/</button>
        </div>
        <div className='Cbtns'>
          <button onClick={clear}>Clear</button>
        </div>
    </div>
    </>
  )
}
