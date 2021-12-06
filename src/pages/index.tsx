import { useContext } from "react";
import {
  Box,
  SimpleGrid,
  Flex,Heading,
} from "@chakra-ui/react";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Main } from "../components/Main";
import { Stat } from '../components/Stat';

export default function Home() {
  return (
    <Main p="6">
      <Box w="100%" maxW="7xl" mx="auto">
        <Flex mb="4" align="center" w="100%" justify="space-beetwen">
          <Heading fontSize="3xl" as="h1">
            Dashboard
          </Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing="6">
          <Stat label="Servers" value="3" link="/servers" />
          <Stat label="Projects" value="1" link="/projects" />
          <Stat label="Applications" value="1" link="/applications" />
          <Stat label="SSH Keys" value="3" link="/" />
        </SimpleGrid>
      </Box>
    </Main>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
