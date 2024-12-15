"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";

// Separate submit button component to handle loading state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-800 text-white dark:bg-blue-700 py-2 px-4 rounded-md 
                hover:bg-blue-400 dark:hover:bg-blue-900 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={pending ? "Sending..." : "Send Message"}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });
      alert("Thank you for your message!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-md mx-auto">
          <form action={handleSubmit}>
            {/* Form fields */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                  disabled={isSubmitting}
                />
              </div>
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
