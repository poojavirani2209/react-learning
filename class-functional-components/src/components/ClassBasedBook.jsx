import { Component } from "react"
export default class ClassBasedBook extends Component {

    constructor() {
        super()

    }
    
    render() {
        return <li>{this.props.name}</li>
    }
}