import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Api.css';


const ScrollToTop = () => {
    const { top } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [top]);

    return null;
};

function Shopping() {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetch('https://dummyjson.com/recipes')
                .then((res) => res.json())
                .then((data) => {
                    setDishes(data.recipes);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="newtons-cradle">
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                </div>
            </div>
        );
    }

    return (
        <>

            <h1>Paradise of Cravings</h1>
            <div className="dishes">
                <ScrollToTop />
                {dishes.map((item, index) => (
                    <div className="dish" key={index}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <h5>{item.ingredients.join(", ")}</h5>
                        <h6>{item.instructions}</h6>
                        <h4>{item.mealType}</h4>
                        <p>Rating: {item.rating}/5</p>
                    </div>
                ))}
            </div>
            
        </>
    );


}

export default Shopping;
