import React, { useState } from "react";

const SearchForm = (props) => {
  const [characterName, setCharacterName] = useState("");

  const characterNameChangeHandler = (event) => {
    setCharacterName(event.target.value)
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.passSearchTerm(
      characterName
    );
    setCharacterName("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>
        Character name:<input type="text" name="characterName" value={characterName} onChange={characterNameChangeHandler}></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
