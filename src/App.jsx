// import { useState } from 'react'

import './App.css'


const todoList = [
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

const List = () => {
    <ul>
{todoList.map((listItem)=>{
    {<li key={listItem.id}>{listItem.title}</li>}
})}
    </ul>
}



function App() {

  return (
    <div>
      
      <h1>Todo List</h1>

      <List></List>

    </div>
  )
}

export default App;
