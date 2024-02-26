import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import './index.css'
import Button from './components/button'
import Screen from './components/screen'

const  App= ()=> {
   const buttonColor="orange"

   const [text,setText]=useState('')
   const [result,setResult]=useState('0')

   const addToText = (val)=>{
    setText((text)=>[...text, val + ""])
   }

   const calculate = ()=>{
    if(result!=text){
      const input=text.join("")
      setResult(evaluate(input))
      setText(`${evaluate(input)}`)
    }
   }
   
   const clearAll = (val)=>{
    setText('')
    setResult('0')
   }

   const deleteLastDigit = () => {
    setText((text) => text.slice(0, -1))
  }

  return(
    <div className='app'>
      <div className='calc-table'>
        <Screen text={text} result={result}/>

        <div className='buttons-row'>
        {['7','8','9'].map((e)=><Button symbole={e} handleClick={addToText}/>)}
        <Button symbole={"/"} handleClick={addToText}  color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        {['4','5','6'].map((e)=><Button symbole={e} handleClick={addToText}/>)}
        <Button symbole="*" handleClick={addToText}  color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        {['1','2','3'].map((e)=><Button symbole={e} handleClick={addToText}/>)}
        <Button symbole={"+"} handleClick={addToText} color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        {['0','.'].map((e)=><Button symbole={e} handleClick={addToText}/>)}
        <Button symbole={"="} handleClick={calculate} color={buttonColor}/>
        <Button symbole={"-"} handleClick={addToText}  color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        <Button symbole={"CA"} backColor={"#f2a33c"} handleClick={clearAll}/>
        <Button symbole={"<="} backColor={"#f2a33c"} handleClick={deleteLastDigit}/>
        </div>
      </div>
    </div>
  )
}
export default App