// TechItem.tsx
import React, { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import styles from './TechItem.module.css';

interface TechItemProps {
  techName: string;
  techImage: string;
}

const TechItem: React.FC<TechItemProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Popover backdrop="transparent" isOpen={isOpen} placement="top" offset={1}>
      <PopoverTrigger onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.icon}>
          <img src={props.techImage} alt={`${props.techName} icon`} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{props.techName}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TechItem;
