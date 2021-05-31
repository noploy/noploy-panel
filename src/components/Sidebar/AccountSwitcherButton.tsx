import { Box, Flex, FlexProps, HStack, Img, useMenuButton } from '@chakra-ui/react'
import { HiSelector } from 'react-icons/hi'

export function AccountSwitcherButton(props: FlexProps) {
  const buttonProps = useMenuButton(props)
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: 'gray.600' }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src="https://avatars.githubusercontent.com/u/36922627?v=4"
          alt="André Alvim"
        />
        <Box textAlign="start">
          <Box isTruncated fontWeight="semibold">
            André Alvim
        </Box>
          <Box fontSize="xs" color="gray.400">
            Zeero Company
        </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  )
}