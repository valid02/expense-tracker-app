import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const timestamp = new Date().getTime().toString();
    const ID = timestamp + Math.floor(Math.random() * 1000).toString();
    const expenseData = {
      ...enteredExpenseData,
      id: ID,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <>
          <span className='new-expense__title'>اضافه کردن هزینه جدید</span>
          <button onClick={startEditingHandler} title="اضافه کردن هزینه جدید">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} checkedToggle={props.chechedToggle} />}
    </div>
  );
};

export default NewExpense;