import React from "react";
import styles from "./TechItem.module.css";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useState } from "react";



export default function TechItem (props){
    const [isOpen, setIsOpen] = useState(false);

      const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

    return(
        <Popover isOpen={isOpen} placement="top" offset={1}>
            <PopoverTrigger onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className={styles.icon}>
            <img src={props.techImage}/>
        </div>
        </PopoverTrigger>
        <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{props.techName}</div>
        </div>
      </PopoverContent>
        </Popover>
    )
}