import { Toaster } from 'react-hot-toast';
import TodoForm from './components/TodoForm';
import TodoRow from './components/TodoRow';
import { useEffect, useState } from 'react';

function App() {
  const[todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodoList = localStorage.getItem('todoList')
    if(localTodoList){
      setTodos(JSON.parse(localTodoList));
    }
    else{}
  }, [])

  const addTodo = async todo => {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos])

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !==id))
  }


  return (
    <div className="h-screen flex items-center bg-[#FFFBF4]">
      <div className='bg-white shadow-2xl container mx-auto flex flex-col justify-between rounded-xl min-h-[42rem] w-fit '>
        <h1 className='font-bold text-5xl flex-none p-5'>Todo</h1>
        <div className='flex-1 p-5 overflow-y-auto'>
          <TodoRow todos={todos} setTodos={setTodos} markComplete={markComplete}/>
        </div>
        <div className='p-5 border-t border-gray'>
          <TodoForm addTodo={addTodo}/>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  );
}

export default App;
