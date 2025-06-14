import { useState } from 'react';
import TodoList from './TodoList.js'

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2"]); // hooks

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：0</div>
    </div>
  );
}

export default App;
