import React from "react";
import LinkedIn from "./pics/linkedin.png";
import Github from "./pics/github.png";
import Facebook from "./pics/fb.png";

const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#F2F2F2",
    },
    logo: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      margin: "5px",
      opacity: "100%",
    },
  };

function Footer() {
    return (
      <footer className="text-center">
        <div className="container p-4">
          <section className="mb-4">
            
          <a href="https://www.linkedin.com/in/athena-wilbon" target="blank">
            <img style={styles.logo} src={LinkedIn} alt="linkedin logo" />
            </a>
            <a href="https://github.com/AthenaBW" target="blank">
              <img style={styles.logo} src={Github} alt="github logo" />
            </a>
            <a href="https://www.facebook.com/athena.wilbon/" target="blank">
            <img style={styles.logo} src={Facebook} alt="fb logo" />
            </a>
          </section>
        </div>
      </footer>
    );
  }
  
export default Footer;