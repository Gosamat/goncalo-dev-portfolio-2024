// NavBar.tsx
import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';


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
            <ScrollLink to="home" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
              Home
            </ScrollLink>
        </NavbarItem>
        <NavbarItem>
            <ScrollLink to="about" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
              About
            </ScrollLink>
        </NavbarItem>
        <NavbarItem>
            <ScrollLink to="technologies" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
              Technologies
            </ScrollLink>
        </NavbarItem>
        <NavbarItem>
            <ScrollLink to="projects" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
              Projects
            </ScrollLink>
        </NavbarItem>
        <NavbarItem>
            <ScrollLink to="contacts" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
              Contacts
            </ScrollLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{/* Additional content on the right side of the navbar if needed */}</NavbarContent>
    </Navbar>
  );
}

