import React, { useState } from "react";
import './todo.css'

function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="todo-input">
        <div className="input-div">
            <h1 className="todo-h1">Todo List</h1>
            <textarea name="todo-input" cols="10" rows="4" type="text" maxlength="150" value={input} onChange={(e) => setInput(e.target.value)} className="todo-input-element"></textarea>
        </div>
        <div className="submit-todo-div">
            <button onClick={() => addTodo(input)} className='todo-button'>Add</button>
            <hr className="todo-hr"/>
        </div>
      <ul>
        <div className="todos-div">
            {list.map((todo) => (
            <li key={todo.id} id='todos-list'>
                {"• " + todo.todo}
                <button onClick={() => deleteTodo(todo.id)} id='delete-todo-button'>&times;</button>
            </li>
            ))}
        </div>
      </ul>
    </div>
  );
}

export default Todo;