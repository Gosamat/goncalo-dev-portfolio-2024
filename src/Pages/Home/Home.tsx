import React from "react";
import { Button } from "@nextui-org/react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Home.module.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className={styles.home}>
      <div className={styles.welcomeText}>
        <div>
          <h1 className=" text-8xl mb-5">
            Hi there <span>&#128587;</span>
          </h1>
          <h3 className=" text-7xl">
            I'm <span>Gonçalo</span>,
          </h3>
          <h3 className=" text-7xl mb-5">
            a <span>Software Developer</span>
          </h3>
        
          <div className="flex">
            <Button size="lg" className={`bg-charcoal-black ${styles["touch-button"]}`}>
              <ScrollLink to="contacts" smooth={true} duration={500}>
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
