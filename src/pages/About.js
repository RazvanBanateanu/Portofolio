import React from "react";
import '../styles/About.css';

const About = () => {
    return(
        <div className="about-container">
            <div className="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                    <img src="assets\profile.jpg" alt="Profile"/>
                    <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                    <h3>Junior Developer</h3>
                    <p>As a Junior Developer, I have a proven track record in tackling complex projects with a blend of technical expertise and creative problem-solving.
                        I have experience in Python for Telegram bot development and Rust for blockchain technology. Additionally, I have experience in using React for website 
                        development, Flask for server-side programming, and MySQL for database management. I am passionate about continuous learning and delivering 
                        innovative solutions for organizational success.</p>
            </div>
            </div>
        </div>
    );
};

export default About;