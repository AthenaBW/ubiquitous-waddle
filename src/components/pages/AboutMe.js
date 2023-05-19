import React from 'react';
import pics1 from '../pics/avatar.jpg';

const styles = {
    selfie: {
      maxWidth: "100%",
    width: "400px", 
    height: "auto",
    display: "block",
    margin: "0 auto",
    },
    h2: {
      textAlign: 'center',
    },
    space: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
  };
  

export default function AboutMe() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
        <img style={styles.selfie} src={pics1} alt="selfie"  />
      </div>
      <p>
        As a full-stack web developer, I made the exciting transition from the retail industry to pursue my passion for web development.
        With a free-spirited nature and a love for web design, I am driven by the opportunity to create engaging and user-friendly experiences on the web. 
        I am constantly reading, learning, and expanding my knowledge in order to stay up-to-date with the latest technologies and trends in the industry.
      </p>
      <p>
        Throughout my journey of becoming a full-stack web developer, I embrace the challenges and opportunities for growth.
        I am excited to apply my strong foundation in programming languages, my ability to adapt quickly in fast-paced environments, 
        and my dedication to delivering high-quality solutions. Whether working independently or as part of a team, I am committed to contributing to the success of the project and the company.
      </p>
      <p>
      </p>
      <p>
        I am excited about the possibilities that lie ahead as I continue my journey as a full-stack web developer.
        I am eager to combine my creativity, technical expertise, and passion for learning to create impactful web applications that make a positive difference. 
        I am open to new challenges, collaborations, and opportunities for growth in the ever-evolving field of web development.
      </p>
    </div>
  );
}
