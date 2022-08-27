import styles from "./CategorySectionBox.module.css"
import { Box, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Categories =[
    {
        url:'https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64',
        title:'Digital Marketing',
        text:'Get certified free of charge in our Fundamentals of digital marketing course, or explore other content to help get your business online'
    },
    {
        url:'https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64',
        title:'Career development',
        text:'Gain the skills you need to enhance your career or gain a new job.'
    },
    {
        url:'https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64',
        title:'Data',
        text:'Demand for workers with specialist data skills has more than tripled over the last five years.'
    },
]

const CategorySectionBoxes =()=>{
    return(
        <Box m={20}>
          <Text className={styles.hdbx}>Do things you never thought possible</Text>
          <Text margin='auto' width='750px' className={styles.txbx}>
            Discover courses in topics designed to help expand your career, business and horizons and to upgrade your skills for a new digital world.

          </Text>
          <Flex m={10} justify="space-around" gap={10}>
            {
                Categories.map((cat)=> <Box width="33%" p={10} className={styles.bxcat} key={cat.title}>
                    <Image src={cat.url} />        
                    <Text my={5} className={styles.tx1cat}>{cat.title}</Text>
                    <Text>{cat.text}</Text>

                    <Flex>
                        <Spacer/>
                        <ArrowForwardIcon boxSize='1.5em' color="#1a73e8"/>
                    </Flex>

                </Box>)
            }
          </Flex>
        </Box>
    )
}

export default CategorySectionBoxes;