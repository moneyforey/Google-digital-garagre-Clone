import { Route, Routes } from "react-router-dom"
import Certification from "./Certification";
import Course from "./Course";
import Home from "./Home";
import OnlineCourse from "./OnlineCourse";
import SignIn from "./SignIn";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onlinecourses" element={<OnlineCourse/>} />
            <Route path="/certification" element={<Certification/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/onlinecourses/:id" element={<Course/>}/>
        </Routes>
    )
}

export default AllRoutes;