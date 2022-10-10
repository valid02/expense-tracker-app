import React, { useState } from 'react'; 

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle.trim(),
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData); 

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>عنوان</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>قیمت</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>تاریخ</label>
          <DatePicker
            className={props.checkedToggle ? 'bg-dark' : ''}
            weekDays={weekDays}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>لغو</button>
        <button type="submit">اضافه کردن</button>
      </div>
    </form>
  );
};

export default ExpenseForm;