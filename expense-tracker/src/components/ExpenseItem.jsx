import './ExpenseItem.css';

export default function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className='expense-description'><h2>expense name</h2>
                <div>expense value</div></div>
        </div>
    );
}