import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Your AI Mentor. Motivation. Doubt Solver. 24/7.</h1>
        <p>An AI-powered personal mentor in a chat app—helping you stay motivated, master your subjects, and stay mentally strong.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Early Access</button>
          <button className="secondary-btn"><a href='/login'>See How It Works</a></button>
        </div>
      </header>

      <section className="why-section">
        <h2>Your Study Partner That Never Sleeps</h2>
        <p>Perfect for NEET, JEE, college exams, or self-learning — this app brings you daily motivation, instant doubt solving, and emotional support.</p>
      </section>

      <section className="features-section">
        <h2>Features That Make a Difference</h2>
        <ul>
          <li><strong>✅ Daily Motivation:</strong> Personalized based on your behavior.</li>
          <li><strong>🧠 Doubt Clarification:</strong> Ask up to 5 questions daily, anytime.</li>
          <li><strong>🎯 Personalized MCQs:</strong> Get quizzes based on your weak subjects.</li>
          <li><strong>⏰ Smart Reminders:</strong> Study nudges and motivational wake-up calls.</li>
          <li><strong>📊 Weekly Feedback:</strong> Reports on your progress, suggestions, and motivation levels.</li>
          <li><strong>💬 Emotional Support:</strong> AI support for mood, stress, and burnout.</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign Up & Set Your Goals</li>
          <li>Start Chatting with Your AI Mentor</li>
          <li>Receive Motivation, Doubt Support & MCQs Daily</li>
          <li>Track Your Progress Every Week</li>
        </ol>
      </section>

      <section className="testimonials">
        <h2>What Our Early Testers Say</h2>
        <blockquote>
          “I used to feel lost in my studies — now I wake up with purpose. The motivation messages really help.”
          <footer>- Riya, NEET Aspirant</footer>
        </blockquote>
        <blockquote>
          “It’s like having a friend who’s always there to explain things calmly and track your learning.”
          <footer>- Karan, B.Tech Student</footer>
        </blockquote>
      </section>

      <section className="signup-section">
        <h2>Join the Early Access List</h2>
        <input type="email" placeholder="Enter your email" />
        <button className="primary-btn">Join Now</button>
      </section>

      <footer className="footer">
        <nav>
          <a href="#">About</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </nav>
        <p>© 2025 YourAppName. Built for learners, by learners.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

