import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack background="#FEC89A" borderRadius="10px">
      <VStack display="flex" alignItems="flex-start">
        <Image src={imageSrc} alt="image" borderRadius="10px" />
        <Heading color="black" fontSize="l" padding="0px 0px 0px 10px" >{title}</Heading>
        <Text color="blackAlpha.700" padding="0px 0px 0px 10px">

        {description}<br/> <Text fontWeight="bold" color="blue" paddingTop="2px">See More... 
        <FontAwesomeIcon icon={faArrowRight} size='1x' /></Text>
        </Text>
      </VStack>
    </HStack>
  );
};

export default Card;

