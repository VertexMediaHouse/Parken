import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

export default function Terms() {
  return (
    <div style={{ width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF" }}>
      <Header />
      <section className="pagehead on-dark" style={{ "--bg": "url(/media/about-company-2.webp)" }}>
        <div className="wrap">
          <p className="crumb"><a href="/">Home</a> / Terms &amp; Conditions</p>
          <p className="eyebrow">Legal &amp; Terms</p>
          <h1 className="h1" style={{ marginBottom: "16px" }}>Terms &amp; <em>Conditions.</em></h1>
          <p className="lead">Guidelines and terms governing the use of Parkan Enterprises Limited&rsquo;s website and services.</p>
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

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing, browsing, or using the website of Parkan Enterprises Limited (&ldquo;Parkan Group&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please refrain from using our digital platforms.
            </p>

            <h2>2. Products &amp; Catalogues</h2>
            <p>
              Parkan Enterprises Limited manufactures and supplies electrical products under our proprietary <strong>PARKAN</strong> brand (including copper flexible wires, cable accessories, conduit pipes, and modular boxes) as well as authorized wholesale distribution of leading electrical brands across Karnataka, Goa, and Gujarat.
            </p>
            <ul>
              <li>Product specifications, dimensions, tolerances, and technical data provided on this site are indicative and subject to continuous engineering improvements.</li>
              <li>Official commercial contracts, technical datasheets, and approved purchase orders take precedence over website catalogue previews.</li>
            </ul>

            <h2>3. Commercial Quotations &amp; Orders</h2>
            <p>
              Product pricing, bulk quotes, and availability communicated through online enquiry forms or phone consultations represent preliminary estimates. Binding commercial commitments are formalized only through signed purchase orders, formal proforma invoices, and agreed credit terms issued by our authorized sales offices.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content displayed on this website &ndash; including but not limited to logos, trademarks, brand collateral, text, photographs, product renders, graphical interfaces, and software code &ndash; is the intellectual property of Parkan Enterprises Limited or its respective partner brands. Unauthorized copying, reproduction, or distribution without prior written consent is strictly prohibited.
            </p>

            <h2>5. User Responsibilities &amp; Acceptable Use</h2>
            <p>When accessing or interacting with our website and forms, you agree not to:</p>
            <ul>
              <li>Submit fraudulent, deceptive, or spam enquiries.</li>
              <li>Attempt to gain unauthorized access to servers, databases, or infrastructure connected to this website.</li>
              <li>Introduce malicious code, viruses, or harmful scripts.</li>
              <li>Scrape, index, or extract data systematically without explicit written permission.</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              While we make every effort to maintain accurate, up-to-date information, Parkan Enterprises Limited does not warrant that website content is error-free or uninterrupted. To the maximum extent permitted under applicable law, Parkan Enterprises Limited and its directors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from website downtime or reliance on website information.
            </p>

            <h2>7. External Links &amp; Third Parties</h2>
            <p>
              Our website may contain hyperlinks to external sites, channel partners, or third-party AI portals for convenience. We do not exercise control over external platforms and are not responsible for their content or privacy practices.
            </p>

            <h2>8. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or relating to these terms or use of the website shall be subject to the exclusive jurisdiction of the competent courts in Hubballi / Dharwad, Karnataka.
            </p>

            <h2>9. Contact Information</h2>
            <p>For any legal enquiries, formal correspondence, or questions regarding these terms, please contact:</p>
            <div style={{ background: "var(--soft)", padding: "18px 20px", borderRadius: "8px", marginTop: "12px", fontSize: "14.5px", lineHeight: "1.65" }}>
              <strong>Parkan Enterprises Limited</strong><br />
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
