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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const disableScroll = () => {
            if (window.innerWidth <= 768) { // Only disable scrolling on mobile
                document.body.style.overflow = "hidden";
            }
        };

        const enableScroll = () => {
            document.body.style.overflow = "auto"; // Enable scrolling on all devices
        };

        disableScroll(); // Apply on mount
        return enableScroll; // Cleanup when unmounted
    }, []);

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit number";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
            newErrors.email = "Enter a valid email address";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!/^[0-9]{5,6}$/.test(formData.zip)) newErrors.zip = "Enter a valid ZIP Code";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
            alert("Form Submitted Successfully!");
        }
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
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
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
                        {errors.mobile && <p className="error">{errors.mobile}</p>}
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
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
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>

                    <div className="form-group">
                        <label>ZIP Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                        {errors.zip && <p className="error">{errors.zip}</p>}
                    </div>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Form;
