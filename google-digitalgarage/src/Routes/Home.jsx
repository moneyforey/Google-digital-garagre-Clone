import FAQ from "../Components/FAQ"
import BottomSection from "../HomePageSections/BottomSection";
import CategorySectionBoxes from "../HomePageSections/CategorySectionBoxes";
import Middlesection from "../HomePageSections/MiddleSection";
import TopSection from "../HomePageSections/TopSection";

const Home = () => {
    return (
        <>
        <TopSection/>
        <Middlesection/>
        <CategorySectionBoxes/>
        <BottomSection/>
            <FAQ />
        </>
    )
}

export default Home;