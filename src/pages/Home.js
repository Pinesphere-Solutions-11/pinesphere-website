import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build amazing digital experiences <span>faster</span>
            </h1>
            <p className="hero-subtitle">
              Our platform helps you create beautiful, responsive websites in record time without sacrificing quality or performance.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features" id="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p>Discover the features that make our platform stand out from the competition.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p>Optimized for performance with minimal load times and smooth animations for better user experience.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Fully Responsive</h3>
              <p>Looks great on any device, from mobile phones to large desktop displays with perfect scaling.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Customizable</h3>
              <p>Easily customize colors, fonts, and layouts to match your brand identity with our intuitive tools.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
