import React from "react";

const features = [
  {
    icon: "💳",
    title: "Secure Payments",
    description:
      "Experience fast and secure transactions with end-to-end encryption.",
  },
  {
    icon: "📈",
    title: "Real-time Analytics",
    description:
      "Track your financial growth with intuitive dashboards and insights.",
  },
  {
    icon: "🤝",
    title: "Trusted by Millions",
    description:
      "Join a community of users who trust us with their financial needs.",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "Entrepreneur",
    quote:
      "This platform transformed how I manage my business finances. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Investor",
    quote:
      "The real-time analytics help me make smarter investment decisions every day.",
  },
];

export default function Landing() {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>FinTechPro</div>
        <div>
          <a href="#features" style={styles.navLink}>
            Features
          </a>
          <a href="#testimonials" style={styles.navLink}>
            Testimonials
          </a>
          <a href="#signup" style={{ ...styles.navLink, ...styles.ctaButton }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Revolutionize Your Financial Future</h1>
        <p style={styles.heroSubtitle}>
          Seamless, secure, and smart financial solutions tailored for you.
        </p>
        <a href="#signup" style={styles.primaryButton}>
          Get Started Now
        </a>
      </header>

      {/* Features Section */}
      <section id="features" style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose FinTechPro?</h2>
        <div style={styles.featuresGrid}>
          {features.map(({ icon, title, description }) => (
            <div key={title} style={styles.featureCard}>
              <div style={styles.featureIcon}>{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialsGrid}>
          {testimonials.map(({ name, role, quote }) => (
            <blockquote key={name} style={styles.testimonialCard}>
              <p style={styles.quote}>"{quote}"</p>
              <footer>
                — {name}, <cite>{role}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Signup CTA */}
      <section id="signup" style={styles.signupSection}>
        <h2 style={styles.sectionTitle}>
          Ready to take control of your finances?
        </h2>
        <a href="/signup" style={styles.primaryButton}>
          Sign Up Today
        </a>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 FinTechPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a202c",
    lineHeight: 1.6,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 3rem",
    borderBottom: "1px solid #e2e8f0",
    alignItems: "center",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#2b6cb0",
  },
  navLink: {
    marginLeft: "1.5rem",
    textDecoration: "none",
    color: "#4a5568",
    fontWeight: 600,
    cursor: "pointer",
  },
  ctaButton: {
    backgroundColor: "#2b6cb0",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
  },
  hero: {
    textAlign: "center",
    padding: "6rem 2rem 4rem",
    backgroundColor: "#ebf8ff",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#2c5282",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4a5568",
  },
  primaryButton: {
    backgroundColor: "#2b6cb0",
    color: "#fff",
    padding: "1rem 2rem",
    fontSize: "1.125rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  },
  featuresSection: {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#2c5282",
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
  },
  featureCard: {
    maxWidth: "300px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
    borderRadius: "8px",
    backgroundColor: "#f7fafc",
  },
  featureIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  testimonialsSection: {
    padding: "4rem 2rem",
    backgroundColor: "#f0f4f8",
    textAlign: "center",
  },
  testimonialsGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  testimonialCard: {
    maxWidth: "350px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
    fontStyle: "italic",
    color: "#2d3748",
  },
  quote: {
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },
  signupSection: {
    padding: "4rem 2rem",
    backgroundColor: "#2b6cb0",
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#1a202c",
    color: "#a0aec0",
  },
};
