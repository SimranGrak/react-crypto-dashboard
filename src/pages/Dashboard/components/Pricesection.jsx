import { Customcard } from "../../../chakra/Customcard"
import { Flex, HStack,Icon,Stack,Text,Image, Tabs, Tab,TabList,TabPanel,TabPanels } from "@chakra-ui/react"
import { FaCirclePlus } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { FiMinusCircle } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";


const Pricesection = () => {
   

  const timestamps=["9:30 AM","6:30 AM","8:30 AM","12:30 PM","2:30 PM"];



  return (
   <Customcard>
     <Flex justify="space-between" align="start">
     <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balances</Text>
        </HStack>
       <HStack 
       spacing={2}
        align={{
          base:"flex-start",
          sm:"center",
        }}
        flexDir={{
          base:"column",
          sm:"row",
        }}>
       <HStack>
        <Text textStyle="h2" fontWeight="medium">22.39401000</Text>{" "}

       <HStack fontWeight="medium" color="green.500">
        <Icon as={BsArrowUpRight}/>
       <Text fontSize= "sm"
        fontWeight="medium">22%</Text>
       </HStack>
       {" "}
        </HStack>
       
       </HStack>
      </Stack>

      <HStack>
        <Button leftIcon={<Icon as={FaCirclePlus}/>}>Buy</Button>
        <Button leftIcon={<Icon as={FiMinusCircle}/>}>Sell</Button>
      </HStack>
     </Flex>

     <Tabs variant='soft-rounded' >
  <Flex justify="end" >
  <TabList bg="black.5" p="3px">
  {
    ["1H","1D","1W","1M"].map((tab)=>(
      <Tab _selected={{ bg:"white"}} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
    ))
  }

  
  </TabList>
  </Flex>

  <TabPanels>
    <TabPanel>
    <Image w="100%" src="/graph.svg" mt="3rem"/>
     <HStack justify="space-between"> 
      {
         timestamps.map((timestamp)=>(
          <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}
            </Text>
         ))
      }
     </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
 
   </Customcard>
  );
};

export default Pricesection;
