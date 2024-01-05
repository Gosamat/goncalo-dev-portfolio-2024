import React from "react";
import TechItem from "../../Components/TechItem/TechItem";
import styles from "./Technologies.module.css"


export default function Technologies() {

 const techStack = [
  {id:1,
    techName:"Javascript",
  techImage: "src/assets/images/javascript-icon.svg"},
  {id:2,
    techName:"Mongo",
  techImage: "src/assets/images/mongo-icon.svg"},
  {id:3,
    techName:"Express",
  techImage: "src/assets/images/express-icon.png"},
  {id:4,
    techName:"React",
  techImage: "src/assets/images/react-icon.png"},
  {id:5,
    techName:"Node",
  techImage: "src/assets/images/node-icon.png"},
  {id:6,
    techName:"CSS",
  techImage: "src/assets/images/css-icon.png"},
  {id:7,
    techName:"HTML",
  techImage: "src/assets/images/html-icon.png"},
  {id:8,
    techName:"Bootstrap",
  techImage: "src/assets/images/bootstrap-icon.png"},
  {id:9,
    techName:"Tailwind CSS",
  techImage: "src/assets/images/tailwind-icon.png"},
  {id:11,
    techName:"PostgreSQL",
  techImage: "src/assets/images/postgresql-icon.png"},
 ];

 const tools = [
  {id:1,
    techName:"VScode",
  techImage: "src/assets/images/vscode-icon.png"},
  {id:2,
    techName:"Github",
  techImage: "src/assets/images/github-icon.png"},
  {id:3,
    techName:"Git",
  techImage: "src/assets/images/git-icon.png"},
  {id:4,
    techName:"Figma",
  techImage: "src/assets/images/figma-icon.png"},
  {id:5,
    techName:"Blender",
  techImage: "src/assets/images/blender-icon.png"},
  {id:6,
    techName:"Godot",
  techImage: "src/assets/images/godot-icon.svg"},
  {id:7,
    techName:"Photoshop",
  techImage: "src/assets/images/photoshop-icon.webp"}
 ];


  return (
<section className='flex flex-col justify-center relative'>
  <div className='flex flex-col justify-center w-2/3 my-5 py-5'>
      <h1 className="mb-3 text-start px-6 text-5xl font-bold" >Tech Stack</h1>
      <div className='flex flex-row flex-wrap justify-start'>
        {
          techStack.map((item)=>{
            return(
              <TechItem key={item.id} techName={item.techName} techImage={item.techImage} />
              )})
        }
      </div>
      </div>
      <div className='flex flex-col justify-center w-2/3 my-5'>
      <h1 className="mb-3 text-start px-6 text-5xl font-bold" >Tools</h1>
      <div className='flex flex-row flex-wrap justify-start'>
        {
          tools.map((item)=>{
            return(
              <TechItem key={item.id} {...item}/>
              )})
        }
      </div>
      </div>
      <div className={styles['divider-top']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles["shape-top"]}></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles["shape-top"]}></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles["shape-top"]}></path>
    </svg>
</div>
    </section>
  );
}

