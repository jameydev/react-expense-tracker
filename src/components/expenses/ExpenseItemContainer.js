import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

export default function ExpenseItemContainer(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(expense => 
                <ExpenseItem 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id} 
                />
            )}
        </Card>
    );
    
}