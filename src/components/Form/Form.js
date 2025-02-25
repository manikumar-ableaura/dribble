import React, { useState, useEffect } from "react";
import "./Form.css";

function Form({ onClose }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        city: "",
        zip: "",
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedData = {};
        for (const key in formData) {
            trimmedData[key] = formData[key].trim();
        }


        for (const key in formData) {
            if (formData[key].trim() === "") {
                alert(`Please fill in all required fields.`);
                return;
            }
        }


        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(formData.mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }


        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const zipPattern = /^[0-9]{5,6}$/;
        if (!zipPattern.test(trimmedData.zip)) {
            alert("Please enter a valid ZIP code.");
            return;
        }

        console.log("Form Submitted:", formData);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="form-container">
            <button type="button" className="close-button" onClick={onClose}>✖️</button>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="sec1">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>ZIP Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button"> Submit </button>

            </form>
        </div>
    );
}

export default Form;
