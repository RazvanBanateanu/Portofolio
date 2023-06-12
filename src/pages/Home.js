import React from "react";
import '../styles/Home.css';
import {FaLinkedin, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Banateanu Razvan</span></h1> 
                <div className="text-animated">
                    <h3>Junior Developer</h3>
                    <p>I am driven to tackle challenging projects, constantly develop my skills, and deliver innovative solutions to help organizations achieve their goals.
                         I believe that pushing the boundaries of what is possible is essential for personal growth and the advancement of society as a whole. By embracing 
                         new technologies, staying up-to-date with industry trends, and seeking out opportunities to learn and improve, I strive to be at the forefront of innovation.</p>

                    <div className="btn-box">
                        <Link to="contact" className="link"><button>Hire Me</button></Link>
                        <Link to="contact" className="link"><button>Let's Talk</button></Link>
                    </div>
                </div>

                <div className="home-icons">
                    <a href="https://www.linkedin.com/in/razvan-banateanu-739b761a7/"><FaLinkedin /></a>
                    <a href="https://github.com/RazvanBanateanu"><FaGithub /></a>
                </div>
            </div>

            <div className="profile">
                <img src="assets\profile.jpg" alt="Profile"/>
            </div>
        </div>
    );
};

export default Home;