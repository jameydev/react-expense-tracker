import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function ExpenseItemContainer(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense, i) => 
                <ExpenseItem 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} 
                />
            )}
        </div>
    );
    
}