
import React, { useState } from 'react';
import './App.css';
import { questions } from './question';


function App() {
  // questions.map((ele)=>{
    
  //   // console.log(ele);
  // })

  const [cuurentQuestion,setCurrentQuestion]=useState(0)
  const [score,setScore]=useState(0);
  const [showResults, setShowResults] = useState(false);

  const chnageQuestion=(Ans)=>{
    console.log(Ans);
    if(Ans){
      setScore(score+1)


    }
    if(cuurentQuestion+1<questions.length){
      setCurrentQuestion(cuurentQuestion+1)
    }
    else {
      setShowResults(true);
    }
  }
  const restGame=()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false);
  }
  return (
    <div className="App">
      
       <h1> Quiz App</h1>

        <h2>Current Score:{score}</h2>
      {showResults? 
      <>
     <div className='showResult'>
            <h1>Final Result</h1>
            <h3 style={{fontSize:'1.8rem'}}><span style={{color:'orange'}}> {score} </span> out of {questions.length} </h3>
            <button onClick={()=>{
              restGame()
            }}>Rest Game</button>
        </div>
      </>
      :
      <>
       
        <div className='question-tag'>
        <h3>Question {cuurentQuestion+1} out of 5</h3>
        <p >
          {questions[cuurentQuestion].text}
        </p>
        <ul>
         {questions[cuurentQuestion].options.map((ele)=>{
          return <>
          <li onClick={()=>{
            chnageQuestion(ele.isCorrect)
          }}>{ele.text}</li>
          </>
         })}
        </ul>
      </div>
      </>}
      
       

    </div>
  );
}

export default App;
