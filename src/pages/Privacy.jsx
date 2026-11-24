import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

export default function Privacy() {
  return (
    <div style={{ width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF" }}>
      <Header />
      <section className="pagehead on-dark" style={{ "--bg": "url(/media/about-company-2.webp)" }}>
        <div className="wrap">
          <p className="crumb"><a href="/">Home</a> / Privacy Policy</p>
          <p className="eyebrow">Legal &amp; Privacy</p>
          <h1 className="h1" style={{ marginBottom: "16px" }}>Privacy <em>Policy.</em></h1>
          <p className="lead">How Parkan Enterprises Limited collects, uses, and safeguards your information.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <article className="doc-box">
            <div className="doc-meta">
              <span><strong>Effective Date:</strong> January 1, 2026</span>
              <span aria-hidden="true">•</span>
              <span><strong>Last Updated:</strong> 2026</span>
              <span aria-hidden="true">•</span>
              <span>Parkan Enterprises Limited</span>
            </div>

            <h2>1. Introduction</h2>
            <p>
              Welcome to Parkan Enterprises Limited (&ldquo;Parkan Group&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting any personal or commercial information you share with us. This Privacy Policy outlines our practices regarding data collection, usage, and protection when you visit our website, use our digital channels, or communicate with our sales, engineering, and dealer networks.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information in the following circumstances:</p>
            <ul>
              <li><strong>Contact &amp; Enquiry Information:</strong> When you submit enquiry forms, request bulk quotes, or contact our branches via phone or email, we collect your name, business name, email address, phone number, location, and project requirements.</li>
              <li><strong>Dealer &amp; Partner Submissions:</strong> Information provided when applying for dealership, distribution partnerships, or government tender collaborations.</li>
              <li><strong>Technical &amp; Usage Data:</strong> Standard internet log data including IP addresses, browser types, referring pages, and device operating systems collected to ensure website security and performance.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>The information collected is used strictly for legitimate business operations, including:</p>
            <ul>
              <li>Responding promptly to your enquiries, quotations, and technical support requests.</li>
              <li>Connecting you with the closest branch among our 13 locations across Karnataka, Goa, and Gujarat.</li>
              <li>Coordinating supply schedules, product deliveries, and project milestones.</li>
              <li>Maintaining and enhancing website security, performance, and user experience.</li>
              <li>Complying with applicable statutory and regulatory requirements under Indian law.</li>
            </ul>

            <h2>4. Information Sharing &amp; Disclosure</h2>
            <p>
              Parkan Enterprises Limited <strong>does not sell, rent, or lease</strong> personal data to any third parties for commercial advertising. We only share information with:
            </p>
            <ul>
              <li>Authorized internal branch teams and logistics partners strictly necessary to fulfill delivery orders.</li>
              <li>Regulatory, law enforcement, or government bodies when legally mandated or required for compliance.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to secure your personal data against unauthorized access, alteration, disclosure, or destruction. Website traffic is encrypted using SSL/TLS protocols.
            </p>

            <h2>6. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website uses basic essential cookies and standard performance analytics to facilitate navigation and measure aggregate traffic patterns. You can adjust your browser settings to refuse cookies; however, certain site features may function with reduced convenience.
            </p>

            <h2>7. Your Rights &amp; Choices</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or ask for deletion of your enquiry details from our active outreach databases. To exercise any of these rights, please reach out to us using the contact details below.
            </p>

            <h2>8. Contact &amp; Grievance Redressal</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact our administrative office:</p>
            <div style={{ background: "var(--soft)", padding: "18px 20px", borderRadius: "8px", marginTop: "12px", fontSize: "14.5px", lineHeight: "1.65" }}>
              <strong>Parkan Enterprises Limited (Head Office)</strong><br />
              Pooja Complex, Hubballi, Karnataka &ndash; 580020, India<br />
              <strong>Phone:</strong> +91 92743 37813<br />
              <strong>Email:</strong> parkanenterprisesltd@gmail.com
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
