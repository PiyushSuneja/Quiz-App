import React, { useState } from "react";
import ErrorMessage from "../../error/Errormessage";
import {useNavigate} from 'react-router-dom'
import {Button} from '@material-ui/core'
import  './question.css';
export default function Question({
    currQues,
    questions,
    setCurrQues,
    options,
    setOptions,
    score,
    setScore,
    correct   
}){
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate=useNavigate();
    const handleselect=(i)=>{
              if(selected===i && selected===correct){
                  return "select";
              }else if(selected===i && selected!==correct){
                  return "wrong";
              }else if(i===correct){
                 return "select";
              }
    }

    const handlecheck=(i)=>{
        setSelected(i);
        if(i === correct && setScore(score+1)){
         setError(false);
        }

    }
    const handleQuit=()=>{
       navigate('/')


    }
    const handleNext=()=>{
        setError(false)
        if(currQues>8){
            navigate('/result')
        }else if(selected){
            setCurrQues(currQues+1)
            setSelected()
        }else
        {setError("Please select an option first")}
    }

    
    return(
        <div className="question">
          <h1>Question:{currQues+1}</h1>
          <div className="single_question">
              <h2>{questions[currQues].question}</h2>
              <div className="options">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options &&
                    options.map(i=>
                        <button onClick={()=>handlecheck(i)}
                        className={`singleoption ${selected && handleselect(i)}`}
                        key={i}
                        disabled={selected}   //if selected disable for other options
                        >{i}</button>
                    )
                }
              </div>
                          <div className="controls">
                              <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              style={{width:185}}
                           
                             onClick={handleQuit}
                              >Quit</Button>
                              <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              style={{width:185}}
                              onClick={handleNext}
                              >Next Question</Button>
                          </div>
          </div>
            
        </div>
    )
}