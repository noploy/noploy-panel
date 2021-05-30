import { useContext } from 'react';
import { Box, useColorMode, IconButton } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi'
import Link from 'next/link'
import { AuthContext } from './../contexts/AuthContext';
import { withSSRAuth } from './../Utils/withSSRAuth';


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light';
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <Box>
      <IconButton
        size="sm"
        fontSize="18px"
        onClick={toggleColorMode}
        aria-label="Search database"
        icon={lightTheme ? <BiMoon /> : <BiSun />}
      />
      <Link href="/login">login</Link>
      {/* Usuário: {data.profile.email} */}
    </Box>
  )
}


export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});