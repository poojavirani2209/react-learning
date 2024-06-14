import ExpenseItem from "./ExpenseItem";
import {data} from "../data";

export default function ExpenseItemsList() {
    const listItems = data.map((expense) => {
        return <ExpenseItem expense={expense} />;
    })
    return <div>{listItems}</div>;
}