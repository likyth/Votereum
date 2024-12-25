import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return /^[A-Za-z\s]+$/.test(value) ? "" : "Only letters allowed";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Must be 10 digits";
      case "message":
        return value.length >= 10 ? "" : "Minimum 10 characters required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      const error = validateField(name, numericValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0 && captchaValue) {
      // Submit form
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setCaptchaValue(null);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="page-container !mt-0">
      <section className="my-8">
        <h1 className="medium-heading text-center">Contact Us</h1>
        <p className="body-text mt-4 text-center">
          Have questions? We'd love to hear from you.
        </p>
      </section>

      <section className="my-8 bg-gradient-to-b from-blue-600 to-blue-950 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg ${errors.firstName ? "border-2 border-red-500" : ""}`}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="text-red-200 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-white mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg ${errors.lastName ? "border-2 border-red-500" : ""}`}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <p className="text-red-200 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg ${errors.email ? "border-2 border-red-500" : ""}`}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-200 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength="10"
              className={`w-full p-3 rounded-lg ${errors.phone ? "border-2 border-red-500" : ""}`}
              placeholder="Enter 10-digit number"
            />
            {errors.phone && (
              <p className="text-red-200 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className={`w-full p-3 rounded-lg ${errors.message ? "border-2 border-red-500" : ""}`}
              placeholder="Type your message..."
            />
            {errors.message && (
              <p className="text-red-200 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="primary-button"
              disabled={!captchaValue}
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
