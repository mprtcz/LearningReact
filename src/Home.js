import React, { useState } from "react";
import { userState } from 'react';

const Home = () => {
    // let name = 'Mario';

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(32);

    const handleClick = (e) => {
        setName('Luigi');
        setAge(30);
    }

    const handleClickAction = (name, e) => {
        console.log('hello, ' + name + e.target);
    }

    return ( 
    <div className="home">
        <h2>Homopage</h2>
        <p>{ name } is { age } years old.</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAction('Mario', e)}>Click me again</button>
    </div>
     );
}
 
export default Home