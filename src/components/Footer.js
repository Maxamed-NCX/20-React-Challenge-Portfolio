import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Mcnoor" target="_blank" rel="noreferrer">
            Maxamed-Noor
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/maxamed-xassan-1a80a8231/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/Mcnoor" target="_blank" rel="noreferrer">
        <img src="github-logo.jpg"/>
            GitHub Repo
          </a>
        </p>
      </div>
      <div>
			</div>
    </footer>
  );
}

export default Footer;
