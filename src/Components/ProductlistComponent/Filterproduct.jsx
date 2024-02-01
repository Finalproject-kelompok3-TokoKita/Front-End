const FilterProduct = ({ province, setProvID, city, setcityID, category }) => {
  return (
    <>
      <div className="p-8 flex flex-col gap-8">
        <div className="flex flex-col w-2/3 p-4 rounded-2xl shadow-xl gap-2">
          <h2 className="font-bold">Pilih Wilayah</h2>
          <select onChange={(e) => setProvID(e.target.value)}>
            <option>--Pilih Provinsi--</option>
            {province.map((prov) => (
              <option key={prov.id} value={prov.id}>
                {prov.name}
              </option>
            ))}
          </select>
          <select onChange={(e) => setcityID(e.target.value)}>
            <option>--Pilih Kota--</option>
            {city.map((cy) => (
              <option key={cy.id} value={cy.id}>
                {cy.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-2/3 p-4 rounded-2xl shadow-xl gap-2">
          <h2 className="font-bold">Pilih Kategori</h2>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
            {category.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
