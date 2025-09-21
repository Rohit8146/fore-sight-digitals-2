import React, { useState, useRef, useEffect } from "react";
import "./contact.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const messageRef = useRef(null); // ✅ create a ref for the message div
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phoneNumber") {
            const numericValue = value.replace(/\D/g, "");
            setFormData((prev) => ({
                ...prev,
                [name]: numericValue,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setShowMessage(false);

        const formBody = new URLSearchParams({
            FirstName: formData.firstName || "",
            LastName: formData.lastName || "",
            PhoneNo: String(formData.phoneNumber) || "",
            Message: formData.message || "",
            Email: formData.email || "",
        });

        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody.toString(),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.text();
            })
            .then(() => {
                setMessage("Thanks! We'll get back to you soon.");
                setShowMessage(true);
                setFormData({});
            })
            .catch(() => {
                setMessage("Thanks! We'll get back to you soon.");
                setShowMessage(true);
                setFormData({});
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => {
                    setShowMessage(false);
                    setTimeout(() => setMessage(""), 300);
                }, 3000);
            });
    };

    // ✅ Scroll to message div when message is shown
    useEffect(() => {
        if (showMessage && messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [showMessage]);

    return (
        <div className="contact-form-container">
            {message && (
                <div
                    ref={messageRef}
                    className={`form-message ${showMessage ? "show" : "hide"}`}
                >
                    {message}
                </div>
            )}
            <form className="contact-form max-sm:flex flex-col gap-1" onSubmit={handleSubmit}>
                <div className="form-group max-sm:w-[100%]">
                    <label htmlFor="firstName" className="contact-label">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                        required
                        className="contact-input"
                    />
                </div>

                <div className="form-group max-sm:w-[100%]">
                    <label htmlFor="lastName" className="contact-label">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                        required
                        className="contact-input"
                    />
                </div>

                <div className="form-group max-sm:w-[100%]">
                    <label htmlFor="email" className="contact-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                        className="contact-input"
                    />
                </div>

                <div className="form-group max-sm:w-[100%]">
                    <label htmlFor="phoneNumber" className="contact-label">Phone Number</label>
                    <input
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        inputMode="numeric"
                        pattern="\d*"
                        placeholder="Enter Phone Number"
                        value={formData.phoneNumber || ""}
                        onChange={handleChange}
                        required
                        className="contact-input"
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter Your Message"
                        rows={4}
                        value={formData.message || ""}
                        onChange={handleChange}
                        required
                        className="contact-input contact-textarea"
                    />
                </div>

                <div className="form-group submit-wrapper">
                    <button type="submit" disabled={loading} className="submit-button">
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}
