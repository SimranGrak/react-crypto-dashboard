import { Container, Flex, useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";


const Dashboardlayout = ({title,children}) =>{
  const {isOpen,onClose,onOpen}=useDisclosure();
   
  return (
    <Flex>
    
    <Box
    display={{
    base:"none",
    lg:"flex",
  }}
    >
      <Sidenav/> 
    </Box>
    <Sidedrawer isOpen={isOpen} onClose={onClose}/>
    <Box flexGrow={1}>
    <Topnav title={title}  onOpen={onOpen}/>
    <Container overflowX="hidden" overflowY="auto" h="calc(100vh-88px)"mt="6"maxW="70rem">
    {children}
    </Container>
    </Box>
    
  </Flex>
  );
};

export default Dashboardlayout
