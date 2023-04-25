import React, { useState } from 'react';
import styles from "../styles/time.module.css"

function TimeCalculator(){
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [diference, setDiference] = useState(0);

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handreEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleCalculateClick = () => {
    const input = new Date(`2023-01-01T${startTime}:00`);
    let output = new Date(`2023-01-01T${endTime}:00`);
    if (output < input) {
      output = new Date(output.getTime() + 24 * 60 * 60 * 1000);
    }
    const diff = (output.getTime() - input.getTime()) / (1000 * 60);
    setDiference(diff);
  };

    return (
      <div className={styles["calculator-container"]}>
        <h1  className={styles["title"]}>Time diference calculator</h1>
        <p className={styles["description"]}>Calculate the time difference between two specific moments quickly and accurately with our online tool.</p>
        <div className={styles["selection-container"]}>
        <label>
          <p>Start time:</p>
          <input type="time" value={startTime} onChange={handleStartTimeChange} />
        </label>
        <label>
        <p>End time:</p>
          <input type="time" value={endTime} onChange={handreEndTimeChange} />
        </label>
        </div>
        <div className={styles['separator']}></div>
        <div className={styles['result-container']}> 
        <button onClick={handleCalculateClick}>Calculate</button>
        <p>Diference: <span>{Math.floor(diference / 60)}:{('0' + (diference % 60)).slice(-2)}</span></p>
        </div>
      
      </div>
    );
}

export default TimeCalculator;