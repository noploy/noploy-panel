import { Box, Circle, Flex, Stack, useColorModeValue as mode, useColorMode, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiServer,
  BiEnvelope,
  BiHome,
  BiUser,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiGroup,
  BiGlobe,
  BiWifi,
  BiSitemap,
  BiMoon,
  BiSun,
} from 'react-icons/bi'
import { AccountSwitcher } from './AccountSwitcher'
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'

export function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light';

  return (
    <Box w="64" bg="gray.900" color="white" fontSize="sm">
      <Flex h="full" direction="column" px="4" py="4">
        <AccountSwitcher />
        <Stack spacing="8" flex="1" overflow="auto" pt="8">
          <Stack spacing="1">
            <NavItem icon={<BiHome />} label="Dashboard" href="/" />
            {/* <NavItem icon={<BiCommentAdd />} label="Inbox" /> */}
          </Stack>
          <NavGroup label="Your services">
            <NavItem icon={<BiServer />} label="Servers" href="/servers" />
            <NavItem icon={<BiGlobe />} label="Applications" />
            <NavItem icon={<BiSitemap />} label="Projects" />
            {/* <NavItem icon={<BiRedo />} label="Transfer" /> */}
          </NavGroup>

          <NavGroup label="Profile">
            <NavItem icon={<BiUser />} label="Profile" href="/profile" />
            <NavItem icon={<BiGroup />} label="Team" />
            <NavItem icon={<BiEnvelope />} label="Invoices" />
            <NavItem icon={<BiPurchaseTagAlt />} label="Subsription" />
          </NavGroup>
        </Stack>
        <Box>
          <Stack spacing="1">
            <NavItem
              href="#"
              subtle
              icon={<BiSun />}
              label="Theme"
              endElement={
                <IconButton
                  size="sm"
                  bg="gray.700"
                  fontSize="18px"
                  onClick={toggleColorMode}
                  aria-label="Search database"
                  icon={lightTheme ? <BiMoon /> : <BiSun />}
                />
              }
            />
            <NavItem subtle icon={<BiCog />} label="Settings" />
            <NavItem
              subtle
              icon={<BiWifi />}
              label="Status"
              endElement={<Circle size="2" bg="green.400" />}
            />
            <NavItem
              subtle
              icon={<BiBuoy />}
              label="Help & Support"
            // endElement={<Circle size="2" bg="blue.400" />}
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}