import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="myName" url="https://i.pravatar.cc/150?img=8" >
      <Heading>
        <VStack>
          <p> {greeting}</p>
          <p> {bio1}</p>
          <p> {bio2} </p>

        </VStack>
      </Heading> 
  </Avatar>
  </FullScreenSection>
);

export default LandingSection;
