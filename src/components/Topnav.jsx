import { Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,} from "@chakra-ui/react"
  import { FaCircleUser,FaBars } from "react-icons/fa6";
  


const Topnav = ({title,onOpen}) => {
  return (
  <Box px="4" bg="white">
    <HStack maxW="70rem"  h="16" justify="space-between" mx="auto" >
      <Icon as={FaBars} onClick={onOpen} display={{
        base:"block",
        lg:"none",
      }}/>
    
    <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

    <Menu>
<MenuButton>
  <Icon as={FaCircleUser} fontSize="24px"/>
</MenuButton>
<MenuList>
  <MenuItem>Logout</MenuItem>
  <MenuItem>Support</MenuItem>
  <MenuItem>View Profile</MenuItem>
  <MenuItem>Settings</MenuItem>
  <MenuItem>Manage your account</MenuItem>
</MenuList>
</Menu>
  
</HStack>
  </Box>
  );
};

export default Topnav;;
