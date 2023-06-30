import React from "react";
import "./Career.scss";

const Career = () => {
  return (
    <div className="career-page">
      <h2 className="career-page__title">Join Our Team and Make an Impact</h2>
      <p className="career-page__description">
        Are you looking for an exciting career opportunity in the field of
        advanced monitoring solutions? Advance Analytik is a leading company
        specializing in the development and distribution of cutting-edge
        monitoring technologies for various industries. We are dedicated to
        providing innovative solutions that empower our clients to achieve
        excellence in quality control, regulatory compliance, and environmental
        protection.
      </p>
      <div className="career-page__why-join">
        <h3 className="career-page__subtitle">Why Join Advance Analytik?</h3>
        <div className="career-page__reasons">
          <div className="career-page__reason">
            <img src="img" alt="Cutting-Edge Technology" />
            <h4>Cutting-Edge Technology</h4>
            <p>
              As a member of our team, you will have the opportunity to work
              with state-of-the-art monitoring technologies and contribute to
              the development of innovative solutions that address the evolving
              needs of our clients.
            </p>
          </div>
          <div className="career-page__reason">
            <img src="src" alt="Collaborative Environment" />
            <h4>Collaborative Environment</h4>
            <p>
              We foster a collaborative and inclusive work environment where
              ideas are encouraged, and teamwork is valued. You will have the
              chance to collaborate with experts in the industry, learn from
              their insights, and contribute to meaningful projects.
            </p>
          </div>
          <div className="career-page__reason">
            <img src="src" alt="Professional Growth" />
            <h4>Professional Growth</h4>
            <p>
              We believe in investing in the growth and development of our team
              members. Through ongoing training programs, mentorship
              opportunities, and challenging projects, we provide a platform for
              you to enhance your skills, expand your knowledge, and advance
              your career.
            </p>
          </div>
        </div>
      </div>
      <div className="career-page__how-to-apply">
        <h3 className="career-page__subtitle">How to Apply</h3>
        <p>
          If you are ready to take the next step in your career and join our
          team, we invite you to explore our current job openings listed below.
          To apply, please submit your resume and a cover letter outlining your
          qualifications, experience, and why you are interested in joining
          Advance Analytik. Our HR team will review your application and reach
          out to qualified candidates for further evaluation.
        </p>
        <p>
          Join us at Advance Analytik and be part of a team that is
          revolutionizing the field of advanced monitoring solutions. Together,
          we can make a meaningful impact and drive positive change.
        </p>
        <h3 className="career-page__subtitle">Apply Now</h3>
        <form className="career-page__form" >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
             
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
