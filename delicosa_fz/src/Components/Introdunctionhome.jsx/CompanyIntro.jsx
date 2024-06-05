import React from 'react';
import './CompanyIntro.css'; // Import your CSS file for styling

const CompanyIntro = () => {
    return (
        <section className="company-intro">
            <div className="container">
                <div className="company-content">
                    <div className="company-description">
                        <h2>Company Introduction</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                    <div className="company-images">
                        <img src="one.jpg" alt="one" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;
