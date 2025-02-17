import React from "react";
import "./Discuss.css";

function Discuss() {

    return (
        <>
            <main className="main">

                <h2>Let`s Discuss our project</h2>
                <h4>We’re here to understand your needs and help you succeed.</h4>
                <button>Let`s Start the Conversation</button>


                <div className="div1">
                    <h3>Project Breif</h3>
                    <div className="div2">

                        <div className="divi2">
                            <label class="labeltext">Name </label>
                            <input type="text" placeholder="Enter your Full Name" value=""></input>
                        </div>

                        <div className="divi3">
                            <label class="labeltext">Email / Mobile Number</label>
                            <input type="text" placeholder="Email or Phone" value=""></input>
                        </div>
                        <div className="divi4">
                            <label class="labeltext">Password</label>
                            <input type="Password" placeholder="Password" value=""></input>
                        </div>

                        <a>Forgot Password</a>

                        <button>Submit</button>

                        <p>Don't have an account?<a href="/signup/">Sign-up</a></p>

                        <h5 style={{ textDecoration: 'underline' }}>Always feel free to Contact us!</h5>

                        <div className="mm">

                           <div> Email: <a>manikumar@ableaura.com</a></div>
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