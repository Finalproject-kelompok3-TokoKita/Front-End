const Dashboardnav = () => {
    return (
        <>
            <div id="dasboard-nav" style={{borderRight: "1px solid black"}}>
                <h2><a href="">Home</a></h2>
                <h2><a href="">Tambah Menu</a></h2>
                <h2><a href={'/orderlist'}>Daftar Pesanan</a></h2>
                <h2><a href="">Pengaturan</a></h2>
            </div>
        </>
    )
}

export default Dashboardnav