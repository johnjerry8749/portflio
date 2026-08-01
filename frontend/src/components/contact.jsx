const Contact = () => {
  const techLogos = [
    {
      name: "JavaScript",
      src: "https://cdn.simpleicons.org/javascript/000000",
    },
    { name: "React", src: "https://cdn.simpleicons.org/react/61dafb" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
    { name: "Git", src: "https://cdn.simpleicons.org/git/f05032" },
    { name: "HTML5", src: "https://cdn.simpleicons.org/html5/e34f26" },
    { name: "Bootstrap", src: "https://cdn.simpleicons.org/bootstrap/7952b3" },
    { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ed" },
  ];


   const softSkills = [
        "Problem-solving & Resilience",
        "Innovative & Strategic Thinking",
      "Self-driven Learning & Time Management",

    ]

  return (
    <section className="contact-section">
      <div className="contact">
        <div className="contact-info-panel">
          <div className="contact-info-box">
            <img
              className="contact-photo"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Cartoon profile"
            />
            <h2>Nwadike Chukwuemeka</h2>
            <h3>S-Trinity Software Academy</h3>
            <p>+234703401308</p>
            <p>johnjerry8749@gmail.com</p>
          </div>
        </div>

        <div className="logo-marquee" aria-label="Technology stack ">
          <div className="logo-track">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div className="logo-item" key={`${logo.name}-${index}`}>
                <img src={logo.src} alt={logo.name} />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="rounded-3 shadow p-2 bg-white">
            <h1 className="fs-5 fw-bold text-center text-dark">Soft Skills</h1>
           <div className="row gx-2 gy-3 justify-content-center">
            {softSkills.map((skill, index) => (
              <div key={index} className="col-12 col-sm-12 col-md-12 col-xl-12 d-flex justify-content-center">
                <div className="skill-pill border border-muted rounded-2 shadow-sm px-3 py-2 text-center text-dark w-100">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          width: 100%;
         
          overflow: hidden;
          padding: 32px 0;
        }

        .contact {
          width: min(1100px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: stretch;
        }

        .contact-info-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: #f7f4f4;
          border-radius: 20px;
          padding: 24px;
          
        }

        .contact-info-box {
          width: min(100%, 760px);
          color: #1d1d1d;
          text-align: left;
        }

        .contact-photo {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
          margin-bottom: 22px;
          
        }

        .contact-info-box h2 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 2vw, 3rem);
          font-weight: 700;
          color: #111;
        }

        .contact-info-box h3 {
          margin: 0 0 14px;
          font-size: clamp(1.2rem, 1.5vw, 2rem);
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

        .logo-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;

          border-radius: 20px;
          padding: 18px 0;
         
        }

        .logo-track {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: scrollTech 18s linear infinite;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 170px;
          padding: 12px 20px;
          border-radius: 999px;
          color: #fb0d0d;
          font-weight: 700;
          border: 2px solid rgba(2, 0, 0, 0.1);
          white-space: nowrap;
        }

        .logo-item img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .logo-item span {
          font-size: 0.85rem;
        }

        @keyframes scrollTech {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 20px 0;
          }

          .contact {
            width: min(100%, calc(100% - 20px));
          }

          .contact-info-panel {
            padding: 16px;
          }

          .contact-photo {
            height: 260px;
          }

          .logo-item {
            min-width: 140px;
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
