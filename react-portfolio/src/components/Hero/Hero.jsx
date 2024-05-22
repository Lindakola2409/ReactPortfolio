import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";


export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Linda Tam</h1>
                <p className={styles.description}>
                Hey there, I'm Linda Tam, and I'm currently a 3rd-year (junior) studying Computer Science Games at the University of Southern California.
                </p>
                <a href="mailto:lindakola2409@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageURL("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};