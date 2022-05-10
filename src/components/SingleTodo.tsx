import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDownloadDone } from 'react-icons/md';
import { Todo } from '../models/model';
import './styles.css';


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return(
    <form className="todos__single">
      <span className="todos__single--text"> {todo.todo} </span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDownloadDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
