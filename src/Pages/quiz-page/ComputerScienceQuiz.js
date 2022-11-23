import React, { useState } from 'react'
import Start from "./Start"
import { DataComputerScienceQuiz } from '../../API';

import "./Quiz.css";

const ComputerScienceQuiz = ()=> {

    const [start, setStart] = useState(false);
  
    return (
      <div className="quiz">
        { start ? <DataComputerScienceQuiz /> : <Start props={setStart} />} 
      </div>
    );
  }
  
  
  export default ComputerScienceQuiz;