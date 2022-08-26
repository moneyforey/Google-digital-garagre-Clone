import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FAQ from "../Components/FAQ";
import Bottomone from "../CoursePageSections/Bottomone";
import SkillsforYou from "../CoursePageSections/SkillsforYou";
import TopSection from "../CoursePageSections/TopSection";
import WhoisitforyouSection from "../CoursePageSections/WhoisitforyouSection";



const Course=()=>{
    
    const params = useParams();
    const [course,setCourse] = useState()

    // console.log(params);

    useEffect(()=>{
        axios(`http://localhost:5000/course/${params.id}`).then((res)=>{
            setCourse(res.data)
            console.log(res.data)
            
        })
           
    },[])
    return(
        <>
        {/* <TopSection/> */}
        <SkillsforYou/>
        <WhoisitforyouSection/>
        <FAQ/>
        <Bottomone/>
        </>
    )
}

export default Course;