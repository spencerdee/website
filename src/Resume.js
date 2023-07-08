import React from 'react';
import styles from './Resume.module.css';

const Resume = () => (
  <div id="Resume">
    <p className={styles.titleName}>Spencer Dee</p>
    <p className={styles.contactInfo}>(858) 414-1191 | dee.s@northeastern.edu | github.com/spencerdee</p>
    <p className={styles.contactInfo}>86 St Stephen St Boston MA 02115</p>
    <div>
        <p className={styles.sectionHeader}>Education</p>
        <hr></hr>
        <b className={styles.subTitle}>Northeastern University</b><span>, Boston, MA</span><span className={styles.rightDate}>September 2019 - July 2023</span>
        <br></br><span className={styles.subSubTitle}>Khoury College of Computer Sciences</span>
        <br></br><i className={styles.subSubTitle}>Candidate for Bachelor of Science in Computer Science with a minor in Economics</i>
        <br></br><b className={styles.subSubTitle}>GPA: 3.71/4.00</b><span>, Dean's List (3 terms)</span>
        <br></br><b className={styles.subSubTitle}>Relevant Courses:</b><span className={styles.subSubList}> Object-Oriented Design, Theory of Computation, Computer Systems,</span>
        <br></br><span className={styles.subSubTitle}>Artificial Intelligence, Machine Learning & Data Mining, Natural Language Processing, Money & Banking</span>
        <br></br><b className={styles.subSubTitle}>Activities:</b><span> Northeastern Unmanned Aerial Vehicles, Aerospace NU Project Karman</span>
        <br></br><b className={styles.subTitle}>The Shipley School</b><span>, Bryn Mawr, PA</span><span className={styles.rightDate}>September 2017 - June 2019</span>
        <br></br><b className={styles.subSubTitle}>GPA: 4.22/4.00</b><span>, Scholar Athlete Award</span>
        <br></br><b className={styles.subSubTitle}>Activities:</b><span> Engineering Club, Science Olympiad, Varsity Basketball, Animal Shelter Volunteer</span>
    </div>
    <div>
        <p className={styles.sectionHeader}>Technical Knowledge</p>
        <hr></hr>
        <b className={styles.subTitle}>Languages:</b><span> Java, C++, Racket, Python, C, JavaScript, Typescript</span>
        <br></br><b className={styles.subTitle}>Systems:</b><span> Windows, Ubuntu, Mac OS X</span>
        <br></br><b className={styles.subTitle}>Software and Tools:</b><span> Solidworks, IntelliJ, CLion, PyCharm, Eclipse, Matlab, SketchUp, DrRacket</span>
    </div>
    <div>
        <p className={styles.sectionHeader}>Work Experience</p>
        <hr></hr>
        <span className={styles.subTitle}>Kythera Space Solutions, Bethesda, MD - Software Engineer Co-op</span><span className={styles.rightDate}>May 2022 - December 2022</span>
        <ul className={styles.subList}>
            <li className={styles.subTitle}>Built back-end microservices to provide data to satellite management software using MongoDB</li>
            <li className={styles.subTitle}>Implemented and tested REST APIs for budget calculation services in Java and C++</li>
            <li className={styles.subTitle}>Prepared asset data for display on a 3D map in CesiumJS</li>
        </ul>
        <span className={styles.subTitle}>State Street Corporation, Boston, MA - Alpha Platform Intern</span><span className={styles.rightDate}>July 2021 - December 2021</span>
        <ul className={styles.subList}>
            <li className={styles.subTitle}>Collated, categorized, and standardized service agreements across Alpha clients</li>
            <li className={styles.subTitle}>Managed user access to Charles River Development testing environment</li>
        </ul>
    </div>
    <div>
        <p className={styles.sectionHeader}>Projects</p>
        <hr></hr>
        <span className={styles.subTitle}>Northeastern Unmanned Aerial Vehicles - C++, Python</span><span className={styles.rightDate}>January 2020 - June 2022</span>
        <ul className={styles.subList}>
            <li className={styles.subTitle}>Collaborated to design behavior trees to allow drones to operate autonomously</li>
            <li className={styles.subTitle}>Adapted code to allow drones to use cameras to identify and get the position of ArUco markers</li>
        </ul>
        <span className={styles.subTitle}>Reddit Automated Stock Analysis (RASA) - Python, scikit-learn</span><span className={styles.rightDate}>June 2021 - July 2021</span>
        <ul className={styles.subList}>
            <li className={styles.subTitle}>Developed a natural language processing program to analyze the sentiment of Reddit comments about the stock market</li>
            <li className={styles.subTitle}>Tested the effects of Reddit activity on stock performance using neural networks</li>
        </ul>
        <span className={styles.subTitle}>Quoridor Board Game AI - Python</span><span className={styles.rightDate}>December 2021 - January 2022</span>
        <ul className={styles.subList}>
            <li className={styles.subTitle}>Created the board game “Quoridor” that can be played against another player or AI</li>
            <li className={styles.subTitle}>Implemented multiple AI methods, including alpha-beta pruning and Monte Carlo tree search</li>
        </ul>
    </div>
    <div>
        <p className={styles.sectionHeader}>Interests</p>
        <hr></hr>
        <span className={styles.subTitle}>Basketball, Data Science, Engineering, Architecture, History, International Travel</span>
    </div>
    <br></br><br></br><br></br><br></br>
  </div>
);

export default Resume;