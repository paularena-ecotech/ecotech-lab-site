import logo from "./assets/ECOTECH TRANSPARENT LOGO.png";
import group from "./assets/IMG_2785.jpeg";
import awards from "./assets/IMG_2833.jpeg";
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

  const styles = {
    page: {
      width: "100%",
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      background: "#ffffff",
      color: "#0f172a",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      overflowX: "hidden",
    },
    sectionInner: {
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "40px",
      paddingRight: "40px",
      boxSizing: "border-box",
    },
    sectionTitle: {
      fontSize: "40px",
      margin: 0,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#0f172a",
    },
    eyebrow: {
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "#0f766e",
      margin: 0,
    },
    card: {
      borderRadius: "24px",
      border: "1px solid #e2e8f0",
      background: "#ffffff",
      padding: "24px",
      boxShadow: "0 1px 8px rgba(15, 23, 42, 0.06)",
      boxSizing: "border-box",
    },
    bodyLg: {
      fontSize: "20px",
      lineHeight: 1.8,
      color: "#475569",
    },
    bodyMd: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#475569",
    },
  };

  return (
    <main style={styles.page}>
      <section
        style={{
          width: "100%",
          borderBottom: "1px solid #e2e8f0",
          background: "linear-gradient(to bottom, #ccfbf1, #ffffff)",
        }}
      >
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <p style={styles.eyebrow}>Nova Southeastern University</p>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: 1,
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#0f172a",
                }}
              >
                ECOTech Lab
              </h1>

              <p
                style={{
                  marginTop: "16px",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#334155",
                }}
              >
                Ecological Community Observation &amp; Technology Lab
              </p>

              <p
                style={{
                  marginTop: "24px",
                  maxWidth: "720px",
                  ...styles.bodyLg,
                }}
              >
                Integrating field-based ecology, emerging technology, and applied
                conservation to study biodiversity, monitor environmental change,
                and connect science with public engagement. ECOTech Lab brings
                together research, monitoring, and outreach in ways that are
                scientifically rigorous, visually engaging, and directly relevant
                to conservation practice.
              </p>

              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#research"
                  style={{
                    background: "#0f766e",
                    color: "#ffffff",
                    padding: "14px 22px",
                    borderRadius: "18px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Explore Research
                </a>
                <a
                  href="#links"
                  style={{
                    border: "1px solid #cbd5e1",
                    color: "#1e293b",
                    padding: "14px 22px",
                    borderRadius: "18px",
                    textDecoration: "none",
                    fontWeight: 600,
                    background: "#ffffff",
                  }}
                >
                  View Lab Links
                </a>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "260px",
              }}
            >
              <img
                src={logo}
                alt="ECOTech Lab logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "260px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "28px", paddingBottom: "56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={styles.sectionTitle}>Director</h2>
              <p style={{ marginTop: "18px", ...styles.bodyLg }}>
                Dr. Paul Arena leads ECOTech Lab at Nova Southeastern University,
                focusing on applied ecological monitoring across terrestrial and
                marine systems, with an emphasis on translating data into
                actionable conservation tools.
              </p>
              <p style={{ marginTop: "18px", ...styles.bodyMd }}>
                Current lab efforts include gopher tortoise burrow ecology, coral
                reef monitoring, boulder reef biodiversity documentation, and
                pollinator habitat research, all connected by an emphasis on
                practical conservation outcomes and clear public communication.
              </p>
            </div>

            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 8px rgba(15, 23, 42, 0.08)",
                minHeight: "360px",
                background: "#f1f5f9",
              }}
            >
              <img
                src={group}
                alt="ECOTech Lab team"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", background: "#f8fafc" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={styles.eyebrow}>Lab in Action</p>
            <h2 style={{ ...styles.sectionTitle, marginTop: "12px" }}>
              Student Research &amp; Recognition
            </h2>
            <p style={{ marginTop: "16px", ...styles.bodyLg }}>
              ECOTech Lab combines active student involvement, applied field
              research, and public-facing conservation communication across
              terrestrial and marine systems.
            </p>
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                minHeight: "320px",
                boxShadow: "0 1px 8px rgba(15, 23, 42, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={awards}
                alt="ECOTech Lab student awards"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  display: "block",
                }}
              />
            </div>

            <div style={styles.card}>
              <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                Current Focus
              </h3>
              <p style={{ marginTop: "14px", ...styles.bodyMd }}>
                ECOTech Lab projects emphasize biodiversity monitoring,
                emerging technology, student training, and the translation of
                ecological data into practical conservation tools and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" style={{ width: "100%" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>

          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {[
              [
                "Gopher Tortoise Burrow Ecology",
                "Camera trap monitoring of burrow communities, predator dynamics, and biodiversity patterns across South Florida.",
              ],
              [
                "Peanut Island Coral Monitoring",
                "Abiotic monitoring and coral health tracking to understand stress, bleaching, and recovery patterns.",
              ],
              [
                "Boulder Reef Monitoring & Outreach",
                "GoPro surveys paired with QR-linked marine life guides to connect visitors directly to reef biodiversity.",
              ],
              [
                "Pollinator Habitat Research",
                "Butterfly host plant studies focused on improving survival outcomes and habitat restoration.",
              ],
            ].map(([title, desc]) => (
              <div key={title} style={styles.card}>
                <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                  {title}
                </h3>
                <p style={{ marginTop: "14px", ...styles.bodyMd }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", background: "#f8fafc" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={styles.eyebrow}>Recent Work</p>
            <h2 style={{ ...styles.sectionTitle, marginTop: "12px" }}>
              Recognition and Current Momentum
            </h2>
          </div>

          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div style={styles.card}>
              <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                Undergraduate Symposium Recognition
              </h3>
              <p style={{ marginTop: "14px", ...styles.bodyMd }}>
                ECOTech Lab students recently earned first place in multimedia
                presentations and third place in oral presentations, reflecting
                strong student engagement in both scientific communication and
                applied environmental research.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                Active Presentation Pipeline
              </h3>
              <p style={{ marginTop: "14px", ...styles.bodyMd }}>
                Current projects are being translated into conference posters,
                outreach tools, and public-facing materials that support both
                conservation practice and student development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div>
              <p style={styles.eyebrow}>Student Opportunities</p>
              <h2 style={{ ...styles.sectionTitle, marginTop: "12px" }}>
                Join Applied Conservation Work
              </h2>
              <p style={{ marginTop: "16px", maxWidth: "760px", ...styles.bodyLg }}>
                Students in ECOTech Lab gain hands-on experience in ecological
                monitoring, fieldwork, data analysis, technology integration, and
                public outreach through real-world projects in South Florida and
                beyond.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                Typical student roles
              </h3>
              <ul
                style={{
                  marginTop: "18px",
                  color: "#475569",
                  lineHeight: 1.9,
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              >
                <li>Field data collection and image-based monitoring</li>
                <li>Species identification and ecological analysis</li>
                <li>Poster, presentation, and outreach development</li>
                <li>Technology-assisted conservation workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="links" style={{ width: "100%", background: "#f8fafc" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={styles.eyebrow}>Connected Projects &amp; Outreach</p>
            <h2 style={{ ...styles.sectionTitle, marginTop: "12px" }}>
              Useful Links
            </h2>
            <p style={{ marginTop: "16px", ...styles.bodyLg }}>
              Explore active ECOTech Lab projects, outreach platforms, and
              faculty information.
            </p>
          </div>

          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {projectLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  borderRadius: "24px",
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                  padding: "24px",
                  boxShadow: "0 1px 8px rgba(15, 23, 42, 0.06)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <h3 style={{ fontSize: "24px", margin: 0, fontWeight: 700 }}>
                  {link.title}
                </h3>
                <p style={{ marginTop: "14px", ...styles.bodyMd }}>
                  {link.description}
                </p>
                <p
                  style={{
                    marginTop: "18px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#0f766e",
                  }}
                >
                  {link.cta}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ width: "100%" }}>
        <div style={{ ...styles.sectionInner, paddingTop: "56px", paddingBottom: "56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div>
              <p style={styles.eyebrow}>Contact</p>
              <h2 style={{ ...styles.sectionTitle, marginTop: "12px" }}>
                Connect with ECOTech Lab
              </h2>
              <p style={{ marginTop: "16px", maxWidth: "720px", ...styles.bodyLg }}>
                Interested in collaboration, student involvement, or applied
                conservation partnerships? Reach out to discuss ECOTech Lab
                projects, outreach tools, and future opportunities.
              </p>
            </div>

            <div style={styles.card}>
              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  color: "#334155",
                  fontSize: "18px",
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>Director:</strong> Dr. Paul Arena
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Affiliation:</strong> Department of Biological Sciences,
                  Nova Southeastern University
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Email:</strong> arenap@nova.edu
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Location:</strong> South Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}