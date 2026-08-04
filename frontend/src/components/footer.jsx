
const socialLinks = [
  { href: "https://github.com/johnjerry8749", label: "GitHub", icon: "bi bi-github" },
  { href: "https://www.linkedin.com/in/nwadike-chukwuemeka", label: "LinkedIn", icon: "bi bi-linkedin" },
  { href: "https://twitter.com", label: "Twitter", icon: "bi bi-twitter-x" },
  { href: "mailto:johnjerry8749@gmail.com", label: "Email", icon: "bi bi-envelope" },
];

const Footer = () => {
  return (
    <footer className="bg-danger text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold fs-3">
              Chukwuemeka<span className="text-warning">.</span>
            </h3>
            <p className="text-muted fs-5 fw-bold">
              Passionate Full Stack Developer creating modern, responsive, and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-decoration-none text-light">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-decoration-none text-light">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="text-decoration-none text-light">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-decoration-none text-light">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-lg-4 text-white col-md-12">
            <h5 className="mb-3">Connect With Me</h5>

            <div className="d-flex text-white gap-3 fs-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-white social-link"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} John. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;