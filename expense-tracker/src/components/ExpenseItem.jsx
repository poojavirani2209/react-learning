import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import './ExpenseItem.css';

export default function ExpenseItem({expense}) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={expense.date}/>
           <ExpenseDescription expense={expense}/>
        </Card>
    );
}