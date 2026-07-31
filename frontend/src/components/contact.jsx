import photo from "../assets/photo.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-info-panel">
          <div className="contact-info-box">
            <h2>Jun-Yu Wu</h2>
            <h3>National Taipei University</h3>
            <p>+886 988307166</p>
            <p>junyuwu8855@gmail.com</p>
            <a href="https://jun-yu-wu.github.io/" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>
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

        .contact-info-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffdfc;
          padding: 40px 30px;
        }

        .contact-info-box {
          width: min(100%, 420px);
          color: #1d1d1d;
          text-align: left;
        }

        .contact-info-box h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 2.2vw, 3rem);
          font-weight: 700;
          color: #1d1d1d;
        }

        .contact-info-box h3 {
          margin: 0 0 18px;
          font-size: clamp(1.2rem, 1.5vw, 2rem);
          font-weight: 500;
          color: #1d1d1d;
        }

        .contact-info-box p,
        .contact-info-box a {
          margin: 0 0 14px;
          font-size: clamp(1rem, 1.1vw, 1.4rem);
          color: #1d1d1d;
          text-decoration: none;
        }

        .contact-info-box a:hover {
          text-decoration: underline;
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

          .contact-info-panel {
            padding: 32px 20px 12px;
          }

          .contact-form-panel {
            padding: 20px 20px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
