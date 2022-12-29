import styles from "./Sidebar.module.css"
import { Box, Button,  Divider, Flex,  Image, Stack,} from "@chakra-ui/react";
import CategoryBox from "./CategoryBox";

const Attributes = [
    {
        title: 'CATEGORIES', q: ['Digital Marketing', 'Career Development', 'Data']
    },
    {
        title: 'COURSE LENGTH', q: ['Under 2 hours', '2-10 hours', '11-20 hours', '20+ hours']
    },
    {
        title: 'CERTIFICATION', q: ['Free Certificate', 'Paid Certificate']
    },
    {
        title: 'COURSE DIFFICULTY', q: ['Beginner', 'Intermidiate', 'Advance']
    },
    {
        title: 'COURSE PROVIDER', q: ['Google', 'Applied Digital Skills', 'Coursera', 'Darden School of Business, University of Vergenia', 'Future Learn', 'Goodwill Community Foundtion', 'Google Cloud', 'Grasshopper', 'Great Learning', 'Monash University', 'National Chiao Tung University', 'OpenClassrooms', 'Simple Learn', 'Skillshop', 'The Open University', 'Udacity', 'University of AuckLand', 'University Grogninng', 'University of Helsinki']
    },
]

const Sidebar = () => {
    return (
        <Stack  ml={15}>

            {
                Attributes.map((att) =>
                    <CategoryBox className={styles.ctrbox} title={att.title} q={att.q} />
                )
            }
            <Divider color='black' />
            
            <Flex align='center'>
                <Image
                 color='blue'
                  height='15px'
                   src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />
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