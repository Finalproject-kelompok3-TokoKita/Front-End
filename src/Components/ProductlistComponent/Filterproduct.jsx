const Filterproduct = ({ setCategory, category, city }) => {

  return (
    <>
      <div id="product-list-filter-form">
        <div className="product-list-filter-form-detail shadow">
          <h2>Harga</h2>
          <span>Range : </span>
          <span>
            <b>10.000 - 20.000</b>
          </span>
          <br />
          <input type="range" style={{ marginTop: "15px" }} />
        </div>
        <div className="product-list-filter-form-detail shadow">
          <h2>Pilih Kategori</h2>
          <select name="" id="" onChange={(e)=>setCategory(e.target.value)}>
            {
              category.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))
            }
          </select>
        </div>
        <div className="product-list-filter-form-detail shadow">
          <h2>Pilih Kota</h2>
          <select name="" id="">
            {
              city.map((cy) => (
                <option key={cy.id} value={cy.name}>{cy.name}</option>
              ))
            }
          </select>
        </div>
      </div>
    </>
  );
};

export default Filterproduct;
