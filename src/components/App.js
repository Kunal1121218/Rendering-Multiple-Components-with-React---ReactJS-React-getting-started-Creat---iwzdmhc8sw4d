import React, { Component, useState } from "react";
import "../styles/App.css";

const Project = ({ name, description }) => {
  return (
    <>
      <p data-ns-test="project-name">{name}</p>{" "}
      <p data-ns-test="project-description">{description}</p>
    </>
  );
};
const App = () => {
  return (
    <div id="main">
      <Project
        name="E-Commerce"
        description="Build an end-to-end E Commerce App"
      />

      <Project name="Netflix Clone" description="Build a new netflix clone" />

      <Project
        name="Game of thrones"
        description="New game of thrones website for kahlisi"
      />
    </div>
  );
};

export default App;
