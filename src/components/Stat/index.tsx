import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue as mode,
  // Link,
} from "@chakra-ui/react";
import Link from "next/link"

type Props = {
  label: string;
  value: string;
  link?: string;
};

export const Stat = ({ label, link, value }: Props) => {
  return (
    <Box
      px={{ base: 4, sm: 6 }}
      py="5"
      bg={mode("white", "gray.700")}
      shadow="base"
      rounded="lg"
    >
      <Text
        fontWeight="medium"
        isTruncated
        color={mode("gray.500", "gray.400")}
      >
        {label}
      </Text>
      <Text
        fontSize="3xl"
        fontWeight="medium"
        color={mode("gray.900", "white")}
      >
        {value}
      </Text>
      {!!link && (
        <Link href={link}>
          <Box
            cursor="pointer"
            mt="2"
            fontWeight="semibold"
            fontSize="small"
            color={mode("blue.500", "blue.200")}
            _hover={{}}
          >
            View {label}
          </Box>
        </Link>
      )}
    </Box>
  );
};
