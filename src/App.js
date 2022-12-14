import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'PS5',
    amount: 573,
    date: new Date(2021, 9, 8),
  },
  {
    id: 'e6',
    title: 'IPhone 13 pro max',
    amount: 1099,
    date: new Date(2021, 6, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isCheched, setIsCheched] = useState(false);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  const changeToggleHandler = status => {
    setIsCheched(!status);
  }

  return (
    <div>
      <ToggleTheme onChangeToggle={changeToggleHandler} />
      <NewExpense onAddExpense={addExpenseHandler} chechedToggle={isCheched} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
