import { useState, useRef } from 'react';
import TodoList from './TodoList.js'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    // {id: 1, name: "Todo1", completed: false },
    // {id: 2, name: "Todo2", completed: false },
  ]); // hooks

  // inputの値を簡単に取得できる
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    if(name === "") return; // 空のタスクが作成されなくなる
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  // 自力実装（map）
  // const handleDeleteTodo = () => {
  //   const copyTodos = [...todos];
  //   let newTodos = [];
  //   copyTodos.map((todo) => {
  //     if(todo.completed === false) {
  //       newTodos.push(todo);
  //     }
  //   })
  //   setTodos(newTodos);
  // }

  // 自力実装（filter）
  const handleClear = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={() => handleClear()}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
