import { useState } from 'react';

const Search = (props) => {
    //this returns an array with two items, value of sstate, and function to change the state, function is the setSearchTerm
const [searchTerm, setSearchTerm] = React.useState('');

console.log(`rendering search with searchTerm: ${searchTerm}`);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.onSearch(event);
    }
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>
        <p>
            Searching for <strong>{searchTerm}</strong>
        </p>
      </div>
  );}


  export default Search;