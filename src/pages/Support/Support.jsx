import Dashboardlayout from "../../components/Dashboardlayout"
import Contactcard from "./components/Contactcard"
import Supportcard from "./components/Supportcard"
import { IoIosMail } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import Infocard from "../Dashboard/components/Infocard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <Dashboardlayout>
     <Stack spacing="5rem">
     <Supportcard icon={IoIosMail}
      leftComponent={<Contactcard/> }title="Contact Us" text="Have a question or just want to know more? Feel free to reach out to us."/>

<Supportcard icon={BiSolidMessageRounded}
      leftComponent={<Infocard 
        inverted={true}
        imgUrl="/grid_bg.svg"
        tagText="Contact"
        text="Learn more about our real estate, mortgage, and corporate account services"
        />
         }
         title="Live Chat" 
         text="Don't have time to wait for the answer? Chat with us now."/>
     </Stack>
    </Dashboardlayout>
  );
};

export default Support
