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

let TodoList = () => {
    <ul>
    {myTodo.map(function(item){
      return(
        <li key={item.id}>
          <span>
            <a>{item.title}</a>
          </span>
        </li>
      );
    })}
    </ul>
}
 
export default TodoList;