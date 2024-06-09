import { Component } from "react"
import ClassBasedBook from "./ClassBasedBook";
export default class ClassBasedBooks extends Component {

    constructor() {
        super()
    }
    
    render() {
        return <ul>
            {['the new one minute manager', 'clean architecture', 'working with legacy code'].filter((book) => { return book.includes(this.props.filterString) }).map((name) => { return <ClassBasedBook name={name}></ClassBasedBook> })}
        </ul>
    }
}