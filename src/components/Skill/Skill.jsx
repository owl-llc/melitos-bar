import React from "react";

import styles from "./Skill.module.scss";

export function Skill(props) {
  const { xp, nameSkill, price } = props;
  return (
    <div className={styles["skills__data"]}>
      <span className={styles["skills__name"]}>{nameSkill}</span>
      <span className={styles["skills__number"]}>{`${price} kz`}</span>
      <span className={`${styles["skills__bar"]}`} style={{ width: `${xp}%` }}></span>
    </div>
  );
}
