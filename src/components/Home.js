import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="homepage-nav">
        <div className="homepage-nav-container">
          <div className="homepageLogo">
            <img src="/trackrLogo.png" width="25" />
            <a href="#" className="homepage-nav-brand">
              Trackr
            </a>
          </div>
          <ul className="homepage-nav-links">
            <li>
              <a href="#heroSection" className="homepage-nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#instructionsSection" className="homepage-nav-link">
                Instructions
              </a>
            </li>
            <li>
              <a href="#shopSection" className="homepage-nav-link">
                Shop
              </a>
            </li>

            <li>
              <a href="#footerSection" className="homepage-nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="heroSection">
        <div className="homepage-hero-container">
          <h1 className="hero-title">Welcome to Trackr</h1>
          <p className="hero-subtitle">
            "Find your lost items with a sticker and a scan"
          </p>
          <div className="homepage-hero-buttons">
            <a href="#shopSection" className="homepage-btn-primary">
              Shop Now
            </a>
            <a href="#instructionsSection" className="homepage-btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="instructionsSection">
        <div className="homepage-services-container">
          <div className="homepage-services-header">
            <h2 className="how-it-works-title">How It Works</h2>
            <p className="how-it-works-subtitle">3 Basic Steps</p>
          </div>

          <div className="homepage-services-grid">
            {/* Step 1 - Image at bottom */}
            <div className="step-card">
              <div className="step-content">
                <h4 className="step1">1.</h4>
                <h3 className="step-title">Activate Your Trackr</h3>
                <p className="step-description">
                  First scan activates your Trackr. Just fill in your info and
                  hit setup!
                </p>
              </div>
              <div className="step-image-placeholder">
                <img src="/setuppage.png" alt="Setup page screenshot" />
              </div>
            </div>

            {/* Step 2 - Image at top (using reverse class) */}
            <div className="step-card">
              <div className="step-content">
                <h4 className="step2">2.</h4>
                <h3 className="step-title">Place Your Trackr</h3>
                <p className="step-description">
                  Stick your Trackr on keys, bags, electronics—anything you
                  might lose.
                </p>
              </div>
              <div className="step-image-placeholder">
                <img src="/trackrbottle.png" />
              </div>
            </div>

            {/* Step 3 - Image at bottom */}
            <div className="step-card">
              <div className="step-content">
                <h4 className="step3">3.</h4>
                <h3 className="step-title">Get Your Item Back</h3>
                <p className="step-description">
                  When someone finds your item and scans the code, we'll notify
                  you with their location.
                </p>
              </div>
              <div className="step-image-placeholder">
                <img src="/emailtrackr.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section" id="shopSection">
        <div className="shop-container">
          <div className="shop-content">
            <h2>Never Lose Your Stuff Again.</h2>
            <p>
              Never lose your valuables again. Trackr's smart QR stickers turn
              any item into a trackable object. When someone finds your lost
              item, they simply scan the code to contact you instantly—no apps
              required.
            </p>

            <a
              href="https://kuuktc-bs.myshopify.com/"
              className="homepage-btn-primary"
            >
              Shop Trackr Products
            </a>
          </div>
          <div className="shop-image">
            <img src="/trackrphone.png" />
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer className="contact-section" id="footerSection">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-section-item">
              <h3>Trackr</h3>
              <p>Trackr description</p>
            </div>

            <div className="contact-section-item">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="contact-section-item">
              <h4>Contact</h4>
              <ul>
                <li>work.fred.zhang@gmail.com</li>
                <li>(512) - 774 - 2988</li>
                <li>123 Trackr St.</li>
              </ul>
            </div>
          </div>
          <div className="contact-bottom">
            <p>Copyright of Trackr®</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
