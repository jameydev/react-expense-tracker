import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}