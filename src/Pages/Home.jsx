import Homeheader from "../Components/HomeComponent/Homeheader"
import Footer from "../Components/Footer"
import Anekakuliner from "../Components/HomeComponent/Anekakuliner"
import Tokodisekitar from "../Components/HomeComponent/Tokodisekitar"

const Home = () => {
    return(
        <>
            <Homeheader/>
            <Anekakuliner />
            <Tokodisekitar />
            <Footer/>
        </>
    )
}

export default Home