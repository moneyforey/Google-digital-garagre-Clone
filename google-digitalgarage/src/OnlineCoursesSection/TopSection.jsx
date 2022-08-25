import { Box, Text } from "@chakra-ui/react";
import styles from"./TopSection.module.css"

const TopSection = () => {
    return (
        <Box width='700px'  m={10}>
            <Text my={3} className={styles.txhd}>
                Online courses
            </Text>
            <Text className={styles.txtext}>
                Discover a range of free learning content designed to help your business or in your career. You can learn by selecting individual modules, or dive right in and take an entire course end-to-end.
            </Text>
        </Box>
    )
}

export default TopSection;