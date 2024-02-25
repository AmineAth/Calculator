import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import './index.css'
import Button from './components/button'
import Screen from './components/screen'

const  App= ()=> {
   const buttonColor="orange"

   const [text,setText]=useState('')
   const [result,setResult]=useState('')

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
    setResult('')
   }

   const deleteLastDigit = () => {
    setText((text) => text.slice(0, -1))
  }

  return(
    <div className='app'>
      <div className='calc-table'>
        <Screen text={text} result={result}/>

        <div className='buttons-row'>
        <Button symbole={"7"} handleClick={addToText}/>
        <Button symbole="8" handleClick={addToText}/>
        <Button symbole={"9"} handleClick={addToText}/>
        <Button symbole={"/"} handleClick={addToText}  color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        <Button symbole={'4'} handleClick={addToText}/>
        <Button symbole={'5'} handleClick={addToText}/>
        <Button symbole="6" handleClick={addToText}/>
        <Button symbole="*" handleClick={addToText}  color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        <Button symbole={"1"} handleClick={addToText}/>
        <Button symbole={"2"} handleClick={addToText}/>
        <Button symbole={"3"} handleClick={addToText}/>
        <Button symbole={"+"} handleClick={addToText} color={buttonColor}/>
        </div>
        <div className='buttons-row'>
        <Button symbole={"0"} handleClick={addToText}/>
        <Button symbole={"."} handleClick={addToText}/>
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