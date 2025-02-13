import React, { useEffect, useState } from "react";
import './Quote.css';

function Quote() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch quotes");
                }
                return res.json();
            })
            .then((data) => {
                setTimeout(() => {
                setQuotes(data.quotes);
                setLoading(false);
                },3000 );
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading-container">

                <div class="newtons-cradle">
                    <div class="newtons-cradle__dot"></div>
                    <div class="newtons-cradle__dot"></div>
                    <div class="newtons-cradle__dot"></div>
                    <div class="newtons-cradle__dot"></div>
                </div>
              
            </div>
        );
    }

    if (error) {
        return <p>{`Error: ${error}`}</p>;
    }

    return (
        <div className="quotes">
            <h1> The Iron Serenade & Silent Fortitude of Ages</h1>
            {quotes.length > 0 ? (
                quotes.map((item, index) => (
                    <div className="quote" key={index}>
                        <p>"{item.quote}"</p>
                        <h5>- {item.author}</h5>
                    </div>
                ))
            ) : (
                <p>No quotes available.</p>
            )}
        </div>
    );
}

export default Quote;
