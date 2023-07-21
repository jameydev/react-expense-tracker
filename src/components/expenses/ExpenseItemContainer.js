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

    return (
        <Card className="expenses">
            <ExpenseFilter 
                onChangeFilter={filterChangeHandler}
                selected={filteredYear} 
            />
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