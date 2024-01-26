import React from "react";
import styles from "./Resume.module.css";
import { getImageUrl } from "../../utils";

export const Resume = () => {
return (
  <section className={styles.container} id="resume">
<h2 className={styles.title}>Resume</h2>
<div className={styles.box}>
<img
src={getImageUrl("history/resume.png")}
alt="my resume"
className={styles.resume}
/>
<div className={styles.ryan}>
<a href="https://flowcv.com/resume/uhkd2cnhma">Link to Resume Here</a>
</div>
</div>
</section>
)
};