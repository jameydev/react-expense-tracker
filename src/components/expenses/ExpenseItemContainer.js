import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';

export default function ExpenseItemContainer(props) {
    const  [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p class="not-found">No expenses found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = 
            filteredExpenses.map(expense => 
                <ExpenseItem 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id} 
                />
    )}

    return (
        <Card className="expenses">
            <ExpenseFilter 
                onChangeFilter={filterChangeHandler}
                selected={filteredYear} 
            />
            {expensesContent}
        </Card>
    );
    
}