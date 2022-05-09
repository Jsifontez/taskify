import React from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField = ({ todo, setTodo, handleAdd} : Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
      />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField
