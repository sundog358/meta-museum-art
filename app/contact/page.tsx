"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <main className="min-h-screen bg-dceeff dark:bg-[#0a192f]">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ffffff dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-ffffff dark:text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or feedback.
          </p>
        </header>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              {/* Name Input */}
              <label className="block">
                <span className="text-ffffff dark:text-white">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-blue-200 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-blue-900/20 text-blue-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </label>

              {/* Email Input */}
              <label className="block">
                <span className="text-ffffff dark:text-white">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-blue-900/20 text-blue-900 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </label>

              {/* Message Input */}
              <label className="block">
                <span className="text-ffffff dark:text-white">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-blue-900/20 text-blue-900 dark:text-white"
                  rows={4}
                  placeholder="Your message"
                  required
                ></textarea>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white dark:bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-400 dark:hover:bg-blue-900 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Email Us */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-white">
                Email Us
              </h3>
              <p className="text-blue-800 dark:text-blue-100">
                admin At Sun and Rain Works dot com
              </p>
            </div>
            {/* Visit Us */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-white">
                Visit Us
              </h3>
              <p className="text-blue-800 dark:text-blue-100">
                Earth
                <br />
                USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
