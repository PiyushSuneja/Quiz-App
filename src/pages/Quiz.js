import { CircularProgress } from "@material-ui/core";
import './quiz.css';
import Question from "../components/Question/Question";

import React from "react";
import { useEffect,useState } from "react";
export default function Quiz({name,score,questions,setQuestions,setScore}){
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
   
    useEffect(()=>{
        console.log(questions);
        setOptions(questions && handleShuffle([questions[currQues]?.correct_answer ,
            ...questions[currQues]?.incorrect_answers,//spread opeartor is used for spreading args.
        ]));
    },[questions,currQues]);
    console.log(options);
    const handleShuffle=(optionfromarray)=>{
        return optionfromarray.sort(()=>Math.random()-0.5);
    }
    return(
       
        <div  className="quiz">
         <span className="subtitle"> Welcome {name}</span>  
         { questions ?(
             <>
           <div className="quizInfo">
           <span>{questions[currQues].category}</span>
           <span>Score:{score}</span>
           </div>
           <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            options={options}
            setOptions={setOptions}
            questions={questions}
            score={score}
            setScore={setScore}
            correct={questions[currQues]?.correct_answer}
           />
         </>
       
              
         ):
         (<CircularProgress style={{margin:100}}
             color="inherit"
             size={150}
             thickness={1}
             ></CircularProgress>)
         }
         
        </div>
    )
}