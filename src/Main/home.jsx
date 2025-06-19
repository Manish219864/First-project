import React from 'react';
import './style.css'; // Assuming the CSS file is named 'style.css'
import { Link } from 'react-router-dom';

function Home() {
    const toggleMenu = () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    };
   

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="navbar">
                    <div className="left-space"></div>
                    <div className="logo">
                        <img 
                            src="https://res.cloudinary.com/dla5rblx7/images/v1730530036/parcellogo_2-hd/parcellogo_2-hd.png?_i=AA" 
                            alt="Logo" 
                        />
                    </div>
                    <div className="middle-space"></div>
                    <div className="hamburger-menu" id="hamburgerMenu" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <nav className="nav-links" id="navLinks">
                       

                        <div className="dropdown">
                            <div className="dropdown-toggle">Features</div>
                            <div className="dropdown-content features-dropdown">
                                <div className="features-column">
                                    <a href="#"><i className="fas fa-truck"></i> E-commerce Shipping</a>
                                    <a href="#"><i className="fas fa-truck-moving"></i> Tracking & Notification</a>
                                    <a href="#"><i className="fas fa-money-check"></i> Early COD Remittance</a>
                                    <a href="#"><i className="fas fa-exchange-alt"></i> Return & Exchange</a>
                                </div>
                                <div className="features-column">
                                    <a href="#"><i className="fas fa-cogs"></i> Shipping Intelligence</a>
                                    <a href="#"><i className="fas fa-tasks"></i> NDR Management</a>
                                    <a href="#"><i className="fas fa-project-diagram"></i> Shipway Project</a>
                                    <a href="#"><i className="fas fa-box-open"></i> Amazon Self Ship</a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <div className="dropdown-toggle">Pricing</div>
                            <div className="dropdown-content">
                                <a href="signup.html">Pricing Details</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <div className="dropdown-toggle">Resources</div>
                            <div className="dropdown-content vertical">
                                <a href="blogs.html"><i className="fas fa-pencil-alt"></i> Blogs</a>
                                <a href="webinars.html"><i className="fas fa-video"></i> Webinars</a>
                                <a href="caseStudies.html"><i className="fas fa-book"></i> Case Studies</a>
                                <a href="shipwayVsShiprocket.html"><i className="fas fa-arrow-alt-circle-right"></i> Shipway vs Shiprocket</a>
                                <a href="shipwayVsIThinkLogistics.html"><i className="fas fa-arrow-alt-circle-right"></i> Shipway vs iThink Logistics</a>
                                <a href="shipwayVsNimbusPost.html"><i className="fas fa-arrow-alt-circle-right"></i> Shipway vs NimbusPost</a>
                                <a href="partnerLibrary.html"><i className="fas fa-cogs"></i> Partner Library</a>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-buttons">
                        <a href="/login" className="login-btn">Log In</a>
                        <a href="/signup" className="signup-btn">Sign Up</a>
                    </div>
                    <div className="right-space"></div>
                </div>
            </header>

            {/* Image Section */}
            <div className="image-section">
                <img 
                    src="https://cdn.prod.website-files.com/65c4a9636687ae3b0294350e/65d9dc778c280d989d511d3f_guybanner%20(2).webp" 
                    alt="Another Image" 
                />
            </div>
        </div>
    );
}


export default Home;
