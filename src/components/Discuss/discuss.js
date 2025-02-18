import React, { useState } from "react";
import "./Discuss.css";
import { useNavigate } from "react-router-dom";


function Discuss() {


    const navigate = useNavigate();

    const handlenavigation = () => {
        navigate('/card')

    }

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    return (
        <>
            <main className="main">

                <h2>Let`s Discuss our project</h2>
                <h4>We’re here to understand your needs and help you succeed.</h4>
                <button className='card' onClick={handlenavigation}>Let`s Start the Conversation</button>


                <div className="div1">
                    <h3>Project Breif</h3>
                    <div className="div2">

                        <div className="divi2">
                            <label className="labeltext">Name </label>
                            <input
                                type="text"
                                placeholder="Enter your Full Name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>

                        <div className="divi3">
                            <label className="labeltext">Email / Mobile Number</label>
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <div className="divi4">
                            <label className="labeltext">Password</label>
                            <input
                                type="Password"
                                placeholder="Password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </div>

                        <a href="/forgot-password">Forgot Password</a>

                        <button>Submit</button>
                        <div className="pa">
                            <div>
                                <p>Don't have an account?</p>
                            </div>
                            <div>
                                <a href="/signup/">Sign-up</a>
                            </div>
                        </div>

                        <h5 style={{ textDecoration: 'underline' }}>Always feel free to Contact us!</h5>

                        <div className="mm">

                            <div> Email: <a href="mailto:manikumar@ableaura.com">manikumar@ableaura.com</a></div>

                            <div>Contact no: 8074565203</div>

                        </div>

                        <footer>Ready to start? Let's talk!</footer>

                    </div>
                </div>
            </main>
        </>

    )
}

export default Discuss