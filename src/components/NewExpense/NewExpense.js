import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.scss';
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
    <div className={styles.newExpense}>
      {!isEditing && (
        <>
          <span className={styles.newExpense__title}>اضافه کردن هزینه جدید</span>
          <button className={styles.newExpense__button} onClick={startEditingHandler} title="اضافه کردن هزینه جدید">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} checkedToggle={props.chechedToggle} />}
    </div>
  );
};

export default NewExpense;