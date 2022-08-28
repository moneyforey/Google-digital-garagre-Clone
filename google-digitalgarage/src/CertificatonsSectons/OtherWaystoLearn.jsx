import styles from"./OtherWaystoLearn.module.css"
import { Box, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react"

const OtherWaystoLearn =()=>{
    return(
        <Box>
            <Divider mb={20}/>
            <Text className={styles.hd1}>Other ways to learn</Text>
            <Flex mx={20} px={10} gap={10} m={20} className={styles.bxfx} align='center'>
                <Image src="https://lh3.googleusercontent.com/sGXULxVILX3ubQTqLXS5z0YlZY5wTlKkpkjQpS-aHIXjZXaawuleIq3QP3SHDyDIbvthfBdTfJ8chzZf0u6IQEYd0E-_dUswETir4LeFjywux_uNxEM=w600-rw"/>
                <Stack>
                   <Text className={styles.hd2}>Looking for more Advance Training?</Text>
                   <Text pr={20} width='700px' className={styles.tx1}>
                    Google Career Certificate offer more in depth and hands on training about digital marketing and E-commerce.
                    </Text>
                   <Text className={styles.tx2}>Learn more</Text>
                </Stack>
            </Flex>
            <Divider/>
        </Box>
    )
}


export default OtherWaystoLearn;