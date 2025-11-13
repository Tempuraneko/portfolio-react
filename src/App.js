import "./index.css";

function Navbar() {
  return (
    <nav className="nav container">
      <div className="logo">NJW<span>.</span></div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="container">
      <Navbar />
      <section className="hero">
        <h1>Hi, I'm <span>Ng&nbsp;Jia&nbsp;Wei</span></h1>
        <p className="lead">
          Software Engineering student who loves building useful things on the web and mobile — fast, clean, and user-friendly.
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </section>
    </header>
  );
}

function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}

function ProjectCard({ title, meta, desc, href, linkText = "Open", ghost = false }) {
  return (
    <article className="project-card">
      <div className="project-info">
        <h3>{title}</h3>
        <p className="meta">{meta}</p>
        <p className="desc">{desc}</p>
        {href ? (
          <a className={`btn small ${ghost ? "ghost" : ""}`} href={href} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        ) : (
          <span className="muted">Link coming soon</span>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <Hero />

      <main>
        <section id="about" className="container section">
          <h2>About Me</h2>
          <p>
            I'm a Bachelor of Software Engineering student with hands-on experience in web development, Flutter apps, and software testing.
            I enjoy turning ideas into real products and I'm always eager to learn new tools and frameworks.
          </p>
        </section>

        <section id="skills" className="container section">
          <h2>Skills</h2>
          <Chips items={[
            "HTML5","CSS", "React.js", "Java","PHP","MySQL","Flutter (Dart)","Firebase","Unity (C#)","Software Testing","Git & GitHub"
          ]}/>
        </section>

        <section id="projects" className="container section">
          <h2>Projects</h2>

          <ProjectCard
            title="ChowChu · Self-Service Food Ordering System"
            meta="Web · PHP · MySQL · HTML/CSS"
            desc="A full-stack web application for students to browse menus, apply vouchers, place orders, and track order status. I implemented user management, voucher/promotion logic, and order workflows with a normalized MySQL schema."
            href="https://github.com/Tempuraneko/chowchu-food-ordering-system"
            linkText="View on GitHub"
          />

          <ProjectCard
            title="Workshop Job Tracker"
            meta="Flutter · Firebase · Time Tracking"
            desc="A mobile app that helps workshop mechanics accept jobs, track time, and capture digital sign-off. I built the status & time tracking module and integrated Firestore updates."
            href="https://github.com/Tempuraneko/job-tracker-flutter"  
            linkText="View on GitHub"
          />
        </section>

        <section id="contact" className="container section">
          <h2>Contact</h2>
          <p>I'm open to internship opportunities. Reach me here:</p>
          <ul className="contact-list">
            <li><strong>Email:</strong> ngjiawei0201@gmail.com</li>
          </ul>
        </section>
      </main>

      <footer className="container footer">
        <p>© {new Date().getFullYear()} Ng Jia Wei · Built with React</p>
      </footer>
    </>
  );
}
