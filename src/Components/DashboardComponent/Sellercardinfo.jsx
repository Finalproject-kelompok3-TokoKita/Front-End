const Sellercardinfo = ({product}) => {
  return (
    <>
      <div id="dashboard-cardinfo">
        <div className="three-col-wrapper">
          <div className="dashboard-card-info">
            <h2>Jumlah Menu</h2>
            <h2>{Object.keys(product).length}</h2>
          </div>
          <div className="dashboard-card-info">
            <h2>Pesanan Baru</h2>
            <h2>20</h2>
          </div>
          <div className="dashboard-card-info">
            <h2>Pesanan Selesai</h2>
            <h2>20</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellercardinfo;
