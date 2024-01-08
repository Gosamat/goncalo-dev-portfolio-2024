import React from "react";
import { Button } from "@nextui-org/react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Home.module.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className={styles.home}>
      <div className={styles.welcomeText}>
        <div className={styles['text-container']}>
          <h1 className={styles["top-text"]}>
            Hi there <span className={styles.emoji}>&#128587;</span>
          </h1>
          <h3 className={styles["lower-text"]}>
            I'm <span>Gonçalo</span>,
          </h3>
          <h3 className={styles["lower-text"]}>
            a <span>Software Developer</span>
          </h3>
          <div className="flex mb-5">
            <Button size="lg" className={`bg-charcoal-black ${styles["touch-button"]}`}>
              <ScrollLink to="Contacts" smooth={true} duration={500}>
                Get in touch!
              </ScrollLink>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
