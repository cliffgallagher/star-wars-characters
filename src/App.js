import React from 'react';
import SearchForm from './SearchForm';

const App = () => {

  async function processSearchTerm(searchTerm) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  return <SearchForm passSearchTerm={processSearchTerm}/>
}

export default App;