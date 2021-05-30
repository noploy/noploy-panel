import { Box, useColorMode, IconButton } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi'
import Link from 'next/link'


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light';

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
    </Box>
  )
}
