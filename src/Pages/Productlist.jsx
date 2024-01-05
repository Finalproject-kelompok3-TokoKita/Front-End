import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import Filterproduct from "../Components/ProductlistComponent/Filterproduct"
import Listproduct from "../Components/ProductlistComponent/Listproduct"
import Searchbar from "../Components/Searchbar"

const Productlist = () => {
    return(
        <>
            <div className="container">
                <Nav/>
                <Searchbar/>
            </div>
            <div className="container">
                <div className="two-col-productlist-wrapper">
                    <Filterproduct/>
                    <Listproduct/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Productlist