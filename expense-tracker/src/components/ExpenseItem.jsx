import './ExpenseItem.css';

export default function ExpenseItem({expense}) {
    return (
        <div className="expense-item">
            <div>{expense.date.toISOString()}</div>
            <div className='expense-description'><h2>{expense.expenseName}</h2>
                <div>{expense.expenseValue}</div></div>
        </div>
    );
}