import { Box, Flex,Button, Text, Image } from "@chakra-ui/react";
import styles from "./BottomSection.module.css";

const BottomSection =()=>{
    return(
        <Flex bg='#f8f9fa ' p="50px" gap={20}>
            <Box>
                <Image src="https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw" />
            </Box>
           
            <Box>
                <Text className={styles.wrtnt}>
                Since 2015, we've trained over 700,000 people, to help them find a job, grow their career or business. Across Britain, local businesses, communities and people are using Google tools and training to thrive. Discover how Google is helping the UK economy to grow. 
                </Text>
                <Button size='lg' className={styles.btn} borderRadius='1px' colorScheme='blue' variant='outline'>Explore Now</Button>
            </Box>
        </Flex>
    )
}

export default BottomSection;