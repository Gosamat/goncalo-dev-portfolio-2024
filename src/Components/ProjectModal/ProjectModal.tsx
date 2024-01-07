// ProjectModal.tsx
import React from 'react';
import { Card, Image, CardBody, Link } from '@nextui-org/react';
import styles from './ProjectModal.module.css'

interface ProjectModalProps {
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectImage: string;
  projectGitLink: string;
  projectWebLink: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const {
    projectName,
    projectType,
    projectDescription,
    projectImage,
    projectGitLink,
    projectWebLink,
  } = props;

  return (
    <Card
      className={ `${styles.projects} border-solid border-2 border-charcoal-black bg-beige m-4 hover:scale-105 w-full `}
      shadow="none"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-6 md:col-span-4">
            <Image className="object-fill" width={270} isZoomed src={projectImage} />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0 mb-3">
                <h3 className="font-semibold">{projectName}</h3>
                <h5 className="text-small">{projectType}</h5>
              </div>
            </div>
            <div className="flex flex-col mb-3">
              <p className="text-small mt-2">{projectDescription}</p>
            </div>
            <div className="flex flex-col">
              <Link isExternal showAnchorIcon href={projectWebLink}>
                Visit the application.
              </Link>
              <Link isExternal showAnchorIcon href={projectGitLink}>
                Check the source code on GitHub.
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectModal;
