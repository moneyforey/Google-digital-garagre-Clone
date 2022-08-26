import styles from "./Bottomone.module.css"
import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react"

const WhoisitforyouSection=()=>{
    return(
        <Box>
            <Divider mb='60px'/>
            <Text className={styles.txwho} >Who's it for?</Text>
            <Flex>
                <Spacer/>
                
                <Box width='800px' px='170px'>
                    <Text className={styles.txdes} >
                    From entrepreneurs to students, this is a great way to discover what it takes to turn an idea into reality, so you can build your business online and tell the world what you have to offer.
                    </Text>
                    <Button borderRadius="1px" size='lg' colorScheme='blue'>Start free course</Button>
                </Box>
            </Flex>
            <Divider mt='60px'/>
        </Box>
    )
}

export default WhoisitforyouSection;