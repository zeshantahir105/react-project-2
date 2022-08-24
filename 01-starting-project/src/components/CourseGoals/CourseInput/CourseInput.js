import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const errorMsg = document.querySelector('.error-msg');
  const inputField = document.querySelector('.input-field');
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const emptyCheckHandler = (e)=>{
   if (enteredValue.trim().length === 0) {
    setIsValid(false);
  }else{
    setIsValid(true);
  } 
  }
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    }else{
      props.onAddGoal(enteredValue);
      setIsValid(true);
    }
  };
  return (
    <form onSubmit={formSubmitHandler} onChange={emptyCheckHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" className = {!isValid ? "red-bordered" : ""} onChange={goalInputChangeHandler} />
      </div>
      <p className={'error-msg red ' + (isValid ? "hidden" : "")}>You have empty goal, hunh?</p>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
