import React, { useState } from 'react'
import Start from "./Start"
import { DataMythologyQuiz } from '../../API';

import "./Quiz.css";

const MythologyQuiz = ()=> {

    const [start, setStart] = useState(false);
  
    return (
      <div className="quiz">
        { start ? <DataMythologyQuiz /> : <Start props={setStart} />} 
      </div>
    );
  }
  
  
  export default MythologyQuiz;