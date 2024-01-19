const Dashboardnav = () => {
  return (
    <>
      <div id="dasboard-nav">
        <h2 className="bag">
          <h4 className="tok">TokoKita</h4>
          <a href={"/"}>Home</a>
        </h2>
        <h2 className="big">
          <a href={"/add-menu"}>Tambah Menu</a>
        </h2>
        <h2 className="big">
          <a href={"/orderlist"}>Daftar Pesanan</a>
        </h2>
        <h2 className="big">
          <a href="">Pengaturan</a>
        </h2>
      </div>
    </>
  );
};

export default Dashboardnav;
