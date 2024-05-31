import React, { useState } from 'react'
 
 export default function Textutils(props) {
  const [text,setText] = useState('you can write anything');
  const handleClick=()=>{
    const newText =  text.toUpperCase()
    setText(newText);
  }
  const handleClickLower=()=>{
    const newText =  text.toLowerCase()
    setText(newText);
  }
  const handelChange =(event)=>{
   const name =event.target
   setText(name.value)
  }
  const handleClear=()=>{
    const newText=""
    setText(newText)
  }
   return (
    <>
     <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <textarea  className='form-control my-3' value={text} onChange={handelChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id='myBox' rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick}>change to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClickLower}>change to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear</button>
     </div>
     <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time taken to read summary</p>
       <h1>
       Preview
       </h1>
       <p>{text.length>0 ? text:"Nothing to preview"}</p>
     </div>
     
     </>
   )
 }
 