//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Code Refactor",
    languages: "HMTL, CSS",
    packages: "None",
    image: "/img/Code-Refactor.jpg",
    description: "It allows users to pick between different school programs!",
    repo: "https://github.com/Mcnoor/1-BootCamp-HTML-CSS-Git-Challenge-Code-Refactor",
    live: "https://mcnoor.github.io/1-BootCamp-HTML-CSS-Git-Challenge-Code-Refactor/",
  },
  {
    id: 1,
    title: "Random Password Generator",
    languages: "HTML, CSS, JS",
    packages: "None",
    image: "/img/Password-Generator.png",
    description:
      "Allows users to have a unique and customized password be generator with password criteria.",
    repo: "https://github.com/Mcnoor/3-BootCamp-JavaScript-Challenge-Password-Generator",
    live: "https://mcnoor.github.io/3-BootCamp-JavaScript-Challenge-Password-Generator/",
  },
  {
    id: 2,
    title: " Weather Dashboard",
    languages: "HTML, CSS, JS",
    packages: "None",
    image: "/img/weather-app.png",
    description:
      "Weather Application that shows a 5-Day forcast including Temperature, Wind Speed, Humidity and UV index from seleceted city",
    live: "https://mcnoor.github.io/6-BootCamp-Server-Side-APIs-Challenge-Weather-Dashboard/",
    repo: "https://github.com/Mcnoor/6-BootCamp-Server-Side-APIs-Challenge-Weather-Dashboard",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "HTML, CSS, JS, HEROKU",
    image: "/img/Note-Taker.png",
    packages: "Express.js, Generate Unique IDs",
    description:
      "Be able to take detailed notes and assign titles to save and delete later when need be",
    repo: "https://github.com/Mcnoor/Challenge-Module11-BC-",
    live: "https://note-tracker-mcx.herokuapp.com/notes",
  },
  {
    id: 4,
    title: "MVC Tech Blog",
    languages: "HTML, CSS, JS, EXPRESS, MySQL, HEROKU",
    packages: "Express, bcrypt, bulma, dotenv, mysql2, nodemon, sequlize",
    image: "/img/Techblog.png",
    description:
      "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/Mcnoor/Challenge-Module14-BC",
    live: "https://tech-blog-mx.herokuapp.com/",
  },
  {
    id: 5,
    title: "Budget Tracker",
    languages: "HTML, CSS, JS, EXPRESS, Mongoose, HEROKU",
    packages: "Express, compression, dotenv, mongoose, nodemon, morgan, bcrypt, Graphql, React, MongoDB, Compass, Node",
    image: "/img/budget.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/Mcnoor/Challenge-Module19-BC",
    live: "https://budget-mcx.herokuapp.com/",
  },
  {
    id: 6,
    title: "Google Book Serach",
    languages: "HTML, CSS, JS, EXPRESS, Mongoose, HEROKU",
    packages: "Express, compression, bcrypt, dotenv, mongoose, nodemon, jsonwebstoken, morgan, Apollo Graphql, React, MongoDB, Atlas, Compass, Node",
    image: "/img/googlebooks.png",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/Mcnoor/Challenge-Module21-BC",
    live: "https://googlebooks-mcx.herokuapp.com/",
  },
  {
    id: 6,
    title: "React Portfolio",
    languages: "HTML, CSS, JS, EXPRESS, Mongoose, ",
    packages: " dotenv, nodemon,  React, React Dom, Node",
    image: "/img/reactportfolio.png",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/Mcnoor/React-Challenge-Portfolio-",
    live: "https://mcnoor.github.io/React-Challenge-Portfolio-/",
  },
  {
    id: 6,
    title: "Group Project 1 (SunFund!)",
    languages: "HTML, CSS, JS, ",
    packages: "None",
    image: "/img/sunfund.png",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/CarlJMcGee/SunFund",
    live: "https://carljmcgee.github.io/SunFund/",
  },
    {
    id: 6,
    title: "Group Project 2 (Watch This!)",
    languages: "HTML, CSS, JS, EXPRESS, Mongoose, HEROKU",
    packages: "Express, node, Mysql, handlebar, bcrypt, dotenv",
    image: "/img/watchthis.jpg",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/bagl0025/watch-this",
    live: "https://gentle-headland-06018.herokuapp.com/",
  },
    {
    id: 6,
    title: "Group Project 3 (Buy Blake's Blocks!)",
    languages: "HTML, CSS, JS, EXPRESS, Mongoose, HEROKU",
    packages: "Express, compression, bcrypt, dotenv, mongoose, nodemon, jsonwebstoken, morgan, Apollo Graphql, React , MongoDB, Atlas, Compass, Node",
    image: "/img/blakeblock.png",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/smethersblake/buy-blakes-bricks",
    live: "https://googlebooks-mcx.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
