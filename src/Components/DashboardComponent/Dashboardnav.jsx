const Dashboardnav = () => {
  return (
    <>
      <div id="dasboard-nav">
        <div className="bag">
          <h4 className="tok">TokoKita</h4>
          <a href={"/"}>Home</a>
        </div>
        <div className="bag">
          <a href={"/add-menu"}>Tambah Menu</a>
        </div>
        <div className="bag">
          <a href="">Pengaturan</a>
        </div>
      </div>
    </>
  );
};

export default Dashboardnav;
