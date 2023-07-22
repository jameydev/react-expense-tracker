import React, { useState } from 'react';
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

export default function ExpenseItemContainer(props) {
    const  [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter 
                onChangeFilter={filterChangeHandler}
                selected={filteredYear} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
    
}