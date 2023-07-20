import ExpenseItemContainer from './components/expenses/ExpenseItemContainer';
import NewExpense from './components/NewExpenses/NewExpense';
import { expenses } from './components/expenses';

export default function App() {
  return (
    <div>
      <NewExpense />
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}