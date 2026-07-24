import { useState } from "react";
import Photos from "../assets/photo.png";
import certificate from "../assets/certification/CompTIA Tech+ certificate.pdf";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCertificate = () => {
    setIsModalOpen(true);
  };

  const closeCertificate = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-section p-3 bg-light">
      <div className="row p-2 ">
        <div className="col-12 col-lg-6 py-3 ">
          <img
            src={Photos}
            alt="Profile"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

        <div className="col-12 col-lg-6  p-4 mt-2 ">
          <div className=" w-auto d-flex gap-1 align-items-center">
            <div
              className="border  border-danger border-2"
              style={{ width: "10%" }}
            ></div>
            <div
              className="border  border-danger border-2"
              style={{ width: "1%" }}
            ></div>

            <h3 className="fs-5 text-dark text-muted">ABOUT ME</h3>
          </div>
          <h2 className="fs-3 fw-bolder text-dark mt-2">CAREER OBJECTIVE</h2>
          <p className="text-muted">
            Detail-oriented IT Support & Web Developer with hands-on experience
            in front-end and full-stack web development. Certified CompTIA Tech+
            professional with strong foundational knowledge in hardware,
            software, networking, troubleshooting, and security concepts.
            Skilled in HTML, CSS, JavaScript, React, PHP, and Word Press, with a
            passion for solving technical problems and supporting users
            effectively.
          </p>
          <div className="mt-3">
            <div className=" mt-2 p-3 shadow rounded">
              <h1 className="fs-4 fw-bold text-dark">CERTIFICATIONS</h1>
              <p className="text-muted">
                • CompTIA Tech+ Certification
                <br />
                (Validates core IT fundamentals, troubleshooting, networking,
                security, and technical support skills). <br />
              </p>
              <button
                className="btn btn-danger"
                type="button"
                onClick={openCertificate}
              >
                View Certification
              </button>
            </div>
          </div>
          
          <div className="mt-3 border border-danger">
            <h1 className="fs-4 fw-bold text-dark">SKILLS</h1>
          </div>




        </div>
      </div>

      {/*Modal for displaying the certificate*/}
      {isModalOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
          style={{ zIndex: 1050 }}
          onClick={closeCertificate}
        >
          <div
            className="bg-white rounded shadow"
            style={{ width: "90%", maxWidth: "900px", height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center border-bottom p-3">
              <h5 className="mb-0">CompTIA Tech+ Certificate</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeCertificate}
              ></button>
            </div>
            <iframe
              src={certificate}
              title="CompTIA Tech+ Certificate"
              className="w-100 border-0"
              style={{ height: "calc(85vh - 72px)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
