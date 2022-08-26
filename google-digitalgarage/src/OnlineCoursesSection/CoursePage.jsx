import { ArrowForwardIcon, HamburgerIcon, TimeIcon } from "@chakra-ui/icons";
import { Divider, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./CoursePage.module.css";

const CoursePage=({image,title,creater,module,hour,id})=>{
    const navigate = useNavigate()
    const handleMove =(id)=>{
        navigate(`/onlinecourses/${id}`)
    }
    return(
        <Stack onClick={()=>handleMove(id)} p={10} bg='white' className={styles.crsstk} >
            <Image src={image}/>
            <Divider/>
            <Text className={styles.txhd}>{title}</Text>
            <Text className={styles.txcr}>{`created by ${creater}`}</Text>
            <Flex gap={2} className={styles.txmh}>
                <Flex gap={.5} align='center'>
                <HamburgerIcon color='#fac03f'/>
                    Modules:{module}
                    </Flex>
                <Flex gap={.5} align='center'>
                    <TimeIcon color='#fac03f'/>
                    Hours:{hour}
                    </Flex>
            </Flex>
            <Flex>
                <Spacer/>
                <ArrowForwardIcon boxSize='1.5em' color='#1a73e8 ' />
            </Flex>
        </Stack>
    )
}

export default CoursePage;