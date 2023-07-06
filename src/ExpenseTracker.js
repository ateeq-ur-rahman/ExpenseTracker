import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (title !== '' && amount !== '') {
      const newExpense = {
        id: Math.random().toString(),
        title,
        amount: +amount
      };

      setExpenses(prevExpenses => [...prevExpenses, newExpense]);
      setTitle('');
      setAmount('');
    }
  };

  const deleteExpense = (id) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className="expense-list">
        {expenses.map(expense => (
          <li key={expense.id}>
            <span className="expense-title">{expense.title}</span>
            <span className="expense-amount">${expense.amount}</span>
            <button className="delete-button" onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="total-expense">Total Expense: ${totalExpense}</div>
    </div>
  );
};

export default ExpenseTracker;
