const Dashboardnav = () => {
  return (
    <>
      <div id="dasboard-nav">
        <div className="bag">
          <h4 className="tok">TokoKita</h4>
          <a href={"/"}>Halaman Utama</a>

        </div>
        <div className="big">
          <a href={"/dashboard"}>Dashboard</a>
        </div>
        <div className="big">
          <a href={"/add-menu"}>Tambah Menu</a>
        </div>
      </div>
    </>
  );
};

export default Dashboardnav;
