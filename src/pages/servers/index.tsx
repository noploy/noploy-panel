import { Box, Flex, useColorModeValue as mode } from "@chakra-ui/react";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { Main } from '../../components/Main/';

export default function Servers() {
  return (
    <Main p="6" color={mode("gray.200", "gray.700")}>
      test
    </Main>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
