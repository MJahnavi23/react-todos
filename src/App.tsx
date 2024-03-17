import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable'
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: "Feed Dog", rowAssigned: "Bunny"},
    // {rowNumber: 2, rowDescription: "Say Hello", rowAssigned: "John"},
    // {rowNumber: 3, rowDescription: "Say Bye", rowAssigned: "Pop"},
    // {rowNumber: 4, rowDescription: "Charge Phone", rowAssigned: "Pop"},
  ])

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if(todos !== null || todos !== undefined){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else{
      rowNumber = 1;
    }
      const newTodo = { 
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
      // console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'> 
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          } 
       </div>
      </div>
    </div>
  );
}
