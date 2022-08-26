import styles from "./Bottomone.module.css"
import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react"

const Bottomone=()=>{
    return(
        <Box>
            <Divider/>
            <Flex m='100px'>
            <Spacer/>
            <Box>
                <Text className={styles.tx}>Start today</Text>
                <Button borderRadius='1px' colorScheme='blue' size='lg' >Start free course</Button>
            </Box>
            <Spacer/>
            
            </Flex>
        <Divider/>
        </Box>
    )
}

export default Bottomone;