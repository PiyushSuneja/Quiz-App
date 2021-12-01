import './home.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import React from "react";
import {TextField} from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import {Button} from '@material-ui/core';
import  '../data/Categories';
import Categories from '../data/Categories';
import ErrorMessage from '../error/Errormessage';
export default function Home({name,setName,fetchQuestions}){

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate=useNavigate();
      const handleSubmit=()=>{
          if(!category||!difficulty||!name){
              setError(true);
              return
          }else{
              setError(false);
              fetchQuestions(category,difficulty);
              navigate('/quiz');
          }
      }

    return(
        <div className="content">
            <div className="settings">
                <span style={{fontSize:"30"}}>Quiz Settings</span>
                <div className="settings_select">
                    {error&&<ErrorMessage>Please fill all the fields</ErrorMessage>}
                <TextField style={{marginBottom:25}}
                 label="Enter Your Name"
                  variant="outlined"
                  onChange={(e)=>setName(e.target.value)}
                 ></TextField>
                <TextField
                select
                  label="Select Category"
                  variant="outlined"
                  style={{marginBottom:25}}
                  onChange={(e)=>setCategory(e.target.value)}
                  value={category}
                  >
                {
                    Categories.map((cat)=>(
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))
                }
               </TextField>
               <TextField
                  label="Select Category"
                  variant="outlined"
                  style={{marginBottom:25}}
                  select
                  onChange={(e)=>setDifficulty(e.target.value)}
                  value={difficulty}
                  >
            <MenuItem key="Easy" value="easy">Easy</MenuItem>
            <MenuItem key="Medium" value="medium">Medium</MenuItem>
            <MenuItem key="Hard" value="hard">Hard</MenuItem>
               </TextField>               
          <Button variant="contained" color="primary" size="large"
          onClick={handleSubmit}>Start Quiz</Button>

                </div>
            </div>
            <img src="./quiz.svg" className="banner" alt="Loading..."></img>
        </div>
    )
}