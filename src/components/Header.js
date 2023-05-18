import React from "react";
import styles from "../style/header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className={styles.navbar}>
      <header className={`${styles.nav} justify-content-center`}>
        <h1 className={styles.h1}>Athena Wilbon</h1>
      </header>
      <ul className={`${styles.nav} justify-content-center`}>
        <li className={`${styles.navItem} ${styles.padding}`}>
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={currentPage === "AboutMe" ? styles.navLinkActive : styles.navLink}
          >
            About
          </a>
        </li>
        <li className={`${styles.navItem} ${styles.padding}`}>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? styles.navLinkActive : styles.navLink}
          >
            Portfolio
          </a>
        </li>
        <li className={`${styles.navItem} ${styles.padding}`}>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? styles.navLinkActive : styles.navLink}
          >
            Contact
          </a>
        </li>
        <li className={`${styles.navItem} ${styles.padding}`}>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? styles.navLinkActive : styles.navLink}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
