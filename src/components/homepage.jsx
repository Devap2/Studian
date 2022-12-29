import React from 'react';
import './navbar.css';
import './homepage.css'
import Video from './Video';

function HomePage() {
  return (
  <div className="home-page">
      {/* Header with title and subtitle */}
      <header className="header">
        <section className="header-section">
          <div className="header-parent">
            <div className="header-text-child">
              <h1 class="title">Welcome to <span id='title-span'>Studian</span>.</h1>
              <p className="subtitle">The Best Management System For Your School Work!</p>
              <p className="subtitle">A Free Tool Which Can Be Used By Anyone.</p>
              <button className="header-button">About us</button>
            </div>
            <div className="header-image-child">
              <img src="/images/developer.png" alt="developer" className="header-image" />
            </div>
            <div className="header-arrow-child">
              <img src="/images/arrow.png" alt="developer" className="arrow-down" />
            </div>
          </div>
        </section>
      </header>

      {/* Introduction section with an image and some text */}
      <section class="information">
        <h1>Information</h1>
        <p>Our company was founded in 2010 with the goal of providing high-quality products and excellent customer service. We have since grown to become a leader in our industry, with a wide range of products and a loyal customer base. Our team is dedicated to continuously improving and innovating to meet the needs of our customers. Thank you for choosing us!</p>
        <p>We also won a award of the best website in 2022, yeah okay we actually didn't but who cares.</p>
        <Video />
      </section>

      {/* Features section with a list of features */}
      <section className="feature-header-section">
        <h1 id="feature-header">Features</h1>
      </section>
      <section class="features-section">
        <div class="feature">
          <h3 id='feature-title'>Notitions</h3>
          <p>Add your notes to stay organised!</p>
        </div>
        <div class="feature">
          <h3 id='feature-title'>To Do List</h3>
          <p>Want to keep track of thing you have to do? This is the best tool for that!</p>
        </div>
        <div class="feature">
          <h3 id='feature-title'>Feature 3</h3>
          <p>Description of feature 3</p>
        </div>
        <div class="feature">
          <h3 id='feature-title'>Feature 4</h3>
          <p>Description of feature 4</p>
        </div>
        <div class="feature">
          <h3 id='feature-title'>Feature 5</h3>
          <p>Description of feature 5</p>
        </div>
        <div class="feature">
          <h3 id='feature-title'>Feature 6</h3>
          <p>Description of feature 6</p>
        </div>
      </section>

      {/* Footer with copyright and social media links */}
      <footer>
      <p className="copyright">© 2022 Studian. All Rights Reserved.</p>
        <div class="footer-links">
          <a href="#">Home</a>
          <a href="/todo">To Do</a>
          <a href="/contact">Contact</a>
          <a href="/login">Account</a>
          <a href="#">Help</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
        </div>
        <div class="social-links">
          <li className="social-link">
            <a href="#" className="social-link-icon"><i className="fab fa-twitter"></i></a>
          </li>
          <li className="social-link">
            <a href="#" className="social-link-icon"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li className="social-link">
            <a href="#" className="social-link-icon"><i className="fab fa-instagram"></i></a>
          </li>
          <li className="social-link">
            <a href="#" className="social-link-icon"><i className="fab fa-linkedin-in"></i></a>
          </li>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
