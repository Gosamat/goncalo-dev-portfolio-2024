import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link as NextUILink } from "@nextui-org/react";
import { Link as ScrollLink } from 'react-scroll';

export function NavBar() {
  return (
    <Navbar isBordered isBlurred >
      <NavbarBrand />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextUILink>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink>
            <ScrollLink to="technologies" smooth={true} duration={500}>
              Technologies
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink>
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
