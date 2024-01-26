import Nav from "../Components/Nav";
// import image
import silang from "../assets/silang.png";

const Pesanan = () => {
  return (
    <>
      <Nav />
      <div className="container-pesanan">
        <form action>
          <div className="row">
            <div className="col">
              <img className="silang" src={silang} alt />
              <div className="silang-bayar">Yey kamu berhasil membayar</div>
              <p className="silang-bayar2">9 Desember 2023, 15:50:20 WIB</p>
            </div>
          </div>
          <div className="transaksi">
            <h3>Total Transaksi</h3>
            <p className="tran">4000</p>
            <div className="pem">
              <h4>Pesanan</h4>
              <p>
                Nasi Goreng (1)
                <span className="metode3">20.000</span>
              </p>
              <p>
                Es Jeruk (1)
                <span className="metode4">20.000</span>
              </p>
              <h4>Informasi :</h4>
              <h5>Tunjukkan Bukti Pembayaran Kepada Penjual</h5>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Pesanan;
