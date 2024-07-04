import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import Search from './Search.jsx'
import TodoListItem from './TodoListItem'
import AddTodoForm from './AddTodoForm.jsx'


//any array used here would be globally, this is a module list, solution is props 


const App = () => {
  const myTodo = [
    {
      id: 1,
      title: "Read for first assignment.",
    },
    {
      id: 2,
      title: "Attend a group mentor session.",
    },
    {
      id: 3,
      title: "Complete assignment.",
    }
  ];


  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  const handleTodo =(event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
<AddTodoForm onTodo={handleTodo}/>
<Search onSearch={handleSearch}/>
<hr/>
<TodoList list={myTodo}/>
  </div>
  )
  
  
};


export default App;
