import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link as NextUILink } from "@nextui-org/react";
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import styles from "./NavBar.module.css"

export function NavBar() {

  const [navBarBordered, setNavBarBordered]=useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(()=>{
    const handleScroll = () =>{

  
    const currentPosition = window.scrollY;
    
    setScrollPosition(currentPosition);

    if(currentPosition>20){
      setNavbarColor("bg-noisy-blue");
      setNavBarBordered(true);
    }
    else{
      setNavbarColor("bg-transparent");
      setNavBarBordered(false);
    }
  }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <Navbar isBordered={navBarBordered} isBlurred={false} className={navbarColor}>
      <NavbarBrand />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextUILink color="foreground" className=" font-bold">
          <a href="#" onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}>
              Home
            </a>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className=" font-bold">
          <a onClick={() => scroll.scrollTo("about",{ duration: 500, smooth: true })}>

              About
            </a>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className=" font-bold">
            <ScrollLink to="technologies" smooth={true} duration={500}>
              Technologies
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className=" font-bold">
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" className=" font-bold">
            <ScrollLink to="contacts" smooth={true} duration={500}>
              Contacts
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* Additional content on the right side of the navbar if needed */}
      </NavbarContent>
    </Navbar>
  );
}
