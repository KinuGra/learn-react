import React from 'react'
import Todo from './Todo'

const numbers = [1,2,3,4,5];
const nums = numbers.map((n) => n*3);

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div>
            {todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)}
        </div>
    );
};

export default TodoList;