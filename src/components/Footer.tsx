import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/salma-mhamid-33502b217/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer">
          Salma Mhamid
        </a>, AI and Big Data Engineer
      </p>
    </footer>
  );
}

export default Footer;
