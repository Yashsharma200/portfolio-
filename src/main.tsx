import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  Trophy,
  ChevronRight,
} from "lucide-react";
import "./style.css";
import AwardCard from "./components/AwardCard";
const projects = [
  {
    num: "01",
    title: "Navigator",
    tag: "AI AGENTS · ASSESSMENTS",
    desc: "AI-powered mentoring platform that generates tailored assessments based on coachee requirements, with mapping, assignment scheduling, and progress tracking.",
    stack: ["Python", "OpenAI", "Qdrant", "React"],
    accent: "violet",
    status: "IN DEVELOPMENT",
  },
  {
    num: "02",
    title: "Podcast Search",
    tag: "RAG · HYBRID SEARCH",
    desc: "Intelligent podcast discovery across ~2,000–2,200 episodes. Automated ingestion, transcription, chunking, hybrid dense/BM25 retrieval, ColBERT reranking, and LLM summarization.",
    stack: ["Python", "Azure OpenAI", "Qdrant", "BM25", "ColBERT"],
    accent: "blue",
    status: "FEATURED PROJECT",
  },
  {
    num: "03",
    title: "Powerguide",
    tag: "ENTERPRISE RAG · KNOWLEDGE SEARCH",
    desc: "Enterprise knowledge assistant with citation-backed responses across 5,000+ documents, reducing typical information retrieval time from approximately 15 minutes to 1 minute.",
    stack: ["Python", "Quart", "Azure OpenAI", "Qdrant"],
    accent: "mint",
    status: "FEATURED PROJECT",
  },
];
const skills = [
  [
    "AI & LLMs",
    "RAG",
    "Prompt Engineering",
    "AI Agents",
    "Embeddings",
    "Semantic Search",
  ],
  [
    "Retrieval",
    "Qdrant",
    "Vector Search",
    "Hybrid Retrieval",
    "BM25",
    "ColBERT",
  ],
  [
    "Development",
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Quart",
    "REST APIs",
  ],
  [
    "Infrastructure",
    "MySQL",
    "PostgreSQL",
    "Microsoft Azure",
    "Git",
    "GitHub",
    "JWT Authentication",
  ],
];
function App() {
  return (
    <>
      <header className="nav">
        <a href="#home" className="logo">
          Yash Sharma
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="mailto:yashsharma09140@gmail.com">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </header>
      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> SOFTWARE ENGINEER · GENAI
            </div>
            <h1>
              Building
              <br />
              intelligent <em>things.</em>
            </h1>
            <p className="hero-description">
              I'm <strong>Yash Sharma</strong> — a software engineer crafting
              AI-powered products, retrieval systems, and scalable applications
              that turn complex problems into useful experiences.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="secondary" href="/Yash_Sharma_Resume.pdf" download>
                <Download size={17} /> Download CV
              </a>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/yash-sharma-5470511b0/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a href="mailto:yashsharma09140@gmail.com" aria-label="Email">
                <Mail size={19} />
              </a>
              <span>
                <MapPin size={15} /> Bengaluru, India
              </span>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="center-symbol">
              <BrainCircuit size={84} strokeWidth={1.15} />
            </div>
            <div className="float-label label-top">
              <span className="mini-dot" /> LLM SYSTEMS
            </div>
            <div className="float-label label-bottom">
              VECTOR SEARCH <Sparkles size={14} />
            </div>
            <div className="art-glow" />
          </div>
          {/* <div className="hero-index">01 / INTRODUCTION</div> */}
        </section>
        <section id="about" className="about section container">
          <div className="section-top">
            <span className="section-kicker">01 / ABOUT ME</span>
            <span className="section-line" />
          </div>
          <div className="about-grid">
            <h2>
              Engineering at the intersection of <span>AI & impact.</span>
            </h2>
            <div>
              <p>
                I'm a software engineer with{" "}
                <strong>3+ years of experience</strong> specializing in
                Generative AI, LLM-based Retrieval-Augmented Generation, and
                full-stack application development.
              </p>
              <p>
                My work spans document ingestion pipelines, hybrid search, agent
                workflows, secure REST APIs, and deploying enterprise AI
                applications. I care about making sophisticated technology
                practical, reliable, and accessible.
              </p>
              <div className="stats">
                <div>
                  <b>3+</b>
                  <small>YEARS EXPERIENCE</small>
                </div>
                <div>
                  <b>5K+</b>
                  <small>DOCUMENTS SEARCHABLE</small>
                </div>
                <div>
                  <b>2K+</b>
                  <small>PODCASTS PROCESSED</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-top">
              <span className="section-kicker">02 / SELECTED WORK</span>
              <span className="section-line" />
            </div>
            <div className="section-heading">
              <h2>
                Featured <span>projects.</span>
              </h2>
              <p>
                Real-world AI applications, built from concept to production.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className={"project-card " + p.accent} key={p.num}>
                  <div className="project-meta">
                    <span>{p.num} / PROJECT</span>
                    <span className="project-status">{p.status}</span>
                  </div>
                  <div className="project-visual">
                    <div className="visual-rings">
                      <BrainCircuit size={54} strokeWidth={1} />
                    </div>
                    <div className="visual-code">
                      {p.num === "01"
                        ? "agent.execute()"
                        : p.num === "02"
                          ? "search.hybrid()"
                          : "retrieve.context()"}
                    </div>
                  </div>
                  <div className="project-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="chips">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            {/* <p className="project-note">
              Project source links and live demos can be added when available.
            </p> */}
          </div>
        </section>
        <section id="skills" className="section container">
          <div className="section-top">
            <span className="section-kicker">03 / EXPERTISE</span>
            <span className="section-line" />
          </div>
          <div className="section-heading">
            <h2>
              My technical <span>toolkit.</span>
            </h2>
            <p>Technologies I use to design, build, and ship.</p>
          </div>
          <div className="skill-grid">
            {skills.map((group, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-icon">
                  {i === 0 ? (
                    <BrainCircuit />
                  ) : i === 1 ? (
                    <Database />
                  ) : i === 2 ? (
                    <Code2 />
                  ) : (
                    <Sparkles />
                  )}
                </div>
                <h3>{group[0]}</h3>
                <div className="skill-items">
                  {group.slice(1).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container">
            <div className="section-top">
              <span className="section-kicker">04 / JOURNEY</span>
              <span className="section-line" />
            </div>
            <div className="section-heading">
              <h2>
                Experience & <span>recognition.</span>
              </h2>
            </div>
            <div className="experience-grid">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">FEB 2023 — PRESENT</div>
                  <h3>Software Engineer</h3>
                  <h4>Global Automation India Pvt. Ltd.</h4>
                  <p>
                    Developing enterprise GenAI and RAG applications with
                    Python, Azure OpenAI, Qdrant, and React. Designing
                    authentication, secure APIs, and deployment workflows for
                    production systems.
                  </p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2018 — 2022</div>
                  <h3>B.Tech, Computer Science</h3>
                  <h4>Dr. A.P.J. Abdul Kalam Technical University</h4>
                  <p>CGPA: 7.37 · Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              {/* <div className="award">
                <div className="award-icon">
                  <Trophy size={30} />
                </div>
                <span className="award-kicker">AWARD · 2026</span>
                <h3>Global One Person Army Award</h3>
                <p>
                  Recognized for exceptional ownership, domain mastery, and
                  independent end-to-end delivery of enterprise GenAI
                  applications.
                </p>
                <ChevronRight size={22} />
              </div> */}
              <section id="achievements">
                <AwardCard />
              </section>
            </div>
          </div>
        </section>
        <section id="contact" className="contact section container">
          <div className="section-top">
            <span className="section-kicker">05 / GET IN TOUCH</span>
            <span className="section-line" />
          </div>
          <div className="contact-content">
            <div className="eyebrow">
              <span className="live-dot" /> OPEN TO OPPORTUNITIES
            </div>
            <h2>
              Have something
              <br />
              <em>in mind?</em>
            </h2>
            <p>
              I'm interested in AI engineering, GenAI, RAG, and software
              engineering opportunities. Let's build something meaningful.
            </p>
            <a href="mailto:yashsharma09140@gmail.com" className="primary">
              Start a conversation <ArrowUpRight size={18} />
            </a>
            <a
              href="mailto:yashsharma09140@gmail.com"
              className="contact-email"
            >
              yashsharma09140@gmail.com
            </a>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} Yash Sharma. Built with purpose.
        </span>
        <div>
          <a
            href="https://www.linkedin.com/in/yash-sharma-5470511b0/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href="mailto:yashsharma09140@gmail.com">
            Email <ArrowUpRight size={13} />
          </a>
        </div>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
