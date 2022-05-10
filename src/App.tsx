import React, { useState } from 'react';
import InputField from './components/InputField'
import TodoList from './components/TodoList'

import './App.css';
import { Todo } from './models/model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false} ])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
