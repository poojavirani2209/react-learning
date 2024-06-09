import { Component } from "react";
import ClassBasedBooks from "./ClassBasedBooks";

export default class ClassBasedApp extends Component {
    constructor() {
        super()

        this.state = {
            showBooks: true,
            filterString: ''
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <input
                        placeholder="filter books"
                        onChange={({ target }) => this.setState({ filterString: target.value })}
                    />
                    {this.state.showBooks ? (
                        <button
                            onClick={() => {
                                this.setState({ showBooks: false });
                            }}
                        >
                            Hide books
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                this.setState({ showBooks: true });
                            }}
                        >
                            Show Books
                        </button>
                    )}
                    {this.state.showBooks && <ClassBasedBooks filterString={this.state.filterString} />}
                </header>
            </div>
        )
    }
}