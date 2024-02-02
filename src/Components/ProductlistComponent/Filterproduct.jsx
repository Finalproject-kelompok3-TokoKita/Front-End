const Filterproduct = ({ province, setProvID, city, setcityID }) => {

  return (
    <>
      <div id="product-list-filter-form">
        <div className="product-list-filter-form-detail shadow">
          <h2>Filter Wilayah</h2>
          <select onChange={(e)=>setProvID(e.target.value)}>
            <option>--Pilih Provinsi--</option>
            {
              province.map((prov) => (
                <option key={prov.id} value={prov.id}>{prov.name}</option>
              ))
            }
          </select>

          <select onChange={(e)=>setcityID(e.target.value)}>
            <option>--Pilih Kota--</option>
            {
              city.map((cy) => (
                <option key={cy.id} value={cy.id}>{cy.name}</option>
              ))
            }
          </select>
        </div>

      </div>
    </>
  );
};

export default Filterproduct;
