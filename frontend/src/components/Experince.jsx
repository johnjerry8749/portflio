const Experience = () => {
  return (
    <div className="p-2 mt-2">
      <div className="w-auto d-flex mb-4 justify-content-center gap-1 align-items-center">
        <div className="border border-danger border-2" style={{ width: "5%" }}></div>
        <div className="border border-danger border-2" style={{ width: "1%" }}></div>
        <h3 className="fs-5 text-dark text-muted">Experience</h3>
      </div>

      <div className="position-relative mt-5">
        <div
          className="d-none d-lg-block position-absolute mt-5 start-50 translate-middle-x bg-danger"
          style={{ width: "4px", height: "100%" }}
        />

        <div className="row gx-3 gy-5">
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
            <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "520px" }}>
              <h4 className="fs-5 fw-bold">Research Assistant</h4>
              <p className="text-danger mb-1">GenAI-Driven RAG Dialogue System</p>
              <p className="text-muted mb-2">ABC-ATEC Electronics Group</p>
              <ul className="mb-0 text-muted" style={{ paddingLeft: "1rem" }}>
                <li>Developed an industrial-grade multimodal AI system for corporate training and automation.</li>
                <li>Designed a private RAG system to improve knowledge retrieval efficiency.</li>
                <li>Reduced AI workflow latency by 40%, enhancing real-time communication.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-lg-start ">
            <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "520px" }}>
              <span className="badge bg-danger text-uppercase mb-3">2024 - 2025</span> 
            </div>
          </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
            <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "520px" }}>
              <span className="badge bg-danger text-uppercase mb-3">2024 - Now</span>
              

            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-lg-start">
            <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "520px" }}>
              <h4 className="fs-5 fw-bold">Research Assistant</h4>
              <p className="text-danger mb-1">GenAI-Driven ESG Report Generation</p>
              <p className="text-muted mb-2">Industrial Technology Research Institute (ITRI)</p>
              <ul className="mb-0 text-muted" style={{ paddingLeft: "1rem" }}>
                <li>Built an AI-driven ESG report generation workflow using Generative AI and fine-tuned models.</li>
                <li>Automated sustainability reporting for improved compliance and consistency.</li>
                <li>Collaborated with cross-functional teams to deliver solutions on schedule.</li>
              </ul>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Experience;
