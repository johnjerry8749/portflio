import Photos from "../assets/photo.png";
const About = () => {
  return (
    <div className="about-section p-3 border border-danger bg-light">
      <div className="row border border-danger p-4 gap-3">
        <div className="col-6 col-sm-4 p-2">
          <img src={Photos} alt="Profile" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 mx-auto">
          <h2 className="fs-2 fw-bolder text-dark">About Me</h2>
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
