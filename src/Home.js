import React from "react";

const Home = () => {

    const handleClick = (e) => {
        console.log('hello ninjas!', e)
    }

    const handleClickAction = (name, e) => {
        console.log('hello, ' + name + e.target);
    }

    return ( 
    <div className="home">
        <h2>Homopage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAction('Mario', e)}>Click me again</button>
    </div>
     );
}
 
export default Home;