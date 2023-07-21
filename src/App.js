import React, { useState } from 'react';
import ExpenseItemContainer from './components/expenses/ExpenseItemContainer';
import NewExpense from './components/NewExpenses/NewExpense';
import { expenses } from './components/expenses';

export default function App() {
  const [expensesArr, setExpenses] = useState(expenses);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemContainer expenses={expensesArr} />
    </div>
  );
}