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
    techImage: "/images/javascript-icon.svg"},
    {id:2,
      techName:"Mongo",
    techImage: "/images/mongo-icon.svg"},
    {id:3,
      techName:"Express",
    techImage: "/images/express-icon.png"},
    {id:4,
      techName:"React",
    techImage: "/images/react-icon.png"},
    {id:5,
      techName:"Node",
    techImage: "/images/node-icon.png"},
    {id:6,
      techName:"CSS",
    techImage: "/images/css-icon.png"},
    {id:7,
      techName:"HTML",
    techImage: "/images/html-icon.png"},
    {id:8,
      techName:"Bootstrap",
    techImage: "/images/bootstrap-icon.png"},
    {id:9,
      techName:"Tailwind CSS",
    techImage: "/images/tailwind-icon.png"},
    {id:11,
      techName:"PostgreSQL",
    techImage: "/images/postgresql-icon.png"},
    {id:12,
      techName:"Python",
    techImage: "/images/python-icon.png"},
    {id:13,
      techName:"Typescript",
    techImage: "/images/typescript-icon.png"}
   ];

  const tools: Tech[] = [
    {id:1,
      techName:"VScode",
    techImage: "/images/vscode-icon.png"},
    {id:2,
      techName:"Github",
    techImage: "/images/github-icon.png"},
    {id:3,
      techName:"Git",
    techImage: "/images/git-icon.png"},
    {id:4,
      techName:"Figma",
    techImage: "/images/figma-icon.png"},
    {id:5,
      techName:"Blender",
    techImage: "/images/blender-icon.png"},
    {id:6,
      techName:"Godot",
    techImage: "/images/godot-icon.svg"},
    {id:7,
      techName:"Photoshop",
    techImage: "/images/photoshop-icon.webp"}
   ];


  return (
    <section className={` $flex flex-col justify-center relative`}>
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
