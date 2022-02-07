import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["item1", "item2"]);
  const [completeTodos, setCompleteTodos] = useState(["item3"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="input to do item" />
        <button>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">not completed items</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>complete</button>
                <button>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">completed items</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
