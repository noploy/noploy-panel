import { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Logo } from "./../components/Logo/index";
import { Link } from "./../components/Utils/Link";
import { Card } from "./../components/Utils/Card";
import { LoginForm } from "../components/Login/LoginForm";
import { DividerWithText } from "./../components/Utils/DividerWithText";
import { AuthContext } from "./../contexts/AuthContext";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Login() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Logo
          mx="auto"
          h="8"
          justifyContent="center"
          mb={{ base: "10", md: "20" }}
        />
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Login to your account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don't have an account?</Text>
          <Link href="#">Start the free trial</Link>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">or access with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
