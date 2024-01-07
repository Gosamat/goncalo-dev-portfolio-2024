import styles from "./About.module.css";

export default function About() {
  return (
<section className={`flex flex-col items-center p-5 relative bg-pastel-blue border-t-[10px] border-b-[10px] border-s border-charcoal-black`}>
<div className={styles.noise}>
  <div className={`flex flex-col items-center justify-center ${styles.about}`}>
 
  <h1 className="mb-3 text-3xl font-bold text-charcoal-black">About Me</h1>
  <div className={`flex flex-col items-center ${styles.text}`} >
    <p className="text-lg leading-7 m-4">
      A software developer with a background in linguistics who embarked
      on a tech career-change thanks to the developer bootcamp
      at Ironhack. My journey thus far has been a roller-coaster of
      excitement and I'm steadily increasing my skillset every day.
    </p>
    <p className="text-lg leading-7 ms-4">
      Thanks to my previous experiences in start-ups, I've acquired great problem-solving skills,
      which fit right at home when it comes to coding.🕵️‍♂️
    </p>
    <p className="text-lg leading-7 m-4">
      I'm also a lover of video games, primarily RPGs, and I've always been infatuated with the development side of gaming. Additionally,
      I'm an animal person, and I can't imagine life without a pet by my
      side. 🐾 
    </p>
    <p className="text-lg leading-7 mb-4">
      I'm always on the hunt for the next challenge that lets me deepen my
      passion for coding and further hone my skills. 🚀
    </p>
    </div>
  </div>
  </div>
  
</section>

  );
}

