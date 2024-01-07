// Technologies.tsx
import React from 'react';
import TechItem from '../../Components/TechItem/TechItem';
import styles from './Technologies.module.css';

interface Tech {
  id: number;
  techName: string;
  techImage: string;
}

const Technologies: React.FC = () => {
  const techStack: Tech[] = [
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
    {id:12,
      techName:"Python",
    techImage: "src/assets/images/python-icon.png"},
    {id:13,
      techName:"Typescript",
    techImage: "src/assets/images/typescript-icon.png"}
   ];

  const tools: Tech[] = [
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
        <h1 className="mb-3 text-start px-6 text-5xl font-bold text-charcoal-black">Tech Stack</h1>
        <div className='flex flex-row flex-wrap justify-start'>
          {techStack.map((item) => (
            <TechItem key={item.id} techName={item.techName} techImage={item.techImage} />
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center w-2/3 my-5'>
        <h1 className="mb-3 text-start px-6 text-5xl font-bold text-charcoal-black">Tools</h1>
        <div className='flex flex-row flex-wrap justify-start'>
          {tools.map((item) => (
            <TechItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={styles['divider-top']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Your SVG paths here */}
        </svg>
      </div>
    </section>
  );
};

export default Technologies;
