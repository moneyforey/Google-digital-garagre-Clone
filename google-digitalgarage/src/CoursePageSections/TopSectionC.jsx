import styles from "./TopSectionC.module.css"
import { Box, Button, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { CheckCircleIcon, HamburgerIcon, TimeIcon } from "@chakra-ui/icons";
import TwiIcon from "../Icons/TwiIcon";
import CoinsIcon from "../Icons/CoinsIcons";




const TopSection=({data})=>{
   

    
    return(
        <Box>
            
            <Flex  m={10} justify='space-evenly'>
             <Stack>
             <Heading className={styles.hd}>{data.title}</Heading>
              <Text className={styles.txtop}>Find out how to build a digital presence, sell to customers online, and stay safe from hackers.</Text>
              <Button width='40%' size='lg' borderRadius='1px' colorScheme='blue'>Start free Course</Button>
             </Stack>
             <Image width='800px' src={data.url} />
            </Flex>

            <Divider mt={10}/>
            
            <Flex m={10} justify='space-evenly'>
                
                <Flex gap={5} justify='space-evenly' p={10} borderLeft='1px solid #f2f4f8 '>
                <Stack >
                    <Text>COURSE DETAILS</Text>
                    <Flex gap={.5} align='center'><HamburgerIcon color='#fac03f'/><Text>Modules: {data.modules}</Text></Flex>
                    <Flex gap={.5} align='center'><TimeIcon color='#fac03f'/><Text>Hours: {data.hours}</Text></Flex>
                    <Flex gap={.5} align='center'><TwiIcon color="#fac03f"/><Text>{data.level}</Text></Flex>
                    <Flex gap={.5} align='center'><CoinsIcon/><Text>{data.type}</Text></Flex>
                </Stack>


                <Stack>
                    <Text>COURSE FEATURES</Text>
                    <Flex align='center'>
                        <CheckCircleIcon color='green' />
                    <Text>Video tutorials</Text>
                    </Flex>
                    <Flex gap={.5} align='center'><CheckCircleIcon color='green'/><Text>Easy-to-implement tips</Text></Flex>
                    <Flex gap={.5} align='center'><CheckCircleIcon color='green'/><Text>End-of-topic assessments</Text></Flex>
                    <Flex gap={.5} align='center'><CheckCircleIcon color='green'/><Text>Unlimited access</Text></Flex>
                </Stack>
                </Flex>
                
                <Box width='500px' p={10} borderLeft='1px solid #f2f4f8 '>
                    <Text className={styles.hd1}>About this course</Text>
                    <Text>
                    Start our free course to discover what it takes to start and run a successful business online. You'll also learn how to build a digital presence, use e-commerce, keep a business safe from hackers, and get noticed locally.
                    </Text>
                </Box>
            </Flex>
            <Divider/>
        </Box>
    )
}

export default TopSection;