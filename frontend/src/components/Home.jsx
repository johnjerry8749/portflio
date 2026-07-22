import Navbar from "../layout/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="Banner p-3 border border-danger d-flex gap-3 justify-content-center bg-danger ">
        <div className="container text-center mt-4">
          <div className="row align-items-start  gap-3 vh-100">
            <div className="col border p-3 fs-1 fw-bolder text-light">
              <div className="banner-textbox m-3 p-3">
                <h2 className="row fs-2 fw-bolder text-light">I'm</h2>
                <h1 className="row fs-1 fw-bolder text-light">
                  Nwadike Chukwuemeka
                </h1>
                <p className="banner-text-animation row fs-1 fw-bold text-light">
                  web developer
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
              </div>
            </div>

            <div className="col-5 border d-none d-lg-block">
              One of three columns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
