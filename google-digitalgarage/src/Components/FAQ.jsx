import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button, 
    Flex,
    Spacer,
    Text
} from "@chakra-ui/react";

import styles from "./FAQ.module.css"

const FAQ = () => {
    return (
        <Box  px={250}  >

            <Flex>
                <Spacer />
                <Text className={styles.txfaq}>FAQs</Text>
                <Spacer />
            </Flex>

            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' p={5} textAlign='left'>
                                Who is Google Digital Garage for?
                            </Box>
                            <AccordionIcon boxSize='1.5em' color='blue' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' p={5} textAlign='left'>
                                Who provides the courses?
                            </Box>
                            <AccordionIcon boxSize='1.5em' color='blue' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Some of the courses are provided by us, and others from our partner universities or institutions.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Flex>
                <Spacer />
                <Button m={10} borderRadius='none'>See all FAQs</Button>
                <Spacer />
            </Flex>
        </Box>
    )
}
export default FAQ;