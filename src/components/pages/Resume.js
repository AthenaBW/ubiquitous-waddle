import React from "react";
import AwResume from "../docs/res.pdf";

const styles = {
    h2: {
        textAlign: 'center',
    },
    link: {
        color: '#00FF00',
        textDecoration: 'none',
    },
    space: {
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    h3: {
        paddingTop: '0.75rem',
    },
};


// Custom components
const SectionHeading = ({ children }) => <h3>{children}</h3>;
const ExperienceItem = ({ title, duration, points }) => (
    <div>
        <h4>{title}</h4>
        <p>{duration}</p>
        <ul>
            {points.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
);

export default function Resume() {
    return (
        <div>
            <SectionHeading>Summary</SectionHeading>
            <p>


                Results-driven professional with a strong background in retail and a newfound passion for Full Stack Web Development.
                Committed to leveraging my exceptional customer service skills and combining them with my technical expertise to create dynamic
                and user-friendly web applications. Eager to contribute to a forward-thinking organization that values innovation and creativity.
                Proven ability to adapt quickly to new technologies and continuously learn and grow in a fast-paced environment.


            </p>

            <SectionHeading>Education</SectionHeading>
            <p>
                University of North Carolina at Charlotte | Charlotte, NC<br />
                Pursuing Full Stack Web Development opprotunities<br />
                Taking Japanese on the side, part time endeavor for 3+ years.
            </p><p>
                Completed a comprehensive Full Stack Web Development course that focused on both front-end and back-end technologies.
                The course covered front-end technologies such as HTML, CSS, JavaScript, jQuery, Bootstrap, React, and responsive design.
                On the back-end, the course covered database technologies like MySQL, Sequelize, MongoDB, Mongoose, and server-side frameworks including Express, Node.js, APIs, and GraphQL.
            </p>


            <SectionHeading>Experience</SectionHeading>
            <ExperienceItem
                title="Full-Time Sales Advisor"
                duration="H&M June 2020-November 2023"
                points={[
                    'Influence, lead, direct, and assist a team of 3 or more associates on both the sales floor and in the Back of House.',
                    'Operate cash registers, manage financial transactions, and open and close cash drawers.',
                    'Perform opening and closing procedures on both the sales floor and during shipment processing.',
                    'Execute proper and effective customer experience via company standards and values.',
                    'Set and maintain visual displays to heighten customer engagement with merchandise.',
                    'Unpack, sort, stock, and place merchandise per store guidelines.',
                    'Balance both sales profit and observance of all LP practices while performing as the HOD.',
                ]}
            />

            <ExperienceItem
                title="Assistant Manager"
                duration="Pacific Sunwear (Pacsun) - March 2019 to June 2020"
                points={[
                    'Hire, lead, and train a team of 5 or more employees while implementing company standards and procedures.',
                    'Create schedules and allocate hours for each pay period.',
                    'Process and ship online orders, maintaining daily quotas.',
                    'Execute overnight floor set and back-stock organization per visual guidelines.',
                    'Perform all register operations, execute morning/nightly bank deposits, and closing reports.',
                ]}
            />

            <ExperienceItem
                title="Sales Advisor"
                duration="H&M - December 2016 to November 2018"
                points={[
                    'Operate cash registers, manage financial transactions, and balance drawers.',
                    'Execute proper and effective customer experience via company standards and values.',
                    'Set and maintain visual displays to improve engagement with merchandise.',
                    'Unpack, sort, stock, and place merchandise per store guidelines.',
                    'Maintain sales while observing the sales floor for shrink and all LP security practices throughout the store.',
                ]}
            />

            <ExperienceItem
                title="Sales Associate"
                duration="Forever 21 - February 2015 to June 2016"
                points={[
                    'Greet and provide assistance to customers.',
                    'Advertise credit cards and loyalty programs with an above 25% success rate.',
                    'Process monetary transactions via POS, totaling several thousand dollars,',]}
            />

            <ExperienceItem
                title="Sales Associate"
                duration="Underground by Journeys - April 2014 to December 2014"
                points={[
                    'Meet and exceed sales quotas via commission-based selling.',
                    'Provide a fun, full-service shopping experience to customers.',
                    'Stay informed of current fashion trends in order to best determine client needs.',
                ]}
            />
            <a href={AwResume} download style={styles.link}>
                Download Resume
            </a>
        </div>
    );
}