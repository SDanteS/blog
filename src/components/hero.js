import React from "react";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <h3 className={styles.heroHeadline}>{data.title}</h3>
    <p className={styles.heroDetails}>{data.shortBio.shortBio}</p>
  </div>
);
