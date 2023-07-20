import ExpenseItemContainer from './components/expenses/ExpenseItemContainer';
import NewExpense from './components/NewExpenses/NewExpense';
import { expenses } from './components/expenses';

export default function App() {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}