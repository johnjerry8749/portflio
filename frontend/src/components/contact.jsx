import photo from "../assets/photo.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-image-panel d-none">
          <img src={photo} alt="Portrait" className="contact-image" />
        </div>

        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" />
            </div>

            <div className="field-group">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" name="email" />
            </div>

            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" />
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" />
            </div>

            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          width: 100%;
          background: #eee8e8;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          min-height: 760px;
        }

        .contact-image-panel {
          position: relative;
          min-height: 500px;
          overflow: hidden;
          background: #242222;
        }

        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .contact-form-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffdfc;
          padding: 40px 60px;
        }

        .contact-form {
          width: min(100%, 760px);
          color: #b80000;
        }

        .field-group {
          margin-bottom: 28px;
        }

        .field-group label {
          display: block;
          font-size: clamp(1.1rem, 1.3vw, 2rem);
          font-weight: 500;
          color: #100d0d;
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .field-group input,
        .field-group textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid rgba(21, 18, 18, 0.9);
          background: transparent;
          color: #010101;
          padding: 10px 0 8px;
          font-size: 1.1rem;
          outline: none;
          resize: none;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: rgba(11, 11, 11, 0.7);
        }

        .field-group input:focus,
        .field-group textarea:focus {
          border-bottom-color: #fffafa;
        }

        .send-button {
          display: inline-block;
          margin-top: 12px;
          background: #f8f5f5;
          color: #eb1d0f;
          border: none;
          min-width: 210px;
          padding: 18px 26px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-image-panel {
            min-height: 320px;
          }

          .contact-form-panel {
            padding: 32px 20px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
