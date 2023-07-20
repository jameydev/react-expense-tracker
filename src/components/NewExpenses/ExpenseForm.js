import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState(0);
    // const [enteredDate, setEnteredDate] = useState(new Date());
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = event => {
        // setEnteredTitle(event.target.value);
        setUserInput(prevState => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    const amountChangeHandler = event => {
        // setEnteredAmount(event.target.value);
        setUserInput(prevState => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }

    const dateChangeHandler = event => {
        // setEnteredDate(event.target.value);
        setUserInput(prevState => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        
        const expenseData = userInput;
        expenseData.enteredDate = new Date(userInput.enteredDate);

        console.log(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        value={userInput.enteredTitle} 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="text" 
                        value={userInput.enteredAmount} 
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2023-12-31"
                        value={userInput.enteredDate} 
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}