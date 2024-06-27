import React from 'react';
import './Login.css';

function SignUp() {
  return (
    <div className="login-container">
      <h2>Welcome back!</h2>
      <button className="facebook-btn">Log in with Facebook</button>
      <div className="separator">or</div>
      <form>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" placeholder="Enter your email address" />
        <label htmlFor="password">PASSWORD</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot your password?</a>
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default SignUp;
