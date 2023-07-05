import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { isNotEmptyObject } from "../../../../../npm-global/lib/node_modules/@chakra-ui/utils/dist";
import ProjectsSection from "./ProjectsSection"
import ContactMeSection from "./ContactMeSection";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headRef = useRef(null);
  useEffect(()=>{
    let prevScrollPos = window.scrollY;
    const handleScroll = () =>{
      const currentScrollPos =window.scrollY;
      const headerElement = headRef.current;
      if (!headerElement) {
        return;
      } 
      if (prevScrollPos> currentScrollPos ) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  },[])
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */
          socials.map((item, index) => {
            return (
              <a key={index} href={item.url} > 
              <FontAwesomeIcon icon={item.icon}   size="2x" />
              </a>
            )

            })
            
            }

          </nav>
          <nav>

          <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick}>My Projects </a>
              <a href="#contactme-section" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

// The implementation should be placed inside the first `nav` element. The data is already provided in the `socials` array at the top of the file.

// Use the `HStack` component to stack the links horizontally.
// Each social should be a `a` tag with a `href` attribute pointing to the corresponding social media page. The `a` tag should have as children a `FontAwesomeIcon` component, which is already imported for you.

// The `FontAwesomeIcon` component takes 2 props:
// - `icon`: The icon to be displayed. In this case, you should use the `icon` prop from the `social` object.
// - `size`: The size of the icon. You can use the `2x` value.

// You can check below an example of how to render it:

// `<FontAwesomeIcon icon="fab" size="2x" />`