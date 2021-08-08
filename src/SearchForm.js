import React from 'react';

const SearchForm = (props) => {
    const userCharacterName = (event) => {
        console.log(event.target.value);
    }
    
    return (
        <form>
            <label>Character name:<input type='text' name='characterName' onChange={userCharacterName}></input></label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchForm;