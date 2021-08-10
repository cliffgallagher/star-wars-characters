import React, {useState} from "react";
import SearchForm from "./SearchForm";
import CharacterDisplay from './CharacterDisplay';

const App = () => {
  const [characterName, setCharacterName] = useState("Luke Skywalker");
  const [characterHeight, setCharacterHeight] = useState("172")

  async function processSearchTerm(searchTerm) {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      const data = await response.json();
      setCharacterName(data.results[0].name);
      setCharacterHeight(data.results[0].height);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <SearchForm passSearchTerm={processSearchTerm} />
      <CharacterDisplay name={characterName} height={characterHeight}/>
    </div>
  );
};

export default App;
