const TodoListItem = ({item}) =>{
        // const item = props.item;
        // const {item} = props;
        return (
          <li key={item.id}>
          <span>
            <a >{item.title}</a>
          </span>
      </li> 
        )
};

export default TodoListItem;