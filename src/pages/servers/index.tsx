
import { Box, Flex, useColorModeValue as mode } from '@chakra-ui/react';
import { Sidebar } from './../../components/Sidebar/index';
import { withSSRAuth } from './../../Utils/withSSRAuth';

export default function Servers() {

  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Sidebar />

        <Box bg={mode('gray.50', 'gray.800')} flex="1" p="6">
          <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.700')}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});