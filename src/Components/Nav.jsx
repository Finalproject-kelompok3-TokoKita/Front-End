const Nav = () => {
    return (
        <>
            <nav className="three-col-wrapper" style={{borderBottom: "2px solid black"}}>
                <div id="web-title">
                    <h1 style={{color: "green"}}>TOKO KITA</h1>
                </div>
                <div className="nav-link" style={{textAlign: "center", paddingTop: "3px"}}>
                    <a href="" style={{color: "black"}}>Home</a>
                    <a href="" style={{color: "black"}}>Shop</a>
                    <a href="" style={{color: "black"}}>Contact</a>
                </div>
                <div className="nav-link" style={{textAlign: "right", paddingTop: "3px"}}>
                    <a href="" style={{color: "black"}}>Cart</a>
                    <a href="" style={{color: "black"}}>Favorite</a>
                    <a href="" style={{color: "black"}}>Toko</a>
                    <a href="" style={{color: "black"}}>Profile</a>
                </div>
            </nav>
        </>
    )
}

export default Nav