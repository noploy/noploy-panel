import { useContext } from 'react'
import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { AccountSwitcherButton } from './AccountSwitcherButton'
import { AuthContext } from './../../contexts/AuthContext';

export function AccountSwitcher() {
  const { signOut } = useContext(AuthContext);



  return (
    <Menu>
      <AccountSwitcherButton />
      <MenuList shadow="lg" py="4" color={useColorModeValue('gray.600', 'gray.200')} px="3">
        <Text fontWeight="medium" mb="2">
          Change Team
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            Zeero Company
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            Noploy Inc
          </MenuItemOption>
        </MenuOptionGroup>

        {/* <MenuDivider /> 
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md">Add an account</MenuItem> */}
        <MenuDivider />
        <MenuItem rounded="md" onClick={signOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}