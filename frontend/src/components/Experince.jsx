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

      <div className="position-relative mt-5 px-3 px-lg-5">
        <div
          className="d-none d-lg-block position-absolute top-0 start-50 translate-middle-x bg-danger"
          style={{ width: "4px", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Experience;
