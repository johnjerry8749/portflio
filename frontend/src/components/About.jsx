import Photos from "../assets/photo.png";
const About = () => {
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

            <h3 className="fs-5 text-dark">ABOUT ME</h3>
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
            <h2 className="fs-3 fw-bolder text-dark mt-3 P-3">EDUCATION</h2>
            <p className="text-muted">
              Bachelor of Science in Computer Science
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
