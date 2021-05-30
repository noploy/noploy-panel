import { Flex, Icon, Text, useToken, useColorModeValue, HTMLChakraProps, FlexProps } from '@chakra-ui/react';
import { BiRocket } from 'react-icons/bi'

export function Logo(props: FlexProps) {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <Flex {...props} alignItems="center">
      <Icon as={BiRocket} fontSize={35} color={useColorModeValue('blue.500', 'blue.300')} />
      <Text fontSize={30} fontWeight="bold" color={useColorModeValue(black, white)} ml="2">Noploy</Text>
    </Flex>
  )
}