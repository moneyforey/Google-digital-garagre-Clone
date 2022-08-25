import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../OnlineCoursesSection/Sidebar";
import TopSection from "../OnlineCoursesSection/TopSection";

const OnlineCourse =()=>{
    return(
        <>
        <TopSection/>
        <Box>
       <Flex>
        <Sidebar/>

        
       </Flex>

       </Box>

        </>
    )
}

export default OnlineCourse;