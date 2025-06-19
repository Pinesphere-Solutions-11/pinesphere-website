import React from "react";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Our Company</h2>
            <p>We're a team of passionate designers and developers dedicated to creating the best digital experiences for our clients.</p>
            <p>With over 10 years of industry experience, we've helped hundreds of businesses establish their online presence with beautiful, functional websites.</p>
            <p>Our mission is to make web development accessible to everyone while maintaining the highest standards of quality and performance.</p>
            <button className="btn btn-primary">Read Our Story</button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Our team working together"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-image {
          height: 100%;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }

        .btn-primary {
          background-color: var(--primary);
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: var(--border-radius);
          border: none;
          cursor: pointer;
          font-weight: 600;
          align-self: flex-start;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-content {
            padding-top: 2rem;
          }

          .about-image {
            max-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
