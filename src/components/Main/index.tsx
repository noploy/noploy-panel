import { useContext, ReactNode } from "react";
import {
  Box,
  useColorMode,
  IconButton,
  Flex,
  useColorModeValue as mode,
  BoxProps
} from "@chakra-ui/react";
import { Sidebar } from '../Sidebar/index';


interface Props extends BoxProps{
  children: ReactNode
}

export  function Main({ children, ...rest }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === "light";

  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Sidebar />

        <Box bg={mode("gray.50", "gray.800")} flex="1" >
          <Box w="full" h="full" {...rest}>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
}
