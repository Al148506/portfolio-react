import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "I'll get back to you as soon as possible.",
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#4cc9f0",
          confirmButtonColor: "#4361ee",
          confirmButtonText: "Got it",
          customClass: {
            popup: "swal-contact-popup",
            title: "swal-contact-title",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#f07b4c",
          confirmButtonColor: "#4361ee",
          confirmButtonText: "Try again",
          customClass: {
            popup: "swal-contact-popup",
          },
        });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="contact-header">
          <span className="contact-eyebrow">Get in touch</span>
          <h2 className="contact-title">Let's talk.</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello?<br />
            My inbox is always open.
          </p>
        </div>

        <div className="contact-card">

          {/* Decorative glow */}
          <div className="contact-card__glow" />

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`contact-btn${sending ? " contact-btn--sending" : ""}`}
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="contact-btn__spinner" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};