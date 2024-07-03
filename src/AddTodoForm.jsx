import { useState } from 'react';

const AddTodoForm = (props) => {

const [toDoItem, setTodoItem] = React.useState('');

console.log(`rendering todo with toDoItem: ${toDoItem}`);

const handleTodoChange = (event) => {
    setTodoItem(event.target.value);
    props.onTodo(event);
}

    return (
        <form>
            <label htmlFor='todoTitle'>Title: </label>
            <input id='todoTitle' type='text' onChange={handleTodoChange}></input>
            <button type='submit'>Add</button>
            <p>
                Todo: <strong>{toDoItem}</strong>
            </p>
        </form>
    )
}

export default AddTodoForm; 