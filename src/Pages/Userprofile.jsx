import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import Userbio from "../Components/ProfileComponent/Userbio"

const Userprofile = () => {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <Userbio/>
            {/* <Footer /> */}
        </>
    )
}

export default Userprofile