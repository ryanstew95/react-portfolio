import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    
    <section className={styles.container}>
        <img
        src={getImageUrl("hero/ryan-bg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hello there!!</h1>
        <h1 className={styles.ryan}>I'm Ryan</h1>
        <p className={styles.description}>
        A passionate and dedicated Full-Stack Web Development Boot Camp graduate, eager to apply a blend of technical proficiency and innovative design in a web developer role. Focused on developing functional, user-centric solutions, and keen to apply the knowledge gained in a professional setting and contribute to innovative web development projects.
        </p>
        <a href="mailto:ryanstew17@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
