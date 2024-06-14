export default function ExpenseDate({ date }) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[date.getMonth()];
    return (
    <div><div>{month}</div>
    <div>{date.getFullYear()}</div>
    <div>{date.getDate()}</div></div>)
}