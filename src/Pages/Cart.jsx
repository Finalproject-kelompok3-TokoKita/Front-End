import Cartlist from "../Components/CartComponent/Cartlist"
import Checkout from "../Components/CartComponent/Checkout"
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

const Cart = () => {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <div className="container">
                <p className="nan" style={{padding: "15px 0"}}>Pesanan</p>
                <h1 style={{padding: "20px 0", fontSize: "20px"}}>Rumah Makan Sederhana - Semarang</h1>
                <div className="cart">
                    <Cartlist />
                    <Checkout />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart