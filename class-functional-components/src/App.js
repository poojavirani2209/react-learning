import { useState } from "react";
import "./App.css";
import Books from "./components/Books";

function App() {
  let [filterString, setFilterString] = useState("");
  let [showBooks, setShowbooks] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="filter books"
          onChange={({ target }) => setFilterString(target.value)}
        />
        {showBooks ? (
          <button
            onClick={() => {
              setShowbooks(false);
            }}
          >
            Hide books
          </button>
        ) : (
          <button
            onClick={() => {
              setShowbooks(true);
            }}
          >
            Show Books
          </button>
        )}
        {showBooks && <Books filterString={filterString} />}
      </header>
    </div>
  );
}

export default App;
