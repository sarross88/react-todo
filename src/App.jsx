import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'


let Search = () => {
  return(
    <div>
<label htmlFor='search'>Search: </label>
<input id='search' type='text'></input>
</div>
  );
}


const App = () => {

  return (
    <div>
      
      <h1>Todo List</h1>
<AddTodoForm/>
<Search/>
<hr/>
<TodoList/>
  </div>
  )
}

export default App;
