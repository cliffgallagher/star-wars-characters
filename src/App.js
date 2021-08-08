import React from 'react';
import SearchForm from './SearchForm';

const App = () => {

  const processSearchTerm = (searchTerm) => {
    console.log('the search term is ' + searchTerm);
  }

  return <SearchForm passSearchTerm={processSearchTerm}/>
}

export default App;