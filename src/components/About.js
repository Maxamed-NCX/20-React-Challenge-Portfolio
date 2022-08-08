import React from "react";
import "./About.css";

function About() {
  return (
    
    <div>
    
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "/img/profile.jpg"}
        alt="MCX"
      />
      <p className="content is-italic mt-4">
        Hello, My Name is Maxamed-Noor! I have been studying full stack web
        development at the University of Minnesota in their Coding BootCamp
        Program.
      </p>
      <p className="content font-weight-bold">
        Learning to code and about all the resources currently avialable. My goal is to contine improving my skills and adding more experience under my belt. UofM BootCamp has allowed for me to make interesting and amazing Applications. Looking forward to exploring more programming contents in the future and learning about all the different kinds of types of coding languages there are. 
      </p>
    </div>
  );
}

export default About;
