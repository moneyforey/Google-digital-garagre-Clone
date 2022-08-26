import styles from "./Sidebar.module.css"
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";;


const CategoryBox = ({ title, q }) => {
    return (

        <Box>
            <Text className={styles.title}>{title}</Text>
            <Stack className={styles.att}>
                {
                    q.map((el) =>
                        <Checkbox>
                            {el}
                        </Checkbox>)

                }
            </Stack>
        </Box>
    )
}

export default CategoryBox;