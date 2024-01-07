// NavBar.tsx
import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link as NextUILink } from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import styles from './NavBar.module.css';

export function NavBar() {
  const [navBarBordered, setNavBarBordered] = useState(false);
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const [navTextColor, setNavTextColor] = useState('text-charcoal-black')

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 20) {
        setNavbarColor('bg-charcoal-black');
        setNavTextColor('text-white')
        setNavBarBordered(true);
      } else {
        setNavbarColor('bg-transparent');
        setNavTextColor('text-charcoal-black')
        setNavBarBordered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar isBordered={navBarBordered} isBlurred={false} className={navbarColor}>
      <NavbarBrand />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextUILink  className={`font-bold ${navTextColor}`}>
            <ScrollLink to="home" smooth={true} duration={500} className={'cursor-pointer'}>
              Home
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className={`font-bold ${navTextColor}`}>
            <ScrollLink to="about" smooth={true} duration={500} className={'cursor-pointer'}>
              About
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className={`font-bold ${navTextColor}`}>
            <ScrollLink to="technologies" smooth={true} duration={500} className={'cursor-pointer'}>
              Technologies
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className={`font-bold ${navTextColor}`}>
            <ScrollLink to="projects" smooth={true} duration={500} className={'cursor-pointer'}>
              Projects
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className={`font-bold ${navTextColor}`}>
            <ScrollLink to="contacts" smooth={true} duration={500} className={'cursor-pointer'}>
              Contacts
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{/* Additional content on the right side of the navbar if needed */}</NavbarContent>
    </Navbar>
  );
}

