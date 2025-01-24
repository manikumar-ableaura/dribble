import React, { useState } from "react";
import "./Form.css";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        city: "",
        zip: "",
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="sec1">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                           
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            
                        />
                    </div>
                </div>
                <div className="sec1">
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                           
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                           
                        />
                    </div>
                </div>
                <div className="sec1">
                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>ZIP Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                           
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
