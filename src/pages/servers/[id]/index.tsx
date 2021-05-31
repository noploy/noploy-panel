import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Circle,
  Tabs,
  Icon,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import {
  BiCalendar,
  BiGlobe,
  BiKey,
  BiMessageAltDetail,
  BiCog,
  BiLayer,
  BiStation,
  BiVector,
  BiWifi,
} from 'react-icons/bi'
import { AiOutlineReload } from 'react-icons/ai'
import { Sidebar } from './../../../components/Sidebar/index';
import { withSSRAuth } from './../../../Utils/withSSRAuth';


export default function Server() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Sidebar />

        <Box bg={mode('gray.50', 'gray.800')} flex="1">
          <Tabs isFitted>
            <Flex direction="column" align="stretch" minH="100vh">
              <Box bg={mode('gray.50', 'gray.800')} px="8" pt="8">
                <Box maxW="7xl" mx="auto">
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="flex-start"
                    mb="10"
                  >
                    <HStack mb={{ base: '4', md: '0' }} alignItems="center">
                      <Heading size="lg">Server Test</Heading>
                      <Text mt="2" ml="1.5" color={mode('gray.500', 'gray.300')} fontSize="sm">
                        IP: 51.345.345.2 | ID: {id}
                      </Text>
                    </HStack>

                    <HStack spacing={{ base: '2', md: '4' }} alignItems="center" justifyContent="center">
                      <Button
                        bg={mode('white', 'inherit')}
                        variant="outline"
                        fontSize="sm"
                      >
                        <Flex alignItems="center">
                          <Circle size="3" bg="red.300" mr="2" />
                          <Text>Offline</Text>
                        </Flex>
                      </Button>


                      <Button colorScheme="blue" isLoading={false} leftIcon={<AiOutlineReload />} fontSize="sm">
                        Restart
                      </Button>
                    </HStack>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <TabList border="0" position="relative" zIndex={1} w={{ base: '100%', md: 'auto' }}>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiGlobe} />Applications</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiCalendar} />Cronjobs</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiWifi} />Network</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiKey} />SSH</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiLayer} />Deamons</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiVector} />Monitoring</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiStation} />Status</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiMessageAltDetail} />Logs</Tab>
                      <Tab fontWeight="semibold"><Icon mr="2" as={BiCog} />Settings</Tab>
                    </TabList>
                  </Flex>
                </Box>
              </Box>

              <Box pos="relative" zIndex={0}>
                <Divider borderBottomWidth="2px" opacity={1} borderColor={mode('gray.100', 'gray.700')} />
              </Box>

              <Box px="8" flex="1">
                <Box maxW="7xl" mx="auto">
                  <TabPanels mt="5" h="full">
                    <TabPanel>Manage</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                    <TabPanel>Analyze</TabPanel>
                  </TabPanels>
                </Box>
              </Box>
            </Flex>
          </Tabs>
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