import React, { useState } from "react";
import emailjs from "emailjs-com";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";

const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      )
      .then(
        () => {
          setToastVisible(true);
          setError(null);
          e.target.reset();
          setTimeout(() => setToastVisible(false), 3000);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Seo
        title="Contact Us | Keene Krib"
        description="Get in touch with Keene Krib for your retaining wall, piling, or landscaping project in Wellington."
        url="https://keenekrib.co.nz/contact"
        image="https://keenekrib.co.nz/img/assets/workers.jpg"
      />

      <div className="body">
        <HeroCarousel
          image="/img/assets/contact-hero.webp"
          alt="Get in touch"
          heading={
            <>
              Let’s <span className="highlight">Talk</span>
            </>
          }
          description="We’d love to hear about your next project or any questions you have. Get in touch today."
          showButtons={false}
        />

        <div className="container">
          <h2>CONTACT</h2>

          <p className="contact-intro">
            We’d love to provide you with a quote. Please fill in the form below
            with as much detail as possible, and we’ll get back to you as soon
            as we can. Prefer to chat? Feel free to give us a call.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="from_name" required />
            </label>

            <label>
              Email:
              <input type="email" name="from_email" required />
            </label>

            <label>
              Subject:
              <input type="text" name="subject" />
            </label>

            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>

            <button className="primary-button" type="submit">
              Send Message
            </button>
          </form>

          {toastVisible && (
            <div className="toast">Your message has been sent! Thank you.</div>
          )}

          {error && <div className="toast error">{error}</div>}
        </div>
      </div>

      <style>{`
        .toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #f1b649;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          font-size: 18px;
          font-family: "REM", sans-serif;
          font-weight: 500;
          animation: fadein 0.3s ease;
          z-index: 1000;
        }
        .toast.error {
          background: #e74c3c;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Contact;
