import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div `

 margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const errorMsg = document.querySelector('.error-msg');
  const inputField = document.querySelector('.input-field');
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const emptyCheckHandler = (e)=>{
   if (enteredValue.trim().length >= 0) {
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
      <FormControl className="form-control">
        <label>Course Goal</label>
        <input type="text" className = {!isValid ? "red-bordered" : ""} onChange={goalInputChangeHandler} />
      </FormControl>
      <p className={'error-msg red ' + (isValid ? "hidden" : "")}>You have empty goal, hunh?</p>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
