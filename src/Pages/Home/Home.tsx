import React from "react";

import { Button, Image } from "@nextui-org/react";
import styles from "./Home.module.css";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.welcomeText}>
        <div>
          <h1>
            Hi there <span>&#128587;</span>
          </h1>
          <h1>
            I'm <span>Gonçalo</span>,
          </h1>
          <h3>
            a <span>Software Developer</span>
          </h3>
          <div>
            <Button color="primary" size="lg">
              <ScrollLink to="contacts" smooth={true} duration={500}>
                Get in touch with me!
              </ScrollLink>
            </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
