import Photos from "../assets/photo.png";
const About = () => {
  return (
    <div className="about-section p-3 bg-light">
      <div className="row border border-danger p-4 gap-3">
        <div className="col-6 col-sm-4 p-2">
          <img src={Photos} alt="Profile" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 mx-auto">
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
