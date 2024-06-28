import { HStack, Icon, Stack } from '@chakra-ui/react';
import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Text } from '@chakra-ui/react';
import { Tag } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FaArrowDownLong ,FaArrowUpLong} from "react-icons/fa6";

const Portfoliosection = () => {
  return (
    <HStack 
    justify="space-between"
    bg="white" borderRadius="xl" p="6" 
    align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"column",
      xl:"row",
    }}

    spacing={{
      base:4,
      xl:0,
    }}
    >
     <HStack spacing={{
      base:0,
      xl:16,
     }}
     align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"column",
      xl:"row",
    }}
    >
     <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon as={IoMdInformationCircleOutline}/>
        </HStack>
       <Text textStyle="h2" fontWeight="mediume">Rs. 112,312.24</Text>
      </Stack>


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
        <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag colorScheme='grey'>BTC</Tag>
        </HStack>
        <HStack>
        <Text textStyle="h2" fontWeight="medium">Rs. 1,300.00</Text><Tag colorScheme='grey'>INR</Tag>
        </HStack>
       </HStack>
      </Stack>
     </HStack>


      <HStack>
        <Button leftIcon={<Icon as={FaArrowDownLong}/>}>Deposit</Button>
        <Button leftIcon={<Icon as={FaArrowUpLong}/>}>WithDraw</Button>
      </HStack>

    </HStack>
  );
};

export default Portfoliosection;
