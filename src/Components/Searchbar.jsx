const Searchbar = () => {
  return (
    <>
      <div id="index-search-bar" style={{ paddingTop: "50px" }}>
        <p className="searching">Kota yang anda tempati</p>
        <input type="search" name="" id="" className="index-search" />
        <input
          type="button"
          value="Cari Tempat"
          className="index-search-input"
        />
      </div>
    </>
  );
};

export default Searchbar;
