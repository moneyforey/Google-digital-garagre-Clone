import styles from "./CourseContainer.module.css"
import { Box, Button, Flex, Grid, Spacer, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import CoursePage from "./CoursePage"




const CourseContainer =()=>{
    const [courses,setCourses] = useState([]);
    const [no_of_courses,setNo_of_Courses] = useState()
    useEffect(()=>{
        axios(`https://my-mock-server.onrender.com/course`).then((res)=>{
        console.log(res.data)    
        setCourses(res.data)
        setNo_of_Courses(res.data.length)
    })

    },[])
    return(


        <Box>
            <Text my={1} className={styles.count} >Results: {no_of_courses} courses</Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            {
                courses.map((course)=><CoursePage 
                id={course.id}
                image={course.url} 
                title={course.title} 
                creater={course.creater}
                module={course.modules}
                hour={course.hours}/>)
            }
        </Grid>
          <Flex m={10}>
            <Spacer/>
            <Button>Load more</Button>
            <Spacer/>
          </Flex>
        </Box>

    )
}

export default CourseContainer;