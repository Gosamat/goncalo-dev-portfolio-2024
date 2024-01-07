// Projects.tsx
import React from 'react';
import  ProjectModal  from '../../Components/ProjectModal/ProjectModal';
import styles from './Projects.module.css';

interface Project {
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectImage: string;
  projectWebLink: string;
  projectGitLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      projectName: 'Found Foliage',
      projectType: 'Full Stack Project',
      projectDescription: 'Virtual Garden Application.',
      projectImage: '/images/found-foliage-website.png',
      projectWebLink: 'https://foundfoliage.netlify.app/',
      projectGitLink: 'https://github.com/Gosamat/found-foliage-project-client',
    },
    {
      projectName: 'Ghostly Tales',
      projectType: 'Full Stack Project',
      projectDescription: 'A Handlebars web app to share, comment and read ghost stories.',
      projectImage: '/images/ghostly-tales-image.jpeg',
      projectWebLink: 'https://ghostly-tales.onrender.com/',
      projectGitLink: 'https://github.com/mfilipa97/ghostly-tales-project',
    },
    {
      projectName: 'Lisbon Crosser',
      projectType: 'Javascript Game',
      projectDescription: 'A small game built to showcase Javascript OOP principles',
      projectImage: '/images/lisbon-crosser-image.jpeg',
      projectWebLink: 'https://gosamat.github.io/lisbon-crosser-js-game/',
      projectGitLink: 'https://github.com/Gosamat/lisbon-crosser-js-game',
    },
  ];

  return (
    <section className={`flex flex-col justify-center ${styles['projects-page']}`}>
      <div className='flex flex-col justify-center w-2/3 my-5'>
        <h1 className="mb-3 text-start px-6 text-5xl font-bold text-charcoal-black">Projects</h1>
        <div className='flex flex-row flex-wrap justify-center mb-5'>
          {projects.map((project) => (
            <ProjectModal key={project.projectName} {...project} />
          ))}
        </div>
      </div>
      <div className={styles['divider-bottom']}>
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

export default Projects;
