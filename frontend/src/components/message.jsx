
const message = () => {
     const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
  )
}

export default message
