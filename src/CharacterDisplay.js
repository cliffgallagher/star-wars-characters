import React from 'react';

const CharacterDisplay = (props) => {
    return <div>
        <p>Name: {props.name}</p>
        <p>Height: {props.height}</p>
    </div>
}

export default CharacterDisplay;