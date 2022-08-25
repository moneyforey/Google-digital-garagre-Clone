import styles from "./Sidebar.module.css"
import { Box, Button, Checkbox, Divider, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";

const Attributes = [
    {
        title: 'CATEGORIES', q: ['Digital Marketing', 'Career Development', 'Data']
    },
    {
        title: 'Course Length', q: ['Under 2 hours', '2-10 hours', '11-20 hours', '20+ hours']
    },
    {
        title: 'Certification', q: ['Free Certificate', 'Paid Certificate']
    },
    {
        title: 'Course Defficulty', q: ['Beginner', 'Intermidiate', 'Advance']
    },
    {
        title: 'COURSE PROVIDER', q: ['Google', 'Applied Digital Skills', 'Coursera', 'Darden School of Business, University of Vergenia', 'Future Learn', 'Goodwill Community Foundtion', 'Google Cloud', 'Grasshopper', 'Great Learning', 'Monash University', 'National Chiao Tung University', 'OpenClassrooms', 'Simple Learn', 'Skillshop', 'The Open University', 'Udacity', 'University of AuckLand', 'University Grogninng', 'University of Helsinki']
    },
]

const Sidebar = () => {
    return (
        <Stack>

            {
                Attributes.map((att) =>

                    <Box className={styles.ctrbox}>
                        <Text>{att.title}</Text>
                        <Stack>
                            {
                                att.q.map((el) => <Checkbox>
                                    {el}
                                </Checkbox>)

                            }
                        </Stack>
                    </Box>
                )
            }
            <Divider />
            <Flex align='center'>
                <Image color='blue' height='15px' src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />
                <Button
                    color='blue' colorScheme='blue'
                    variant="unstyled">
                    Reset filters
                </Button>
            </Flex>

        </Stack>
    )
}


export default Sidebar;