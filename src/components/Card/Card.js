import React from "react";
import './Card.css';
import ney from '../../assets/neymar-brazil.jpg'


function Card() {

    return (

        <div className="just">

            <img
                className="card1"
                src={ney}
                alt="Always NEYMAR"
            />
            <h4>
                Neymar: A Rollercoaster of Glory, Drama, and High Stakes  .... Read More
            </h4>
            <h3>
                Neymar has been a key player for Brazil, winning the 2016 Olympic gold medal and becoming one of their top scorers.However, his career has been marred by multiple injuries, controversies over diving, off-field antics, and contract disputes. In 2023, he made a high-profile move to Saudi Arabian club Al Hilal.
            </h3>
        </div>
    );
}

export default Card