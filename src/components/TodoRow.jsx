import React from 'react'
import { MdClose } from 'react-icons/md'

const TodoRow = ({todos, markComplete,setTodos }) => {
    const handleClick =(todo) => {
        setTodos(todos.map(item => {
          if(item.id ===todo.id){
            return {...item, selected: !item.selected}
          }
          return item
        }))
    }
    const handleMouseEnter = (todo) => {
        setTodos(todos.map(item => {
          if(item.id ===todo.id){
            return{...item, hover: true}
          }
          return item
        }))
    };
    
    const handleMouseLeave = (todo) => {
      setTodos(todos.map(item => {
        if(item.id ===todo.id){
          return{...item, hover: false}
        }
        return item
      }))
    };

  return (
    <div>
      {todos.map(todo => (
        <div 
        key={todo.id}
        className='flex items-center gap-10 ease-in-out duration-700 h-9 text-3xl mt-5 mb-2'
        onMouseEnter={()=>handleMouseEnter(todo)}
        onMouseLeave={()=>handleMouseLeave(todo)}
        >
          <div 
          className={`cursor-pointer border-solid border w-7 h-7 rounded-full  ${todo.selected ? 'bg-button-green border-button-green' : 'bg-white border-black'}`}
          onClick={() => handleClick(todo)}
          ></div>
          {todo.todoString}
          <span 
          onClick={() => markComplete(todo.id)}
          className={`cursor-pointer bg-button-green w-10 h-10 place-content-center rounded-xl text-white ${todo.hover ? 'grid' : 'hidden'}`}
          ><MdClose/></span>
        </div>
      ))}
    </div>
  )
}

export default TodoRow;

