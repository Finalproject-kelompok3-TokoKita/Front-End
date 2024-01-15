import "./form.css";
// import image
import card1 from "../../assets/card.png";
import card2 from "../../assets/favorite.png";
import card3 from "../../assets/rumah.png";
import card4 from "../../assets/orang.png";

const Postmenu = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Tokokita</a>
        </div>
        <nav className="navbar-header">
          <a href={"/"}>Home</a>
          <a href={"/productlist"}>Shop</a>
          <a href={"/contact"}>Contact</a>
        </nav>
        <ul className="items">
          <a href={"/cart"}>
            <img src={card1} alt />
          </a>
          <a href={"/favorite"}>
            <img src={card2} alt />
          </a>
          <a href={"/dashboard"}>
            <img src={card3} alt />
          </a>
          <a href={"/userprofile"}>
            <img src={card4} alt />
          </a>
        </ul>
      </header>
      <div id="body-postmenu">
        <h1>Tambah menu</h1>
        <main id="main-postmenu">
          <h2>Informasi Menu</h2>
          <form>
            <div className="upload-foto">
              <div className="label-foto">
                <h3>Foto</h3>
                <p>
                  Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                  (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="img">
                  {" "}
                  <img src="" />
                </label>
                <input
                  type="file"
                  id="img"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="nama">
              <div className="label-nama">
                <h3>Nama</h3>
                <p>
                  Nama produk min. 40 karakter. Disarankan untuk tidak
                  menggunakan huruf kapital berlebih dan kata-kata promosi.
                </p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="upload-produk-inputtext"
                  placeholder="Contoh: Ayam Goreng Keremes"
                />
              </div>
            </div>

            <div className="deskripsi">
              <div className="label-deskripsi">
                <h3>Deskripsi</h3>
                <p>
                  Pastikan deskripsi Menu memuat penjelasan detail terkait
                  produkmu agar pembeli mudah mengerti.
                </p>
              </div>
              <div className="form-group">
                <input
                  className="upload-produk-inputtext"
                  placeholder="Contoh: 1 porsi ayam goreng kremes"
                />
              </div>
            </div>

            <div className="harga">
              <div className="label-harga">
                <h3>harga</h3>
              </div>
              <div className="form-group">
                <input
                  name="Rp"
                  className="upload-produk-inputnumber"
                  placeholder="100000000"
                />
              </div>
            </div>

            <div className="kategori">
              <div className="label-kategori">
                <h3>kategori</h3>
              </div>
              <div className="form-group">
                <select name="pets" id="pet-select upload-produk-select">
                  <option value="">--Pilih Kategori yang sudah ada--</option>
                  <option value="Makanan">Makanan</option>
                  <option value="Minuman">Minuman</option>
                  <option value="Jajanan">Jajanan</option>
                </select>
              </div>
            </div>

            <div className="stok">
              <div className="label-stok">
                <h3>stok</h3>
              </div>
              <div className="form-group">
                <input type="number" placeholder="Masukkan Jumlah Stok" />
              </div>
            </div>
          </form>
        </main>
        <div className="button">
          <button type="submit" className="upload-produk-btnsubmit">
            Simpan
          </button>
          <button type="cancel">Batal</button>
        </div>
      </div>
    </>
  );
};

export default Postmenu;
