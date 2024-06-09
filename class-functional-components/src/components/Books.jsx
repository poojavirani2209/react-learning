import Book from "./Book";

export default function Books({ filterString }) {
    let list = ['the one minute manager', 'girl on the train', 'clean code'];

    return (
        <ul>
            {list.filter((book) => { return book.includes(filterString) }).map((name) => { return <Book name={name}></Book> })}
        </ul>
    )
}