import React, { useState } from 'react';

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from 'react-multi-date-picker';
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import styles from './ExpenseForm.module.scss';
import PN from "persian-number";

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

  const submitHandler = (event) => {
    event.preventDefault();

    const date_fa = new DateObject({
      date: enteredDate,
      calendar: persian,
      locale: persian_fa
    })

    const expenseData = {
      title: enteredTitle.trim(),
      amount: enteredAmount,
      date: {
        day: date_fa.day,
        monthName: date_fa.month.name,
        monthNumber: date_fa.month.number,
        year: date_fa.year
      }
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label className={styles.newExpense__label}>عنوان</label>
          <input 
            className={styles.newExpense__input} 
            type="text" 
            value={enteredTitle} 
            onChange={titleChangeHandler} 
          />
        </div>
        <div className={styles.newExpense__control}>
          <label className={styles.newExpense__label}>تاریخ</label>
          <DatePicker
            containerStyle={{
              width: '100%',
            }}
            inputClass={styles.newExpense__input}
            className={props.checkedToggle ? 'bg-dark' : ''}
            weekDays={weekDays}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={setEnteredDate}
            value={enteredDate}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label
            className={styles.newExpense__label}>
            قیمت ({ PN.convert(enteredAmount)} {<b>تومان</b>})
          </label>
          <input
            className={styles.newExpense__input}
            type="number" 
            min="1" 
            step="1" 
            value={enteredAmount} 
            onChange={amountChangeHandler} 
          />
        </div>
      </div>
      <div className={styles.newExpense__actions}>
        <button className={styles.newExpense__button} type="button" onClick={props.onCancel}>
          لغو
        </button>
        <button className={styles.newExpense__button} type="submit">
          اضافه کردن
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;