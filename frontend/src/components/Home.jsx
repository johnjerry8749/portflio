import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar.jsx";
import About from "./About.jsx";
import photos from "../assets/photo.png";
import Experince from "./Experince.jsx";
import Message from "./message.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  const titles = ["FullStack web developer", "App developer", "UI/UX designer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const fullText = currentTitle;

    if (!isDeleting && displayText === fullText) {
      const pause = setTimeout(() => setIsDeleting(true), 900);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeoutDelay = isDeleting ? 80 : 120;
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);
      setDisplayText(updatedText);
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="home" data-aos="fade-up">
      <Navbar />

      <div className="Banner p-3 d-flex gap-3 justify-content-center bg-danger ">
        <div className="container mt-4">
          <div className="row align-items-start gap-3 vh-90 justify-content-center">
            <div className="col p-3 fs-1 fw-bolder text-light text-start">
              <div className="banner-textbox m-3 p-4">
                <h1 className="fs-1 fw-bolder text-light">I'm</h1>
                <p className="fs-1 fw-bolder text-light">Nwadike Chukwuemeka</p>
                <p className="banner-text-animation fs-1 fw-bold text-light">
                  <span className="typing-text">{displayText}</span>
                </p>
              </div>
              <div className="banner-btns">
                <div className="banner-btn-group d-flex gap-3 flex-wrap justify-content-start p-2">
                  <button
                    type="button"
                    className="btn btn-danger bg-light text-danger banner-btnm p-2"
                  >
                    Download Resume
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger bg-light text-danger banner-btn"
                  >
                    Download Academic Transcript
                  </button>
                </div>
                <div className="social-links d-flex p-2 align-items-center gap-3 mt-3 justify-content-start">
                  <a
                    href="https://github.com/johnjerry8749"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <i className="bi bi-github fs-4"></i>
                  </a>
                  <a
                    href="https://twitter.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nwadike-chukwuemeka"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <i className="bi bi-linkedin fs-4 text-dark"></i>
                  </a>
                  <a
                    href="mailto:johnjerry8749@gmail.com"
                    className="social-link"
                  >
                    <i className="bi bi-envelope fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-5 d-none p-2 d-lg-block">
              <div className="banner-image">
                <div className="profile-ring">
                  <img
                    src={photos}
                    className="profile-photo"
                    alt="Nwadike Chukwuemeka"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experince />
      <Message />
      <Footer />

      <style>{`
        .banner-image {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          padding: 20px;
        }

        .profile-ring {
          position: relative;
          width: min(37vw, 380px);
          height: min(37vw, 380px);
          border-radius: 50%;
          padding: 8px;
          background: linear-gradient(135deg, rgba(166, 30, 30, 0.45), rgba(255,255,255,0.2), rgba(255,255,255,0.9));
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18), 0 0 0 10px rgba(255, 255, 255, 0.1);
          animation: floatProfile 4s ease-in-out infinite;
        }

        .profile-ring::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fc23236c, rgba(255,255,255,0.15), #ffe6e6, #ffffff);
          z-index: -1;
          filter: blur(4px);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 50%;
          display: block;
          border: 4px solid rgba(191, 127, 30, 0.9);
          background: #e7232394;
        }

        @keyframes floatProfile {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }

        @media (max-width: 991px) {
          .banner-image {
            min-height: 320px;
          }

          .profile-ring {
            width: min(70vw, 300px);
            height: min(70vw, 300px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
