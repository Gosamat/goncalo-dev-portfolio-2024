import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
<section className={`flex flex-col items-center p-5 relative bg-noisy-blue`}>
  <div className={`flex flex-col items-center justify-center ${styles.about}`}>
  <h1 className="mb-3 text-3xl font-bold text-noisy-blue">About Me</h1>
  <div className={`flex flex-col items-center ${styles.text}`} >
    <p className="text-lg leading-7 m-4">
      A software developer with a background in linguistics who embarked
      on a tech career-change thanks to the developer bootcamp
      at Ironhack. My journey thus far has been a roller-coaster of
      excitement and I'm steadily increasing my skillset every day.
    </p>
    <p className="text-lg leading-7 ms-4">
      Thanks to my previous experiences in start-ups, I've acquired exceptional problem-solving skills,
      which fit right at home when it comes to coding.🕵️‍♂️
    </p>
    <p className="text-lg leading-7 m-4">
      I'm also a lover of video games, primarily RPGs, and I've always been infatuated with the development side of gaming. Additionally,
      I'm an animal person, and I can't imagine life without a pet by my
      side. 🐾 
    </p>
    <p className="text-lg leading-7 mb-4">
      Currently on the hunt for the next challenge that lets me deepen my
      passion for coding and further hone my skills. 🚀
    </p>
    </div>
  </div>
  <div className={styles['divider-top']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles["shape-top"]}></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles["shape-top"]}></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles["shape-top"]}></path>
    </svg>
</div>
<div className={styles['divider-bottom']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles["shape-bottom"]}></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles["shape-bottom"]}></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles["shape-bottom"]}></path>
    </svg>
</div>
</section>

  );
}

