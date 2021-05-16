import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long' });
    const year = props.date.toLocaleString('en-US', {year: '2-digit' });
    const day = props.date.getFullYear();

    return (
    <div className="expense-date">        
        <div className="expense-month">{month}</div>
        <div className="expense-year">{year}</div>
        <div className="expense-date">{day}</div>
    </div>
    )
}

export default ExpenseDate;