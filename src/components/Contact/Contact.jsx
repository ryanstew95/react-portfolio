import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const handleScrollToTop = () => {
    // Scroll the page to the top when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ryanstew17@gmail.com">ryanstew17@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ryan-stewart-98b3b3220/">linkedin.com/ryanstewart</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/ryanstew95">github.com/ryanstew95</a>
        </li>
      </ul>
         {/* "Back to Top" button */}
         <button className={styles.backToTopButton} onClick={handleScrollToTop}>
        Back to Top
      </button>
    </footer>
  );
};
