import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Button from './Button';
import { v4 } from 'uuid';

const TodoForm = ({addTodo}) => {
    const [todoString, setTodoString] = useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(todoString === ""){
            return toast.error("Please enter a task")
        }
        const todo ={
          todoString,
          id: v4(),
          selected:false,
          hover:false,
        }
        addTodo(todo)
        toast.success("task added successfully")
        setTodoString("");
    };

  return (
    <form action="" onSubmit={handleSubmit}>
        <input 
        className='h-15 mr-2 w-96 rounded-xl px-4 py-4 bg-gray'
        type="text" 
        name='todo'
        id='todo'
        placeholder='Add task here...'
        value={todoString}
        onChange={e => setTodoString(e.target.value)}
        />
        <Button/>
    </form>
  )
}

export default TodoForm;