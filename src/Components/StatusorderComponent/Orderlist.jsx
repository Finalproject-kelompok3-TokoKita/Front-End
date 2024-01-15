const Orderlist = () => {
  return (
    <>
      <div id="dashboard-content">
        <h1>Daftar Pesanan</h1>
        <form action="" style={{ marginTop: "0px" }}>
          <select name="" id="" className="order-status-card-filter-form">
            <option value="">Pesanan Baru</option>
            <option value="">Diterima</option>
            <option value="">Selesai</option>
            <option value="">Dibatalkan</option>
          </select>
        </form>
        <div className="order-status-card">
          <div
            className="container"
            style={{ width: "95%", paddingBottom: "10px" }}
          >
            <h4>Pesanan Baru / 01 Januari 2024</h4>
            <hr />
            <div className="three-col-wrapper">
              <div style={{ borderRight: "1px solid grey" }}>
                <h2>Ayam Goreng</h2>
                <small>Ayam goreng kripsi super</small>
              </div>
              <div style={{ borderRight: "1px solid grey" }}>
                <h4>Ayam Goreng</h4>
                <p>20.000</p>
                <h4>Porsi</h4>
                <p>1</p>
              </div>
              <div>
                <h4>Nama Pembeli</h4>
                <p>John Doe</p>
                <h4>No HP</h4>
                <p>021 12345678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderlist;
