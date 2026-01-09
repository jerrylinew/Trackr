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
      <section
        className="hero-section"
        id="heroSection"
        style={{ backgroundImage: "url(/cinema.png)" }}
      >
        <div className="homepage-hero-container">
          <div className="hero-logo-title">
            <img src="/trackrLogo.png" width="60" alt="Trackr Logo" />
            <h1 className="hero-title-medium">Trackr</h1>
          </div>
          <p className="hero-subtitle-large">
            Find your lost items with a sticker and a scan
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
                <h3 className="step-title">Get Your Item Back</h3>
                <p className="step-description">
                  When someone finds your item and scans the code, we'll notify
                  you with their location.
                </p>
              </div>
              <div className="step-image-placeholder">
                <img src="/locationpage.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Values Section */}
      <section className="mission-values-section">
        <div className="mv-container">
          <div className="mv-text">
            <h2 className="mv-title">Mission, Vision & Values</h2>

            <div className="mv-content">
              <p>
                We aim to eliminate the waste and environmental impact of lost
                everyday items by providing an affordable, accessible tracking
                solution that helps students and young adults recover their
                belongings and build better habits to prevent future losses.
              </p>
              <p>
                Our vision is a world where losing everyday items no longer
                means unnecessary waste, where every water bottle, jacket, and
                lunch box can find its way home, preventing millions of tons of
                CO2 emissions and landfill waste annually.
              </p>
              <p>
                <strong>Values:</strong>
              </p>
              <ul>
                <li>
                  <strong>Sustainability First</strong> – Keep items in use, not
                  landfills.
                </li>
                <li>
                  <strong>Affordable for Everyone</strong> – Quality tracking
                  shouldn't break the bank.
                </li>
                <li>
                  <strong>Community Matters</strong> – We're stronger when we
                  help each other out.
                </li>
                <li>
                  <strong>Keep It Simple</strong> – Powerful tech that anyone
                  can use.
                </li>
                <li>
                  <strong>Prevention Over Cure</strong> – Stop losses before
                  they happen.
                </li>
              </ul>
            </div>
          </div>

          <div className="mv-image">
            <img src="/teamphoto.jpg" alt="Team or mission imagery" />
            <p className="mv-image-caption">Amy, Marqus, Alex, Ethan</p>
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

            <a href="" className="homepage-btn-primary">
              Store In Progress
            </a>
          </div>
          <div className="shop-image">
            <img src="/phonehead.png" />
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer className="contact-section" id="footerSection">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-section-item">
              <h3>Trackr</h3>
              <p>
                Trackr creates smart lost-and-found stickers that help people
                quickly recover misplaced items, from water bottles to wallets.
                Out easy-to-use, affordable stickers make everyday life a little
                less stressful by turning lost things into found things.
              </p>
            </div>

            <div className="contact-section-item">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#instructionsSection">About</a>
                </li>
              </ul>
            </div>
            <div className="contact-section-item">
              <h4>Contact</h4>
              <ul>
                <li>ethanjoshuasema@gmail.com</li>
                <li>(267) - 648 - 3654</li>
                <li>301 Bishop Drive, San Ramon, California</li>
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
