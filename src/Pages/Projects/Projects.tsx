import React from 'react';
import {ProjectModal} from "../../Components/ProjectModal/ProjectModal"

export default function Projects(){

  const projects = [
  {
    projectName: "Found Foliage",
    projectType: "Full Stack Project",
    projectDescription: "Virtual Garden Application.",
    projectImage: "src/assets/images/found-foliage-website.png",
    projectWebLink: "https://foundfoliage.netlify.app/",
    projectGitLink: "https://github.com/Gosamat/found-foliage-project-client"
  },
  {
    projectName: "Ghostly Tales",
    projectType: "Full Stack Project",
    projectDescription: "A Handlebars web app to share, comment and read ghost stories.",
    projectImage: "src/assets/images/ghostly-tales-image.jpeg",
    projectWebLink: "https://ghostly-tales.onrender.com/",
    projectGitLink: "https://github.com/mfilipa97/ghostly-tales-project"
  },
  {
    projectName: "Lisbon Crosser",
    projectType: "Javascript Game",
    projectDescription: "A small game built to showcase Javascript OOP principles",
    projectImage: "src/assets/images/lisbon-crosser-image.jpeg",
    projectWebLink: "https://gosamat.github.io/lisbon-crosser-js-game/",
    projectGitLink: "https://github.com/Gosamat/lisbon-crosser-js-game"
  }]

  return (
<section className='flex flex-col justify-center'>
  <div className='flex flex-col justify-center w-2/3 my-5'>
      <h1 className="mb-3 text-start px-6 text-5xl font-bold" >Projects</h1>
      <div className='flex flex-row flex-wrap justify-center'>
        {
          projects.map((project)=>{
            return(
              <ProjectModal key={project.projectName} {...project} />
              )})
        }
      </div>
      </div>
    </section>
  );
}
