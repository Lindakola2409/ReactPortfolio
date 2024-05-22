import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>
                I'm a devloper who has devloped multiple games from 2.5D to a 2D RPG.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in multiple websites using HTML, CSS, React, NodeJs, JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have designed multiple UI/UX for games building dialogue, title screens, pause screens, tutorials screens, etc.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
