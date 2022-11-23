import React, { useState } from 'react'
import Start from "./Start"
import { DataMathematicsQuiz } from '../../API';

import "./Quiz.css";

const MathematicsQuiz = ()=> {

    const [start, setStart] = useState(false);
  
    return (
      <div className="quiz">
        { start ? <DataMathematicsQuiz /> : <Start props={setStart} />} 
      </div>
    );
  }
  
  
  export default MathematicsQuiz;