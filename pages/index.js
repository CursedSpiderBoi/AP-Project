import React, { useState } from 'react';
import '@/styles/landing_page.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CompleteLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const slides = [
    "So Here We Are Speaking Random Shii Again And Again. So Here We Are Speaking Random Shii Again And Again. So Here We Are Speaking Random Shii Again And Again.",
    "So Here We Are Speaking Random Shii Again And Again. So Here We Are Speaking Random Shii Again And Again.",
    "So Here We Are Speaking Random Shii Again And Again. So Here We Are Speaking Random Shii Again And Again.",
    "So Here We Are Speaking Random Shii Again And Again."
  ];
  function join() {
    router.push('/home');
  }
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="wrapper">
      <div className="cognify-container">
        {/* Cognify Section */}
        <section className="cognify-section">
          {/* Navigation */}
          <nav className="nav-container">
            <button className="join-button" onClick={join}>
              Join Today!
            </button>
          </nav>

          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-text">
              Cognify
            </div>
            <h2 className="tagline">
              Assisting your growth, step by step
            </h2>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <div className="content-container">
              {/* First Card */}
              <div className="content-card">
                <p className="content-text">
                  {slides[0]}
                </p>
              </div>
              {/* First Book Image */}
              <div className="book-container">
                <div className="book-wrapper">
                  <div className="book-image-container">
                    <Image
                      src="https://dummyimage.com/256"
                      height={1}
                      width={1}
                      alt="Animated book"
                      className="book-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="carousel-section">
              <div className="carousel-container">
                <button
                  onClick={prevSlide}
                  className="carousel-button"
                >
                  <ChevronLeft size={40} />
                </button>

                <div className="carousel-content">
                  <p className="carousel-text">
                    {slides[currentSlide]}
                  </p>
                </div>

                <button
                  onClick={nextSlide}
                  className="carousel-button"
                >
                  <ChevronRight size={40} />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`carousel-indicator ${currentSlide === index ? 'carousel-indicator-active' : ''
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div className="background-gradient" />
          <div className="hero-section">
            <div className="hero-container">
              <div className="hero-content">
                <h1 className="hero-title">
                  Develop your skills in a new and unique way
                </h1>
                <p className="hero-text">
                  Access a transformative approach to skill development on our online
                  learning platform. Discover a new realm of learning experiences.
                </p>
                <button className="enroll-button">
                  Enroll Now
                </button>
              </div>
              <div className="hero-image-container">
                <Image
                  src="https://dummyimage.com/600x400"
                  height={1}
                  width={1}
                  alt="Learning illustration"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
          <div className="features-section">
            <div className="features-grid">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="feature-icon-container">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="feature-title">Interactive Learning</h3>
                <p className="feature-text">
                  Engage with interactive content and real-world projects
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="feature-icon-container">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="feature-title">Expert Instructors</h3>
                <p className="feature-text">
                  Learn from industry experts and experienced professionals
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="feature-icon-container">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">Certified Programs</h3>
                <p className="feature-text">
                  Earn recognized certificates upon completion
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default CompleteLanding;