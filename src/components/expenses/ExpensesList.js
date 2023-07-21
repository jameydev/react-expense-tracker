import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

export default function ExpensesList(props) {
    let expensesContent = <h2 className="expenses-list__fallback">No expenses found</h2>;

    if (props.expenses.length > 0) {
        expensesContent = 
            props.expenses.map(expense => 
                <ExpenseItem 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id} 
                />
    )}

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}