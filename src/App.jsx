import { useState } from 'react'
import Card from './components/Card/Card'

import './App.css'
import Form from './components/Form/Form'

function App() {

  const [number, setNumber] = useState('0000 0000 0000 0000')
  const [name, setName] = useState('Jane Appleseed')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState ('00')
  const [cvv, setCvv] = useState ('123')

  const handleName = (data)=>{
    if(data == ''){
      setName('Jane Appleseed')
    } else {
      setName(data)
    }
  }

  const handleNumber = (data)=>{
    if(data == ''){
      setNumber('0000 0000 0000 0000')
    } else {
      setNumber(data)
    }
    
  }

  const handleMonth = (data)=>{
    if(data == ''){
      setMonth('00')
    } else {
      setMonth(data)
    }
    
  }

  const handleYear = (data)=>{
    if(data == ''){
      setYear('00')
    } else {
      setYear(data)
    }
    
  }

  const handleCvv = (data)=>{
    if(data == ''){
      setName('123')
    } else {
      setCvv(data)
    }
    
  }


  return (
    <div className="App">

      <Card number={number} name={name} month={month} year={year} cvv={cvv}/>

      <Form handleName={{handleName}} handleNumber={{handleNumber}} handleMonth={{handleMonth}} handleYear={{handleYear}} handleCvv={{handleCvv}}/>
  

      {/* <!-- Completed state start --> */}
      {/* 
  Thank you!
  We've added your card details
  Continue */}

      {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  )
}

export default App
