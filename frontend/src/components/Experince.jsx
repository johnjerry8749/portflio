const Experience = () => {
  const items = [
    {
      date: "2023 - 2024",
      title: "Front-End Web Developer (IT Student)",
      subtitle: "GenAI-Driven RAG Dialogue System",
      company: "Binary Tech & Digital Solution",
      details: [
        " • Designed responsive websites using HTML, CSS, JavaScript, and React",
        " • Integrated APIs and databases into web projects",
        " • Collaborated with team members to deliver client projects",
        " • Resolved technical and user-interface issues",

      ],
      side: "left",
    },
    {
      date: "2024-2025",
      title: "IT Support/Computer Operator",
      subtitle: "GenAI-Driven ESG Report Generation",
      company: "S-Trinity Computer Business Center",
      details: [
        " • Provided daily IT support to clients, including document typing,   formatting, printing, and scanning",
        " • Assisted users with internet browsing, online research, email setup, and form submissions",
        " • Handled online registrations such as school applications, exams, job portals, and government services",
        " • Created and edited documents using Microsoft Word, Excel, and PowerPoint",
        " • Prepared spreadsheets, basic data analysis, and reports using Microsoft Excel",
        "• Designed flyers, certificates, and basic graphics using CorelDRAW",
        "• Troubleshot common computer issues including software errors, printer problems, and system setup",
        "• Managed file organization, backups, and safe handling of client data",
        "• Maintained computer systems to ensure smooth daily operations",

      ],
      side: "right",
    },
    {
      date: "2025 - 2026",
      title: "Teaching Assistant",
      subtitle: "Integrated Oasis ICT Service Center",
      company: "Binary Tech & Digital Solution",
      details: [
        " • Guided 40+ students in JavaScript, React, and Node.js for full-stack web development",
        " • Delivered lessons in English and explained complex programming concepts in a clear, student-friendly way",
        " • Supported learners with hands-on coding exercises, debugging guidance, and project-based learning",
        " • Helped students improve practical web development skills and received positive feedback on teaching quality",
      ],
      side: "left",
    },
  ];

  const skills = [
    "React.js & Node.js",
    "HTML & Bootstrap",
    "PostgreSQL & Supabase",
    "JavaScript",
    "AI Agent",
  ];
  
  const devTools = [
    "GitHub & Git",
    "Vercel & Render",
    "Figma & Canva",
    "Docker",
  ];

  
  
  return (
    <div className="p-2 mt-2">
      <div className="w-auto d-flex  justify-content-center gap-1 align-items-center">
        <div
          className="border border-danger border-2"
          style={{ width: "5%" }}
        ></div>
        <div
          className="border border-danger border-2"
          style={{ width: "1%" }}
        ></div>
        <h3 className="fs-5 text-dark text-muted">Experience</h3>
      </div>

      <div className="position-relative px-3 px-lg-5">
        <div
          className="d-none d-lg-block position-absolute top-0 start-50 translate-middle-x bg-danger"
          style={{ width: "4px", height: "100%" }}
        />

        <div className="d-flex flex-column gap-5 pt-4">
          {items.map((item, index) => (
            <div key={index} className="row gx-0 align-items-center">
              {item.side === "left" ? (
                <>
                  <div className="col-12 col-lg-5 d-flex justify-content-lg-end">
                    <div
                      className="position-relative"
                      style={{ width: "100%", maxWidth: "540px" }}
                    >
                      <div
                        className="card shadow-sm border-0 rounded-3 p-4"
                        style={{ minHeight: "220px" }}
                      >
                        <div className="d-flex d-lg-none mb-3 justify-content-center">
                          <span className="badge bg-danger text-uppercase">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="fs-4 fw-bold">{item.title}</h4>
                        <p className="text-danger mb-1">{item.subtitle}</p>
                        <p className="text-muted mb-3 fst-italic">
                          {item.company}
                        </p>
                        <ul
                          className="mb-0 text-muted"
                          style={{ paddingLeft: "1rem" }}
                        >
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
                          top: "50%",
                          right: "-8px",
                          transform: "translateY(-50%) rotate(45deg)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-2 d-none d-lg-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                      <div
                        className="rounded-circle border border-danger bg-white"
                        style={{ width: "18px", height: "18px", zIndex: 2 }}
                      />
                      <span className="mt-3 text-danger fw-semibold">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="d-none d-lg-block col-lg-5" />
                </>
              ) : (
                <>
                  <div className="d-none d-lg-block col-lg-5" />

                  <div className="col-12 col-lg-2 d-none d-lg-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                      <div
                        className="rounded-circle border border-danger bg-white"
                        style={{ width: "18px", height: "18px", zIndex: 2 }}
                      />
                      <span className="mt-3 text-danger fw-semibold">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="col-12 col-lg-5 d-flex justify-content-lg-start">
                    <div
                      className="position-relative"
                      style={{ width: "100%", maxWidth: "540px" }}
                    >
                      <div
                        className="card shadow-sm border-0 rounded-3 p-4"
                        style={{ minHeight: "220px" }}
                      >
                        <div className="d-flex d-lg-none mb-3 justify-content-center">
                          <span className="badge bg-danger text-uppercase">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="fs-4 fw-bold">{item.title}</h4>
                        <p className="text-danger mb-1">{item.subtitle}</p>
                        <p className="text-muted mb-3 fst-italic">
                          {item.company}
                        </p>
                        <ul
                          className="mb-0 text-muted"
                          style={{ paddingLeft: "1rem" }}
                        >
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
                          top: "50%",
                          left: "-8px",
                          transform: "translateY(-50%) rotate(45deg)",
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border border-danger mt-4 rounded-4 overflow-hidden">
        <div className="bg-danger text-center text-white px-4 py-4">
          <h1 className="fs-2 fw-bolder mb-2">Technical Stack & Soft Skills</h1>
          <p className="fw-bold">
            Here are the main technologies, languages, and tools I use in my projects and research.
          </p>
         
        </div>

        <div className="bg-danger p-3 p-lg-4">
             <h6 className="fw-bold mb-0 text-black text-center p-3">PROGRAMMING & AI STACK</h6>
          <div className="row gx-2 gy-3 justify-content-center">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center">
                <div className="skill-pill border border-white rounded-pill shadow-sm px-3 py-2 text-center text-dark w-100">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row m-auto">
        <div className="bg-danger p-3 p-lg-4">
             <h6 className="fw-bold mb-0 text-black text-center p-3">DEVELOPMENT & TOOLS</h6>
          <div className="row gx-2 gy-3 justify-content-center">
            {devTools.map((tool, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center">
                <div className="skill-pill border border-white rounded-pill shadow-sm px-3 py-2 text-center text-dark w-100">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    

      <style>{`
        .skill-pill {
          transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .skill-pill:hover {
          transform: translateY(-3px);
          background-color: #f5eeef;
          color: #fff;
          box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.75);
        }
      `}</style>
      
    </div>
  );
};

export default Experience;