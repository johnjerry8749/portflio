
import "../css/message.css";


const Message = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-5 contact-info">
            <h2 className="fw-bold mb-3">Get In Touch</h2>
            <p className="text-muted">
              We'd love to hear from you. Whether you have a project,
              a question, or just want to say hello, send us a message.
            </p>

            <div className="mt-4">
              <div className="mb-3">
                <h6>Email</h6>
                <p>johnjerry8749@gmail.com || nwadikeati@gmail.com</p>
              </div>

              <div className="mb-3">
                <h6>Phone</h6>
                <p>+234 7043401308</p>
                <p>+234 9038584940</p>
              </div>

              <div>
                <h6>Address</h6>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="contact-card">

              <form>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button className="btn btn-dark w-100 py-2">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Message;