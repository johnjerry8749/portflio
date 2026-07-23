import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar.jsx";
import About from "./About.jsx"
import photos from "../assets/photo.png"

const Home = () => {
  const titles = ["web developer", "App developer", "UI/UX designer"];
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
    <div>
      <Navbar />

      <div className="Banner p-3 d-flex gap-3 justify-content-center bg-danger ">
        <div className="container mt-4">
          <div className="row align-items-start gap-3 vh-90 justify-content-center">
            <div className="col p-3 fs-1 fw-bolder text-light text-start">
              <div className="banner-textbox m-3 p-3">
                <h2 className="fs-2 fw-bolder text-light">I'm</h2>
                <h1 className="fs-1 fw-bolder text-light">
                  Nwadike Chukwuemeka
                </h1>
                <p className="banner-text-animation fs-3 fw-bold text-light">
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
              <div className="banner-image p-3 border">
                <img
                  src={photos}
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
