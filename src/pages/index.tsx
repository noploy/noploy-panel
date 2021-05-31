import { useContext } from 'react';
import { Box, useColorMode, IconButton, Flex, useColorModeValue as mode } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi'
import Link from 'next/link'
import { AuthContext } from './../contexts/AuthContext';
import { withSSRAuth } from './../Utils/withSSRAuth';
import { Sidebar } from './../components/Sidebar/index';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light';
  const { } = useContext(AuthContext);

  return (
    // <Box>
    //   <IconButton
    //     size="sm"
    //     fontSize="18px"
    //     onClick={toggleColorMode}
    //     aria-label="Search database"
    //     icon={lightTheme ? <BiMoon /> : <BiSun />}
    //   />
    //   <Link href="/login">login</Link>
    // </Box>

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