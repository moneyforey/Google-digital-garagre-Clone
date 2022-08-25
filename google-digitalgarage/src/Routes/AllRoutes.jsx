import { Route, Routes } from "react-router-dom"
import Certification from "./Certification";
import Course from "./Course";
import Home from "./Home";
import OnlineCourse from "./OnlineCourse";
import Registeration from "./Registeration";
import SignIn from "./SignIn";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onlinecourses" element={<OnlineCourse/>} />
            <Route path="/certification" element={<Certification/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Registeration/>} />
            <Route path="/onlinecourses/:id" element={<Course/>}/>
        </Routes>
    )
}

export default AllRoutes;