import React, { useEffect, useRef, useState } from "react";

import styles from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export function Header(props) {
  const [toggle, setToggle] = useState("");
  const navMenu = useRef(null);

  function show() {
    if (navMenu.current.classList.contains(styles["show"])) {
      setToggle("");
    } else {
      setToggle(styles["show"]);
    }
  }

  function toggler() {
    return toggle;
  }

  const wrapperRef = useRef(null);

  const navList = [
    {
      field: "Inicio",
      id: "#home",
    },
    // {
    //   field: "Sobre",
    //   id: "#about",
    // },
    {
      field: "Bebidas",
      id: "#skills",
    },
    {
      field: "Serviços",
      id: "#services",
    },
    {
      field: "Alomoços",
      id: "#food",
    },
    {
      field: "Contactos",
      id: "#contact",
    },
  ];

  return (
    <React.Fragment>
      <header className={styles["l-header"]}>
        <nav className={`${styles["nav"]} ${styles["bd-grid"]}`}>
          <div className={styles["nav__toggle"]} onClick={() => show()}>
            <FiMenu />
          </div>

          <div>
            <a href="#" className={styles["nav__logo"]}>
              Melitos Bar
            </a>
          </div>

          <div
            className={
              toggler()
                ? `${styles["nav__menu"]} ${toggler()}`
                : `${styles["nav__menu"]}`
            }
            ref={navMenu}
          >
            <div className={styles["nav__close"]} onClick={() => show()}>
              <GrClose />
            </div>

            <ul className={styles["nav__list"]}>
              {navList.map((value) => {
                return (
                  <li className={styles["nav__item"]}>
                    <a
                      href={value.id}
                      className={`${styles["nav__link"]}`}
                      onClick={() => show()}
                    >
                      {value.field}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
