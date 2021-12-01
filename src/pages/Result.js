import React from "react";
import {Button} from '@material-ui/core';
import './result.css'
export default function Result({name,score}){
    return (
        <div className="result">
          <span className="title">Final Score : {score}</span>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
          >
            Go to homepage
          </Button>
        </div>
      );
}