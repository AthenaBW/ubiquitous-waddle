import React from "react";
import Prework from "../pics/prework.png";
import svg from "../pics/svg.png";
import work from "../pics/work.png";
import Coding from "../pics/coding.png";
import password from "../pics/password.png";
import mp3 from "../pics/mp3.png";
import portfolio from "../pics/portfolio.png";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
  card: {
    padding: 0,
    margin: "0.5rem",
  },
  cardImg: {
    maxWidth: "100%",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.header}>Portfolio</h2>
      <div style={styles.container}>
        <section style={styles.card}>
          <a href="https://ach-media-player.herokuapp.com/" target="blank">
            <img
              style={styles.cardImg}
              src={mp3}
              alt="screenshot prework"
            />
            <header>
              <h3 style={styles.header}>MP3 player</h3>
            </header>
          </a>
          <a
            style={styles.repo}
            href="https://github.com/Hteasdell44/ach-media-player"
            target="blank"
          >
            GitHub Repository
          </a>
          <p style={styles.header}>
            This Prework Study Guide was created for boot camp students who were going through the Prework. It contains notes on HTML, CSS, Git, and JavaScript.
          </p>
        </section>

        <section style={styles.card}>
          <a href="https://secret-springs-16165.herokuapp.com/" target="blank">
            <img
              style={styles.cardImg}
              src={password}
              alt="password generator"
            />
            <header>
              <h3 style={styles.header}>Password Generator</h3>
            </header>
          </a>
          <a
            style={styles.repo}
            href="https://athenabw.github.io/psychic-dollop/"
            target="blank"
          >
            GitHub deployed
          </a>
          <p style={styles.space}>
            A password generating website designed for a user to choose options for an automatically generated password.
          </p>
        </section>

        <section style={styles.card}>
          <a href="https://athenabw.github.io/turbo-spork/" target="blank">
            <img
              style={styles.cardImg}
              src={Coding}
              alt="screenshot coding"
            />
            <header>
              <h3 style={styles.header}>Coding Quiz</h3>
            </header>
          </a>
          <a
            style={styles.repo}
            href="https://github.com/AthenaBW/turbo-spork"
            target="blank"
          >
            GitHub Repository
          </a>
          <p style={styles.space}>
            A coding quiz designed for the user to practice their knowledge of basic coding information. When an answer is incorrect, their time will be deducted by 3 seconds. The user will also see whether their answer was correct or incorrect. The final score is displayed at the end.
</p>
</section>
<section style={styles.card}>
      <a href="https://athenabw.github.io/sturdy-tribble/" target="blank">
        <img
          style={styles.cardImg}
          src={work}
          alt="screenshot of work day calendar"
        />
        <header>
          <h3 style={styles.header}>Work day Calendar</h3>
        </header>
      </a>
      <a
        style={styles.repo}
        href="https://github.com/AthenaBW/sturdy-tribble"
        target="blank"
      >
        GitHub Repository
      </a>
      <p style={styles.space}>
        A simple work calendar application that allows a user to save events for each hour of the day. The calendar will generate different color-coded blocks depending on past, present, or future based on the user's local time. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
      </p>
    </section>

    <section style={styles.card}>
      <a href="https://athenabw.github.io/expert-memory/" target="blank">
        <img
          style={styles.cardImg}
          src={portfolio}
          alt="screenshot of first portfolio"
        />
        <header>
          <h3 style={styles.header}>Portfolio</h3>
        </header>
      </a>
      <a
        style={styles.repo}
        href="https://github.com/AthenaBW/expert-memory"
        target="blank"
      >
        GitHub Repository
      </a>
      <p style={styles.space}>
        A website designed to showcase a portfolio of web development projects created or refactored by Athena Wilbon.
      </p>
    </section>
    <section style={styles.card}>
      <a href="https://athenabw.github.io/prework-study-guide/" target="blank">
        <img
          style={styles.cardImg}
          src={Prework}
          alt="screenshot of prework"
        />
        <header>
          <h3 style={styles.header}>Prework study guide</h3>
        </header>
      </a>
      <a
        style={styles.repo}
        href="https://github.com/AthenaBW/prework-study-guide"
        target="blank"
      >
        GitHub Repository
      </a>
      <p style={styles.space}>
        This Prework Study Guide was created for boot camp students who were going through the Prework. It contains notes on HTML, CSS, Git, and JavaScript.
      </p>
    </section>

    <section style={styles.card}>
      <a
        href="https://drive.google.com/file/d/13lwtKHsGeFl5j50gJ072kYPVQmGaylSq/view"
        target="_blank"
      >
        <img
          style={styles.cardImg}
          src={svg}
          alt="screenshot of SVG maker"
        />
        <header>
          <h3 style={styles.header}>SVG Logo Maker</h3>
        </header>
      </a>
      <a
        style={styles.repo}
        href="https://github.com/AthenaBW/probable-train"
        target="_blank"
      >
        GitHub Repository
      </a>
      <p style={styles.space}>
        A command-line interface (CLI) tool that generates a simple logo in SVG format based on user input. It uses Node.js and the Inquirer
        library to prompt the user for input and generate the SVG file based on the provided information.
</p>
</section>
</div>
</div>
);
}