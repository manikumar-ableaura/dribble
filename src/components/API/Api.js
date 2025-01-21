import React, { useEffect, useState } from "react";
import './Api.css';

function Shopping() {
    const [dishes, setDishes] = useState([]);
    console.log(dishes);


    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then((res) => res.json())
            .then((data) => setDishes(data.recipes))


    }, []);

    return (
        <div className="dishes">
            {dishes.map((item, index) => (
                <div className="dish" key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <h4>{item.mealType}</h4>
                    <p>Rating: {item.rating}/10</p>
                </div>
            ))}
        </div>
    );
}

export default Shopping;
