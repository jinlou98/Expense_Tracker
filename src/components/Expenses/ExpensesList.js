import React from 'react';

import ExpenseItem from './ExpenseItem'


const ExpensesList = () => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return <ul className="expenses-list">
        {filterExpenses.map((expense) => (
        <ExpenseItem
          // key is used for react to identify the elements
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))
    };
    </ul>
};

export default ExpensesList;