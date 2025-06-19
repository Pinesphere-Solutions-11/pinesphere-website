import React from "react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p>Have questions or want to discuss a project? We'd love to hear from you.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>123 Design Street, Creative City, CA 90210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@modernui.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .contact-icon {
          font-size: 1.5rem;
          color: var(--accent);
          margin-top: 0.25rem;
        }
        
        .contact-form {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: var(--border-radius);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--light);
          transition: var(--transition);
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(76, 201, 240, 0.3);
        }
        
        textarea.form-control {
          min-height: 150px;
          resize: vertical;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;