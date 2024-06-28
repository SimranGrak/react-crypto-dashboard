import { GridItem ,Grid} from "@chakra-ui/react"
import Dashboardlayout from "../../components/Dashboardlayout"
import Portfoliosection from "./components/Portfoliosection"
import Pricesection from "./components/Pricesection"
import Transactions from "./components/Transactions"
import Infocard from "./components/Infocard"



const Dashboard = () => {
  return (
   <Dashboardlayout title="Dashboard">
    <Grid
    gridTemplateColumns={{
      base:"repeat(1,1fr)",
      xl:"repeat(2,1fr)",
    }}
    gap="6"
    >
      <GridItem
      colSpan={{
        base:1,
        xl:2,
      }}
      >
      <Portfoliosection/>
      </GridItem>

      <GridItem
      colSpan={1}
      >
      <Pricesection/>
      </GridItem>

      <GridItem
      colSpan={1}
      >
      <Transactions/>
      </GridItem>

      <GridItem colSpan={1}>
      <Infocard 
      imgUrl="/dot_bg.svg"
       text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
        tagText="Loan"
        inverted={false}
       />
      </GridItem>

      <GridItem colSpan={1}>
      <Infocard 
      inverted={true}
      imgUrl="/grid_bg.svg"
      tagText="Contact"
      text="Learn more about our real estate, mortgage, and corporate account services"
     
     
      />
      </GridItem>
    </Grid>
   
   
   </Dashboardlayout>
  )
}

export default Dashboard
