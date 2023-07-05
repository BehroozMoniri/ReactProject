import React, {useEffect} from "react";
import { useFormik } from "formik";

import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "Name",
      email:"Email",
      type: "hireMe",
      comment: "Your Comment"
    },
    onSubmit: (values) => {
      values.preventDefault();
       submit("https://example.com/contactme", values);
    },
    
    validationSchema: Yup.object({
      firstName: yup.string().required("Required")
        .min(1, "Name must be more than 1 characters long")
        .max(50, "First Name must be less than 50 characters long"),
      
      email: yup.string()
        .email("Invalid email address")
        .required("Required"),
      
      type: yup.string().optional(),

      comment: yup.string().required("Required")
      .min(25, "Must be at least 25 characters")
    }),
  });
  useEffect(() => {
    if(response) {
      onOpen(response.type, response.message);
      if (response.type==="success") {
        formik.resetForm();
      }
    }
  }, [response]);
 
  return (
     
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
            <form onSubmit={ 
              formik.handleSubmit
            } >
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps('firstName')}
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps.type} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps('comment')}
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button   type="submit" colorScheme="purple" width="full">
              {isLoading ? 'Submitting' : 'Submit'}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      </FullScreenSection>
      
  );
};

export default LandingSection;
