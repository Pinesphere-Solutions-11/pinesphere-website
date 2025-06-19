import React from "react";
import { Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";

const Signup = () => {
  return (
    <section className="section auth-page">
      <div className="container auth-container">
        <div className="auth-box animate-fadeIn">
          <div className="auth-header">
            <div className="auth-icon-container">
              <FiUserPlus className="auth-icon" />
            </div>
            <h2 className="section-title">Create Account</h2>
            <p className="auth-subtitle">Join our platform today</p>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                className="form-control" 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="your@email.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                placeholder="••••••••" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                className="form-control" 
                placeholder="••••••••" 
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            
            <div className="auth-footer">
              <p className="auth-note">
                Already have an account? <Link to="/login" className="text-accent">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;