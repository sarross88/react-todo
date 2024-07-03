import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.list.map( (item) => {
        return( <TodoListItem item={item}/>);
})} </ul>
); 
}

 

export default TodoList;