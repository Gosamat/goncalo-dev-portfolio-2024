import React from "react";
import {Card, Image, CardBody, Link} from "@nextui-org/react";

export function ProjectModal(props) {

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
    className="border-none bg-background/20 dark:bg-default-100/50 m-3 hover:scale-105 w-full"
    shadow="sm"
  >
    <CardBody>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
        <div className="col-span-6 md:col-span-4">
          <Image
            className="object-fill"
            width={270}
            shadow="md"
            isZoomed
            src={projectImage}
          />
        </div>

        <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0 mb-3">
              <h3 className="font-semibold text-foreground/90">{projectName}</h3>
              <h5 className="text-small text-foreground/80">{projectType}</h5>
            
            </div>
          </div>
          <div className="flex flex-col mb-3"> 
          <p className="text-small mt-2">{projectDescription}</p>
          </div>
            <div className="flex flex-col">
            <Link
          isExternal
          showAnchorIcon
          href={projectWebLink}
        >
          Visit the application.
        </Link>
        <Link
          isExternal
          showAnchorIcon
          href={projectGitLink}
        >
          Check the source code on GitHub.
        </Link>
            </div>
          </div>
        </div>
    </CardBody>
  </Card>
    );
}
