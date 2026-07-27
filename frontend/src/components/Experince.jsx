const Experience = () => {
  const items = [
    {
      date: "2024 - Now",
      title: "Research Assistant",
      subtitle: "GenAI-Driven RAG Dialogue System",
      company: "ABC-ATEC Electronics Group",
      details: [
        "Developed an industrial-grade multimodal AI system for corporate training and automation.",
        "Designed a private RAG system to improve knowledge retrieval efficiency.",
        "Reduced AI workflow latency by 40%, enhancing real-time communication.",
      ],
      side: "left",
    },
    {
      date: "2024 - 2025",
      title: "Research Assistant",
      subtitle: "GenAI-Driven ESG Report Generation",
      company: "Industrial Technology Research Institute (ITRI)",
      details: [
        "Built an AI-driven ESG report generation workflow using Generative AI and fine-tuned models.",
        "Automated sustainability reporting for improved compliance and consistency.",
        "Collaborated with cross-functional teams to deliver solutions on schedule.",
      ],
      side: "right",
    },
  ];

  return (
    <div className="p-2 mt-2">
      <div className="w-auto d-flex mb-4 justify-content-center gap-1 align-items-center">
        <div className="border border-danger border-2" style={{ width: "5%" }}></div>
        <div className="border border-danger border-2" style={{ width: "1%" }}></div>
        <h3 className="fs-5 text-dark text-muted">Experience</h3>
      </div>

      <div className="position-relative mt-5 px-0 px-lg-5">
        <div
          className="d-none d-lg-block position-absolute top-0 start-50 translate-middle-x bg-danger"
          style={{ width: "4px", height: "100%" }}
        />

        <div className="row gx-0 gy-5">
          {items.map((item, index) => (
            <div key={index} className="col-12">
              <div className="row gx-0 align-items-center">
                <div className="col-12 col-lg-5 d-flex justify-content-lg-end">
                  {item.side === "left" && (
                    <div className="position-relative" style={{ maxWidth: "540px", width: "100%" }}>
                      <div className="card shadow-sm border-0 rounded-3 p-4" style={{ width: "100%", minHeight: "230px" }}>
                        <div className="d-block d-lg-none mb-3">
                          <span className="badge bg-danger text-uppercase">{item.date}</span>
                        </div>
                        <h4 className="fs-5 fw-bold">{item.title}</h4>
                        <p className="text-danger mb-1">{item.subtitle}</p>
                        <p className="text-muted mb-3">{item.company}</p>
                        <ul className="mb-0 text-muted" style={{ paddingLeft: "1rem" }}>
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="d-none d-lg-block position-absolute"
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#fff",
                          borderLeft: "4px solid #dc3545",
                          borderBottom: "4px solid #dc3545",
                          top: "36px",
                          right: "-8px",
                          transform: "rotate(45deg)",
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="col-12 col-lg-2 d-flex justify-content-center align-items-start position-relative">
                  <div className="d-none d-lg-flex flex-column align-items-center position-relative" style={{ marginTop: "28px" }}>
                    <div className="rounded-circle border border-danger bg-white" style={{ width: "18px", height: "18px" }} />
                    <span className="text-danger fw-semibold mt-3">{item.date}</span>
                  </div>
                </div>

                <div className="col-12 col-lg-5 d-flex justify-content-lg-start">
                  {item.side === "right" && (
                    <div className="position-relative" style={{ maxWidth: "540px", width: "100%" }}>
                      <div className="card shadow-sm border-0 rounded-3 p-4" style={{ width: "100%", minHeight: "230px" }}>
                        <div className="d-block d-lg-none mb-3">
                          <span className="badge bg-danger text-uppercase">{item.date}</span>
                        </div>
                        <h4 className="fs-5 fw-bold">{item.title}</h4>
                        <p className="text-danger mb-1">{item.subtitle}</p>
                        <p className="text-muted mb-3">{item.company}</p>
                        <ul className="mb-0 text-muted" style={{ paddingLeft: "1rem" }}>
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="d-none d-lg-block position-absolute"
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#fff",
                          borderRight: "4px solid #dc3545",
                          borderTop: "4px solid #dc3545",
                          top: "36px",
                          left: "-8px",
                          transform: "rotate(45deg)",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
