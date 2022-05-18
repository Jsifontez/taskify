import React, { useState, useEffect, useRef } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDownloadDone } from 'react-icons/md';
import { Todo } from '../models/model';
import './styles.css';
import { Draggable } from 'react-beautiful-dnd'


type Props = {
  index: number;
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(

      todos.map(todo => (
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      ))
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleIsEdit = (id: number) => {

    if (!isEdit && !todo.isDone) setIsEdit(!isEdit)
    else if (isEdit && !todo.isDone) {

      setTodos(todos.map(todo => (
        todo.id === id ? {...todo, todo: editTodo} : todo
      )))
      setIsEdit(false)
    }
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))
    setIsEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect( () => {
    inputRef.current?.focus()
  }, [isEdit])

  return(
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={e => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEdit ? (
            <input
              ref={inputRef}
              type="text"
              value={editTodo}
              onChange={e => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : (
            todo.isDone ? (
              <s className="todos__single--text"> {todo.todo} </s>
            ) : (
              <span className="todos__single--text"> {todo.todo} </span>
            )
          )}
          <div>
            <span className="icon" onClick={() => handleIsEdit(todo.id)}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDownloadDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleTodo
