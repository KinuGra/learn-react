import { useState, useRef } from 'react';
import TodoList from './TodoList.js'
import { v4 as uuidv4 } from 'uuid';
import { Weather } from './features/Weather.js';
import "./features/getWeather.js"
import { getWeather } from './features/getWeather.js';

function App() {
  const [todos, setTodos] = useState([
    // {id: 1, name: "Todo1", completed: false },
    // {id: 2, name: "Todo2", completed: false },
  ]); // hooks

  // inputの値を簡単に取得できる
  const todoNameRef = useRef();
  const cityRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    if(name === "") return; // 空のタスクが作成されなくなる
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null;
  };

  const handleAddWeather = async () => {
    let data;

    if(cityRef.current.value === "東京") {
      data = await getWeather("130010")
    } else if(cityRef.current.value === "大阪") {
      data = await getWeather("270000")
    } else {
      return;
    }

    const today = data.forecasts[0];
    const text = data.title + " : " + today.date + ", " + today.telop;

    // 実際にタスクを追加する処理
    setTodos((prev) => {
      return[...prev, {id: uuidv4(), name:text, completed: false}]
    })
  }

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
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo} style={buttonStyle}>add</button>
      <button onClick={() => handleClear()} style={buttonStyle}>checked task clear</button>
      ramaining task:{todos.filter((todo) => !todo.completed).length}
      <div>
        <input type="text" ref={cityRef} style={{padding: "5px", borderRadius: "5px"}}></input>

        {/* propsで渡しているだけなのでhandleAddWeatherを発火させるには
          　渡されたコンポーネント内で発火させる必要がある */}
        <Weather onClick={handleAddWeather} style={buttonStyle} />
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;

const buttonStyle = {
  borderRadius: "10px",
  padding: "5px 10px",
  backgroundColor: "black",
  color: "white",
}
