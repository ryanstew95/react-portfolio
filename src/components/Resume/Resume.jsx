import React from "react";
import styles from "./Resume.module.css";
import { getImageUrl } from "../../utils";

export const Resume = () => {
return (
  <section>
<h2 className={styles.title}>Resume</h2>
<img
src={getImageUrl("history/resume.png")}
alt="my resume"
className={styles.resume}
/>
</section>
)
};