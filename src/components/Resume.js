import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Maxamed-Xassan-resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
          {" "}
          Front-End
          <li>HTML, CSS, Javascript </li>
          <li>React, Jquery, Bulma, Bootstrap,OpenAPI, JSON </li>
        </ul>
        <hr />
        <ul>
          {" "}
          Back-End DataBase
          <li>Mysql, Apollo Graphql, Mongoose </li>
          <li>MongoDB, IndexDB </li>
          <li> WorkBench, Atlas, Insomnia, Postman</li>
        </ul>
        <hr />
        <ul>
          {" "}
          Git/ Deployments
          <li>Markdown</li>
          <li>Git</li>
          <li>Github Repo Management</li>
          <li>GitLab</li>
          <li>Heroku</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
