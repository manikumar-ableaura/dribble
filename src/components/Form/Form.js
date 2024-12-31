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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add any additional logic here (e.g., API calls)
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

                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"

                        />
                    </div>
                </div>
                <div className="sec1">
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                            type="tel"
                            name="mobile"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"

                        />
                    </div>
                </div>
                <div className="sec1">
                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"

                        />
                    </div>

                    <div className="form-group">
                        <label>ZIP Code:</label>
                        <input
                            type="text"
                            name="zip"

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







