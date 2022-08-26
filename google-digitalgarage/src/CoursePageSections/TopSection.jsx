import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const TopSection=({data})=>{
    const params = useParams();
    const [course,setCourse] = useState()

    console.log(params);

    useEffect(()=>{
        axios(`http://localhost:5000/course/${params.id}`).then((res)=>{
           console.log(res)
            setCourse(res) })
    },[])
    return(
        <Box>
            <Flex>
              <Text>{course.title}</Text>
            </Flex>
        </Box>
    )
}

export default TopSection;