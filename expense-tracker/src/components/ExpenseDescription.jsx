export default function ExpenseDescription({expense}){
    return( <div className='expense-description'><h2>{expense.expenseName}</h2>
                <div className='expense-item__price'>{expense.expenseValue}</div></div>)
}