import React from "react";

const SearchForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.passSearchTerm(
      document.querySelector("input[name='characterName']").value
    );
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>
        Character name:<input type="text" name="characterName"></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
