import { Button, Card, Flex, Icon ,Tag,HStack, InputGroup, InputLeftElement, Input} from "@chakra-ui/react"
import Dashboardlayout from "../../components/Dashboardlayout";
import { FiDownload } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Transactiontable from "./components/Transactiontable";
import { IoIosSearch } from "react-icons/io";

const TransactionPage = () => {

  const tabs=[{
    name:"All",
    count:349,
  },
  {
    name:"Deposit",
    count:114,
  },
  {
    name:"Withdraw",
    count:55,
  },
  {
    name:"Trade",
    count:50,
  },
];


  return (
  <Dashboardlayout title="Transactions">
    <Flex justify="end" mt="6" mb="3">
      <Button leftIcon={<Icon as={FiDownload}/>}>Export CSV</Button>
    </Flex>
    <Card  borderRadius="1rem">
    <Tabs>
  <TabList 
    pt="4"
    display="flex"
    w="full"
    justifyContent="space-between"
   >
    <HStack>
   {
    tabs.map((tab)=>(
      <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
    ))
   }
   </HStack>

   <InputGroup maxW="200px"  pr="6">
    <InputLeftElement pointerEvents='none'>
      <Icon as={IoIosSearch}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' />
  </InputGroup>



   
  </TabList>

  <TabPanels>
    <TabPanel>
     <Transactiontable/>
    </TabPanel>
    <TabPanel>
    <Transactiontable/>
    </TabPanel>
    <TabPanel>
    <Transactiontable/>
    </TabPanel>
    <TabPanel>
    <Transactiontable/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
  </Dashboardlayout>
  );
};

export default TransactionPage;
