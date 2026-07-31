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
          background: #f4f1f1;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.25fr;
          min-height: 760px;
          background: #fff;
        }

        .contact-info-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f4f4;
          padding: 40px 36px;
        }

        .contact-info-box {
          width: min(100%, 440px);
          color: #1d1d1d;
          text-align: left;
        }

        .contact-info-box h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 2vw, 3rem);
          font-weight: 700;
          color: #111;
        }

        .contact-info-box h3 {
          margin: 0 0 18px;
          font-size: clamp(1.3rem, 1.5vw, 2rem);
          font-weight: 500;
          color: #111;
        }

        .contact-info-box p,
        .contact-info-box a {
          margin: 0 0 10px;
          font-size: clamp(1rem, 1vw, 1.4rem);
          color: #111;
          text-decoration: none;
        }

        .contact-info-box a:hover {
          text-decoration: underline;
        }

        .contact-form-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ef1d0e;
          padding: 40px 50px;
        }

        .contact-form {
          width: min(100%, 760px);
          color: #fff;
        }

        .field-group {
          margin-bottom: 24px;
        }

        .field-group label {
          display: block;
          margin-bottom: 12px;
          color: #fff;
          font-size: clamp(1.1rem, 1.3vw, 2rem);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .field-group input,
        .field-group textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.9);
          background: transparent;
          color: #fff;
          padding: 10px 0 8px;
          font-size: 1.05rem;
          outline: none;
          resize: none;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .field-group input:focus,
        .field-group textarea:focus {
          border-bottom-color: #fff;
        }

        .send-button {
          display: inline-block;
          margin-top: 6px;
          background: #fff;
          color: #ef1d0e;
          border: none;
          min-width: 210px;
          padding: 18px 26px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.14);
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-panel,
          .contact-form-panel {
            padding: 32px 20px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
