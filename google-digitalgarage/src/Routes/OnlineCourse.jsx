import { Box, Flex } from "@chakra-ui/react";
import CourseContainer from "../OnlineCoursesSection/CourseContainer";
import Sidebar from "../OnlineCoursesSection/Sidebar";
import TopSection from "../OnlineCoursesSection/TopSection";

const OnlineCourse =()=>{
    return(
        <>
        <TopSection/>
        <Box >
       <Flex p='35px' bg='#f7f7f7 '>
        <Sidebar />

        <CourseContainer/>
       </Flex>


       </Box>

        </>
    )
}

export default OnlineCourse;