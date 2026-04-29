import logo from "./assets/ECOTECH TRANSPARENT LOGO.png";
import gt from "./assets/gt.jpeg";
import zl from "./assets/zl.jpeg";
import headshot from "./assets/headshot.jpeg";
import labawards from "./assets/IMG_2833.jpeg";
import labstairs from "./assets/IMG_2785.jpeg";
import coral from "./assets/snorkel.png";
import "./index.css";

export default function App() {
  const projectLinks = [
    {
      title: "Peanut Island Marine Life Guide",
      description:
        "Visitor-facing reef outreach and species identification platform.",
      href: "https://sites.google.com/view/peanut-island-project/",
      cta: "Visit site",
    },
    {
      title: "NSU Faculty Profile",
      description:
        "Professional profile, contact details, and university affiliation.",
      href: "https://scholars.nova.edu/en/persons/paul-t-arena/",
      cta: "View profile",
    },
    {
      title: "Gopher Tortoise Research",
      description:
        "Burrow camera work, biodiversity monitoring, and applied conservation insights.",
      href: "https://nsugophertortoise.weebly.com/",
      cta: "Explore project",
    },
    {
      title: "Butterfly Research Project",
      description:
        "Pollinator habitat research and butterfly host plant studies.",
      href: "https://nsubutterflyresearch.weebly.com/",
      cta: "Explore project",
    },
  ];

  const featuredProjects = [
    {
      title: "Gopher Tortoise Burrow Ecology",
      description:
        "Camera trap monitoring of burrow communities, predator dynamics, and biodiversity patterns across South Florida.",
    },
    {
      title: "Peanut Island Coral Monitoring",
      description:
        "Abiotic monitoring and coral health tracking to understand stress, bleaching, and recovery patterns.",
    },
    {
      title: "Boulder Reef Monitoring & Outreach",
      description:
        "GoPro surveys paired with QR-linked marine life guides to connect visitors directly to reef biodiversity.",
    },
    {
      title: "Pollinator Habitat Research",
      description:
        "Butterfly host plant studies focused on improving survival outcomes and habitat restoration.",
    },
  ];

  const labActionImages = [
    {
      src: gt,
      alt: "Gopher tortoise burrow camera setup",
      caption: "Camera trap deployment at an active gopher tortoise burrow",
    },
    {
      src: zl,
      alt: "Zebra longwing emergence from chrysalis",
      caption: "Zebra longwing emergence during host plant research",
    },
    {
      src: coral,
      alt: "Student conducting coral reef monitoring transect",
      caption: "Coral reef monitoring using underwater transects at Peanut Island",
    },
  ];

  const recentImages = [
    {
      src: labstairs,
      alt: "ECOTech Lab student group",
      caption:
        "ECOTech Lab students engaged in applied ecological research and outreach",
    },
    {
      src: labawards,
      alt: "ECOTech Lab student awards",
      caption: "Student research recognition and symposium awards",
    },
  ];

  return (
    <main className="eco-page">
      <section className="hero-section">
        <div className="section-inner hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Nova Southeastern University</p>

            <h1>ECOTech Lab</h1>

            <p className="hero-subtitle">
              Ecological Community Observation &amp; Technology Lab
            </p>

            <p className="body-large">
              Integrating field-based ecology, emerging technology, and applied
              conservation to study biodiversity, monitor environmental change,
              and connect science with public engagement. ECOTech Lab brings
              together research, monitoring, and outreach in ways that are
              scientifically rigorous, visually engaging, and directly relevant
              to conservation practice.
            </p>

            <div className="button-row">
              <a href="#research" className="button-primary">
                Explore Research
              </a>
              <a href="#links" className="button-secondary">
                View Lab Links
              </a>
            </div>
          </div>

          <div className="hero-logo-wrap">
            <img src={logo} alt="ECOTech Lab logo" className="hero-logo" />
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-inner two-column director-grid">
          <div>
            <h2>Director</h2>
            <p className="body-large">
              Dr. Paul Arena leads ECOTech Lab at Nova Southeastern University,
              focusing on applied ecological monitoring across terrestrial and
              marine systems, with an emphasis on translating data into
              actionable conservation tools.
            </p>
            <p className="body-medium">
              Current lab efforts include gopher tortoise burrow ecology, coral
              reef monitoring, boulder reef biodiversity documentation, and
              pollinator habitat research, all connected by an emphasis on
              practical conservation outcomes and clear public communication.
            </p>
          </div>

          <div className="image-card">
            <img
              src={headshot}
              alt="Dr. Paul Arena, Director of ECOTech Lab"
              className="headshot-image"
            />
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Lab in Action</p>
            <h2>Student Research &amp; Recognition</h2>
            <p className="body-large">
              ECOTech Lab combines active student involvement, applied field
              research, and public-facing conservation communication across
              terrestrial and marine systems.
            </p>
          </div>

          <div className="three-image-grid">
            {labActionImages.map((item) => (
              <div className="image-card" key={item.caption}>
                <img src={item.src} alt={item.alt} className="action-image" />
                <p className="caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="section-white">
        <div className="section-inner">
          <h2>Featured Projects</h2>

          <div className="card-grid">
            {featuredProjects.map((project) => (
              <div className="text-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Recent Work</p>
            <h2>Recognition and Current Momentum</h2>
          </div>

          <div className="card-grid">
            <div className="text-card">
              <h3>Undergraduate Symposium Recognition</h3>
              <p>
                ECOTech Lab students recently earned first place in multimedia
                presentations and third place in oral presentations, reflecting
                strong student engagement in both scientific communication and
                applied environmental research.
              </p>
            </div>

            <div className="text-card">
              <h3>Active Presentation Pipeline</h3>
              <p>
                Current projects are being translated into conference posters,
                outreach tools, and public-facing materials that support both
                conservation practice and student development.
              </p>
            </div>
          </div>

          <div className="two-image-grid">
            {recentImages.map((item) => (
              <div className="image-card" key={item.caption}>
                <img src={item.src} alt={item.alt} className="action-image" />
                <p className="caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-inner two-column">
          <div>
            <p className="eyebrow">Student Opportunities</p>
            <h2>Join Applied Conservation Work</h2>
            <p className="body-large">
              Students in ECOTech Lab gain hands-on experience in ecological
              monitoring, fieldwork, data analysis, technology integration, and
              public outreach through real-world projects in South Florida and
              beyond.
            </p>
          </div>

          <div className="text-card">
            <h3>Typical student roles</h3>
            <ul>
              <li>Field data collection and image-based monitoring</li>
              <li>Species identification and ecological analysis</li>
              <li>Poster, presentation, and outreach development</li>
              <li>Technology-assisted conservation workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="links" className="section-muted">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Connected Projects &amp; Outreach</p>
            <h2>Useful Links</h2>
            <p className="body-large">
              Explore active ECOTech Lab projects, outreach platforms, and
              faculty information.
            </p>
          </div>

          <div className="card-grid">
            {projectLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-card"
              >
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <span>{link.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-white">
        <div className="section-inner two-column">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Connect with ECOTech Lab</h2>
            <p className="body-large">
              Interested in collaboration, student involvement, or applied
              conservation partnerships? Reach out to discuss ECOTech Lab
              projects, outreach tools, and future opportunities.
            </p>
          </div>

          <div className="text-card contact-card">
            <p>
              <strong>Director:</strong> Dr. Paul Arena
            </p>
            <p>
              <strong>Affiliation:</strong> Department of Biological Sciences,
              Nova Southeastern University
            </p>
            <p>
              <strong>Email:</strong> arenap@nova.edu
            </p>
            <p>
              <strong>Location:</strong> South Florida
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
