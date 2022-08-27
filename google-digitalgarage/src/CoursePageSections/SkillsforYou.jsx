import styles from "./SkillsforYou.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Text} from "@chakra-ui/react";
import { useState } from "react";


const skills =[
    {
        id:0,
        title:'Business Strategy',
        des:'Learn how to define and track clear goals, segment audiences and analyse data to help improve your online marketing efforts.'
    },
    {
        id:1,
        title:'Analyatics and Data Insight',
        des:'In this introduction to Analytics, we will show you how to collect and analyse user data and turn it into actionable insights.'
    },
    {
        id:2,
        title:'Dispaly advertising',
        des:'Get noticed online by identifying the right audiences, ad networks and strategies for your display ads.'
    },
    {
        id:3,
        title:'E-commerce',
        des:'All the strategies and tools you need to build an online store, sell effectively online and optimise the user experience.'
    },
    {
        id:4,
        title:'SEM',
        des:'In this introduction to Google Ads, learn about the different research tools available, plus how to choose keywords and optimise campaigns for a better return.'
    },
    {
        id:5,
        title:'SEO',
        des:'Understand the differences between organic and paid search, learn how to develop the most effective SEO plan and optimise web pages so that users can find content easier.'
    },
    {
        id:6,
        title:'Social Media',
        des:'Find out how to identify the right social network sites, create great content users will love and measure your success.'
    }
   

]

const SkillsforYou=()=>{
    const [desc,setDesc] =useState(skills[0].des);

    const handleChangeDesc=(id)=>{
         setDesc(skills[id].des)
    }

    return(
        <Box m={20}>
            <Text m={10} className={styles.hdskl}>
            Skills you'll learn
            </Text>

            <Flex justify='space-evenly' >

                <ChevronLeftIcon className={styles.arrbtn} color='#9b9b9d ' boxSize='2em'/>

                {
                    skills.map((el)=>
                        <Box key={el.id}
                         onClick={()=>handleChangeDesc(el.id)}>
                            {el.title}
                        </Box>
                    )
                }

                <ChevronRightIcon className={styles.arrbtn} color='#9b9b9d ' boxSize='2em'/>
            </Flex>
            <Divider/>
            <Box>
                {desc}
            </Box>

        </Box>
    )
}


export default SkillsforYou;