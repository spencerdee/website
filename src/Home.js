import React from 'react';
import portrait from './portrait.jpeg'
import styles from './Home.module.css'

function Home() {

    return (
            <body>

                <p className={styles.topTitle}>Spencer Dee</p>
                <img className={styles.centerImage} src={portrait} alt="Spencer"/>
                <p className={styles.topTitle}>Homepage Links</p>
                <a className={styles.bottonLinks} href="https://github.com/spencerdee" target="_blank" rel="noopener noreferrer">Github</a>
                <a className={styles.bottonLinks} href="https://www.linkedin.com/in/spencerdee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className={styles.bottonLinks} href="https://colonist.io" target="_blank" rel="noopener noreferrer">Colonist.io</a>
                <a className={styles.bottonLinks} href="https://poeltl.dunk.town/" target="_blank" rel="noopener noreferrer">Poeltl</a>
            </body>

    );
}

export default Home;
