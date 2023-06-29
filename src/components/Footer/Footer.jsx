import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium, BsPinMapFill, BsWhatsapp, BsFacebook } from "react-icons/bs";

import styles from "./Footer.module.scss";

export function Footer(props) {
  return (
    <footer className={`${styles["footer"]} ${styles["section"]}`}>
      <div className={`${styles["footer__container"]} ${styles["bd-grid"]}`}>
        <h1 className={`${styles["footer__title"]}`}>Melitos Bar</h1>
        <p className={`${styles["footer__description"]}`}>
          Está com fome? venha que nós resolvemos o seu problema!
        </p>

        <div className={`${styles["footer__social"]}`}>
         
          <a
            href="https://github.com/tchiinhemba"
            className={`${styles["footer__link"]}`}
            target="_blank"
          >
            <BsPinMapFill />
          </a>
          <a
            href="https://tchiinhemba.medium.com"
            className={`${styles["footer__link"]}`}
            target="_blank"
          >
            <BsWhatsapp />
          </a>
        </div>

        <p className={`${styles["footer__copy"]}`}>
          Todos os direitos reservados por <a href="https://expressers.ao" target="_blank">Expressers.ao</a> - {currentYear()}
        </p>
      </div>
    </footer>
  );
}

const currentYear = () => new Date().getFullYear();
