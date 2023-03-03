
// import {useState}from 'react'
import './index.css'
import { useState } from "react";
import Player1 from "./components/Player1";
const App=()=> {
  const [inputValue, setInputValue] = useState(null);
  const [updateValue, setUpdateValue] = useState(inputValue);
  const[trigger1,setTrigger1]=useState(0)
  const[trigger2,setTrigger2]=useState(0) 
  const[playerOne,setPlayerOne]=useState(false)
  const[playerTwo,setPlayerTwo]=useState(false)
  console.log(inputValue)
   const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    console.log(inputValue)
    setUpdateValue(inputValue);
    setInputValue('');
  };
  const increasePlayerOne=()=>{
    setPlayerOne(true)
    setPlayerTwo(false)
    const checkTriggerVal=trigger1
    if(checkTriggerVal<updateValue){
      setTrigger1((prevTrigger)=>prevTrigger+1)
    }
else{
  alert('player 1 is winner ')
}
  }
const increasePlayerTwo=()=>{
  setPlayerOne(false)
  setPlayerTwo(true)
  const checkTriggerValue=trigger2
  // console.log(checkTriggerValue)
  if(checkTriggerValue<updateValue){
    setTrigger2((prevTrigger)=>prevTrigger+1)
  }
  else{
    alert('Player 2 is winner')
  }
}
const resetGame=()=>{
setInputValue('')
setUpdateValue(0)
setTrigger1(0)
setTrigger2(0)
    console.log('hello')
}
 return (
    <>
    <center>
    <h1 align='center'>player-vs-player</h1>
    <input
        type="Number"
        id="inputValue"
        name="inputValue"
        onChange={handleChange}
        value={inputValue} 
      />
       {/* <h2>player1: {inputValue}</h2> */}
       <button onClick={handleSubmit}>submit</button>
<h2>WiningScore: {updateValue}</h2>

<Player1 trigger1={trigger1} increasePlayerOne={increasePlayerOne} trigger2={trigger2} increasePlayerTwo={increasePlayerTwo}
 resetGame={resetGame} playerOne={playerOne} playerTwo={playerTwo}/>
</center> 
 </>
  );
}
export default App;
