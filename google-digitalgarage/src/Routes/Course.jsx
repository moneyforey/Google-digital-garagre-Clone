import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FAQ from "../Components/FAQ";
import Bottomone from "../CoursePageSections/Bottomone";
import SkillsforYou from "../CoursePageSections/SkillsforYou";
import TopSection from "../CoursePageSections/TopSectionC";
import WhoisitforyouSection from "../CoursePageSections/WhoisitforyouSection";


// const getData =(id)=> axios.get(`http://localhost:5000/course/${id}`)  ;


const Course=()=>{
    
    const params = useParams();
    const [data,setData] = useState({})
    const {id} = params;
    console.log(params);

    useEffect(()=>{
        axios(`http://localhost:5000/course/${id}`)
        .then((res)=>{
        console.log(res.data)    
        setData(res.data)
       
    })

    },[])
    console.log(data);
    return(
        <>
         {/* <Box>
            <Flex>
              <Text>{data.title}</Text>
            </Flex>
        </Box> */}
        <TopSection data={data}/>
        <SkillsforYou/>
        <WhoisitforyouSection/>
        <FAQ/>
        <Bottomone/>
        </>
    )
}

export default Course;