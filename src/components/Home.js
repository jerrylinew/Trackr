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
              <a href="#storySection" className="homepage-nav-link">
                Story
              </a>
            </li>
            <li>
              <a href="#instructionsSection" className="homepage-nav-link">
                How It Works
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

      {/* Story Section */}
      <section className="story-section" id="storySection">
        <div className="story-container">
          <div className="story-content">
            <div className="story-badge">Our Story</div>
            <h2 className="story-title">Mission, Vision & Values</h2>
            <div className="story-text">
              <p>
                <strong>Mission:</strong> To eliminate the waste and
                environmental impact of lost everyday items by providing an
                affordable, accessible tracking solution that helps students and
                young adults recover their belongings and build better habits to
                prevent future losses.
              </p>
              <p>
                <strong>Vision:</strong> A world where losing everyday items no
                longer means unnecessary waste, where every water bottle,
                jacket, and lunch box can find its way home, preventing millions
                of tons of CO2 emissions and landfill waste annually.
              </p>
              <p>
                <strong>Values:</strong>
                <ul>
                  <li>
                    <strong>Sustainability First</strong> - Help the planet by
                    keeping items in use, not landfills.
                  </li>
                  <li>
                    <strong>Affordable for Everyone</strong> - Quality tracking
                    shouldn't break the bank.
                  </li>
                  <li>
                    <strong>Community Matters</strong> - We're stronger when we
                    help each other out.
                  </li>
                  <li>
                    <strong>Keep It Simple</strong> - Powerful tech that anyone
                    can use.
                  </li>
                  <li>
                    <strong>Prevention Over Cure</strong> - Stop losses before
                    they happen.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="story-image">
            <img src="/team-placeholder.jpg" alt="Team or mission imagery" />
            <p className="image-caption">
              [Replace with team photo or mission-related image]
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="instructionsSection">
        <div className="homepage-services-container">
          <div className="homepage-services-header">
            <div className="story-badge">Innovation Model</div>
            <h2 className="how-it-works-title">How Trackr Works</h2>
            <p className="how-it-works-subtitle">
              3 Simple Steps to Never Lose Your Items Again
            </p>
          </div>

          <div className="homepage-services-grid">
            {/* Step 1 */}
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

            {/* Step 2 */}
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

            {/* Step 3 */}
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

          <div className="model-benefits">
            <h3 className="benefits-title">Key Benefits</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">💡</div>
                <h4>Affordable Universal Recovery</h4>
                <p>
                  Trackr's waterproof QR stickers work on any item and cost 20x
                  less than tracking devices like AirTags, making lost item
                  recovery accessible and practical for everyday belongings
                  through instant location alerts when scanned.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h4>Proactive Loss Prevention</h4>
                <p>
                  Unlike passive tracking solutions, Trackr actively prevents
                  loss through smart geofencing that alerts you when items are
                  left behind, habit-building reminders, and predictive
                  notifications based on your routines and check-in-and-out
                  patterns.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h4>Complete Item Protection System</h4>
                <p>
                  Trackr uniquely combines both recovery and prevention in one
                  platform, integrating community-powered location alerts with
                  personalized habit coaching—features that traditional DIY tags
                  and lost-and-found systems simply don't offer together.
                </p>
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

            <a href="" className="homepage-btn-primary">
              Store In Progress
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
