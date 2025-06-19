import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <section className="section auth-page">
      <div className="container auth-container">
        <div className="auth-box animate-fadeIn">
          <div className="auth-header">
            <div className="auth-icon-container">
              <FiLogIn className="auth-icon" />
            </div>
            <h2 className="section-title">Welcome Back</h2>
            <p className="auth-subtitle">Login to access your dashboard</p>
          </div>
          
          <form className="auth-form">
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
              <div className="form-helper">
                <Link to="/forgot-password" className="text-accent">Forgot password?</Link>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            
            <div className="auth-footer">
              <p className="auth-note">
                Don't have an account? <Link to="/signup" className="text-accent">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;