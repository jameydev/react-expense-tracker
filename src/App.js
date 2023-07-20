import ExpenseItemContainer from './components/expenses/ExpenseItemContainer';
import { expenses } from './components/expenses';

export default function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}