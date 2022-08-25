import { Flex, Box, Text, Image,Button } from "@chakra-ui/react";

import styles from"./TopSection.module.css"
const TopSection = () => {
    return (
        <Flex p={5}>
            <Box>
                <Text className={styles.txhd}>
                    Learn the skills of the future
                </Text>
                <Text className={styles.wrtnt}>
                    Accelerate your career or business with an online digital skills course in everything from marketing to coding and beyond.
                </Text>
                <Button  mx='50px' borderRadius='1px' colorScheme='blue'>Find your course</Button>
            </Box>
            <Image  src="img_digital-workshop_hero_xs.png" alt="" width="600" />
            <Box>

            </Box>

        </Flex>
    )
}

export default TopSection;