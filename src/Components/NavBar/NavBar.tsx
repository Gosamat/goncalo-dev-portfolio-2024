import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './NavBar.module.css';

export function NavBar() {
  const [navBarBordered, setNavBarBordered] = useState(false);
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const [mobileNavbarColor, setMobileNavbarColor] = useState('bg-beige');
  const [mobileNavbarToggleColor, setMobileNavbarToggleColor] = useState('text-charcoal-black');


  const [navTextColor, setNavTextColor] = useState('text-charcoal-black');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 20 ) {
        setNavbarColor('bg-charcoal-black');
        setNavTextColor('text-beige');
        setMobileNavbarColor('bg-charcoal-black');
        setMobileNavbarToggleColor('text-beige');
        setNavBarBordered(true);
      } else {
        setNavbarColor('bg-transparent');
        setNavTextColor('text-charcoal-black');
        setMobileNavbarColor('bg-beige');
        setMobileNavbarToggleColor('text-charcoal-black');
        setNavBarBordered(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);


  const menuItems = [
    "Home",
    "About",
    "Technologies",
    "Projects",
    "Contacts",
  ];

  return(
  <Navbar isBordered={navBarBordered} isBlurred={false} className={`${navbarColor} ${styles['nav-styles']}`} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand />
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`sm:hidden flex items-center ${mobileNavbarToggleColor}`}
      />
 
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {/* Desktop Navbar items */}
        <NavbarItem>
          <ScrollLink to="Home" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
            Home
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="About" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
            About
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="Technologies" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
            Technologies
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="Projects" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
            Projects
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink to="Contacts" smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`}>
            Contacts
          </ScrollLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{/* Additional content on the right side of the navbar if needed */}</NavbarContent>
      <NavbarMenu className={mobileNavbarColor}>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <ScrollLink to={item} smooth={true} duration={500} className={`font-bold cursor-pointer ${navTextColor}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {item}
          </ScrollLink>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
    </Navbar>
  );
}


