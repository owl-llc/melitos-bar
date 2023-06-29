import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { BiEnvelope, BiMedal } from "react-icons/bi";
import { FiServer } from "react-icons/fi";
import { MdMonitor, MdVerified } from "react-icons/md";
import { FaLinkedinIn, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { ImWordpress } from "react-icons/im";
import {
  BsMedium,
  BsWhatsapp,
  BsFillTelephoneFill,
  BsClockFill,
} from "react-icons/bs";

import { Education, ServiceCard, Skill, WorksCard } from "../../components";
import profile from "../../assets/images/logo.png";
// import oportunity from "../../assets/images/oportunity.png";
import hero from "../../assets/images/hero.jpg";

// import work1 from "../../assets/images/work1.jpeg";
// import work2 from "../../assets/images/work2.jpeg";
// import work3 from "../../assets/images/work3.jpeg";
// import work4 from "../../assets/images/work4.jpeg";

import menu from "../../data/menu";

export function Home() {
  const age = new Date().getFullYear() - 2000;

  return (
    <React.Fragment>
      <main className={styles["l-main"]}>
        <section className={styles["home"]} id="home">
          <div className={`${styles["home__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["home__data"]}>
              <div className={styles["home__img"]}>
                <img src={profile} alt="" />
              </div>

              <h1 className={styles["home__title"]}>
                Melitos
              </h1>
              <span className={styles["home__profession"]}>Menu Digital</span>
            </div>
          </div>
        </section>

        <section
          className={`${styles["skills"]} ${styles["section"]}`}
          id="skills"
        >
          <span className={styles["section-subtitle"]}>Nossa Comida</span>
          <h2 className={styles["section-title"]}>Entradas Deliciosas</h2>

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Do Mar</h3>
              {menu().entradas.doMar.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Da Terra</h3>
              {menu().entradas.daTerra.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>
          </div>
        </section>

        {/* <section className={`${styles["education"]} ${styles["section"]}`}>
          <span className={styles["section-subtitle"]}>Qualificação</span>
          <h2 className={styles["section-title"]}>Algumas Certificações</h2>

          <div
            className={`${styles["education__container"]} ${styles["bd-grid"]}`}
          >
            <Education
              year={2022}
              institute="Hacker Rank"
              course="Certificação CSS"
            />
            <Education
              year={2020}
              institute="Digital Innovation One"
              course="Desenvolvedor Web (BootCamp)"
            />
            <Education
              year={2019}
              institute="Politécnico de Benguela"
              course="Eletrônica Industrial e Automação"
            />
          </div>
        </section> */}

        <section
          className={`${styles["services"]} ${styles["section"]}`}
          id="services"
        >
          <span className={styles["section-subtitle"]}>
            Temos o que precisa
          </span>
          <h2 className={styles["section-title"]}>Nossos Serviços</h2>

          <div
            className={`${styles["services__container"]} ${styles["bd-grid"]}`}
          >
            <ServiceCard
              icon={<BsWhatsapp />}
              title="Encomendas Via Whatsapp"
              description="Você pode encomendar no Whatsapp e depois pegar."
            />

            <ServiceCard
              icon={<BsFillTelephoneFill />}
              title="Atendimento"
              description="Clique aqui e fale connosco diretamente"
            />

            <ServiceCard
              icon={<BsClockFill />}
              title="Reservas"
              description="Você pode reservar sua comida 30 min antes, ligando ou enviando uma sms."
            />
          </div>
        </section>

        <section className={`${styles["project"]} ${styles["section"]}`}>
          <div
            className={`${styles["project__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["project__data"]}>
              <h2
                className={`${styles["section-title"]} ${styles["project__title"]}`}
              >
                Aqui a comida é servida com amor
              </h2>
              <p className={styles["project__description"]}>
                Além das bebidas, temos boa comida. Aproveite e veja alguns
                pratos especiais da casa
              </p>
            </div>
          </div>
        </section>

        {/* <section
          className={`${styles["works"]} ${styles["section"]}`}
          id="works"
        >
          <span className={styles["section-subtitle"]}>Almoçe Aqui</span>
          <h2 className={styles["section-title"]}>Alguns Pratos</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>
            <WorksCard
              link="https://lipwane.ao/"
              title="Ecommerce"
              bgPath={work1}
            />

            <WorksCard
              link="https://nature-angola.vercel.app/"
              title="Landingpage"
              bgPath={work2}
            />

            <WorksCard
              link="https://miriabar.netlify.app/"
              title="Menu Digital"
              bgPath={work3}
            />

            <WorksCard
              link="https://jovemmulher.com"
              title="Blog"
              bgPath={work4}
            />
          </div>
        </section> */}

        <section
          className={`${styles["skills"]} ${styles["section"]}`}
          id="food"
        >
          <span className={styles["section-subtitle"]}>Almoçe Aqui</span>
          <h2 className={styles["section-title"]}>Para Comer</h2>

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Pratos do Mar</h3>
              {menu().pratos.peixe.doMar.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>
                Outros Pratos do Mar
              </h3>
              {menu().pratos.peixe.outros.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>
          </div>
        </section>


        {/* <section
          className={`${styles["works"]} ${styles["section"]}`}
          id="works"
        >
          <span className={styles["section-subtitle"]}>Almoçe Aqui</span>
          <h2 className={styles["section-title"]}>Alguns Pratos</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>
            <WorksCard
              link="https://lipwane.ao/"
              title="Ecommerce"
              bgPath={work1}
            />

            <WorksCard
              link="https://nature-angola.vercel.app/"
              title="Landingpage"
              bgPath={work2}
            />

            <WorksCard
              link="https://miriabar.netlify.app/"
              title="Menu Digital"
              bgPath={work3}
            />

            <WorksCard
              link="https://jovemmulher.com"
              title="Blog"
              bgPath={work4}
            />
          </div>
        </section> */}



        <section
          className={`${styles["skills"]} ${styles["section"]}`}
          id="food"
        >
          {/* <span className={styles["section-subtitle"]}>Carnes</span>
          <h2 className={styles["section-title"]}>Pratos de Carne</h2> */}

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Pratos da Terra</h3>
              {menu().pratos.carne.tipo1.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>
                Outros Pratos da Terra
              </h3>
              {menu().pratos.carne.tipo2.map((value) => {
                return (
                  <Skill nameSkill={value.name} xp={100} price={value.price} />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
