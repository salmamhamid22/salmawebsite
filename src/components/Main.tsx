import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/salmaavatar.png')} alt="Salma Mhamid" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/salma-mhamid-33502b217/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Salma Mhamid</h1>
          <p>AI Engineer & Big Data Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/salma-mhamid-33502b217/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
