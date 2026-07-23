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

          <p className="text-muted">
            I am a passionate web developer with experience in creating
            responsive and user-friendly websites. I specialize in React,
            JavaScript, and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
