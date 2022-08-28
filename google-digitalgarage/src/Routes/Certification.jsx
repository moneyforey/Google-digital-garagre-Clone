import axios from "axios";
import { useEffect, useState } from "react";
import OtherWaystoLearn from "../CertificatonsSectons/OtherWaystoLearn";
import SuccessStorySection from "../CertificatonsSectons/SuccessStorySection";
import FAQ from "../Components/FAQ"
import Bottomone from "../CoursePageSections/Bottomone";
import SkillsforYou from "../CoursePageSections/SkillsforYou";
import TopSection from "../CoursePageSections/TopSectionC";

const Certification =()=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios(`http://localhost:5000/course/0`)
        .then((res)=>{
        console.log(res.data)    
        setData(res.data)
       
    })

    },[])

    return(
       <>
       <TopSection data={data}/>
       <SkillsforYou/>
       <OtherWaystoLearn/>
       <SuccessStorySection/>
       <FAQ/>
       <Bottomone/>
       </>
    )
}

export default Certification;