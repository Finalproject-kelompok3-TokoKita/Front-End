import "./form.css";
// import image
import card1 from "../../assets/card.png";
import card2 from "../../assets/favorite.png";
import card3 from "../../assets/rumah.png";
import card4 from "../../assets/orang.png";
import Nav from "../../Components/Nav";
import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Postmenu = () => {
  const token = Cookies.get('token')
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //const redirect = useNavigate()

  const [addproduct, setAddproduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  })

  const storeProduct = (event) => {
    event.preventDefault();

    console.log(addproduct)
    // axios.post('http://localhost:5000/product', addproduct)
    //   // .then(res => {
    //   //   if (res.data.message === "Created") {
    //   //     redirect('/dashboard')
    //   //   }
    //   // })
    //   .then(res => console.log(res))
    //   .then(err => console.log(err))
  }

  return (
    <>
      <Nav />
      <div id="body-postmenu">
        <h1>Tambah menu</h1>
        <main id="main-postmenu">
          <h2>Informasi Menu</h2>
          <form onSubmit={storeProduct}>
            <div className="upload-foto">
              <div className="label-foto">
                <h3>Foto</h3>
                <p>
                  Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px
                  (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).
                </p>
              </div>
              {/* <div className="form-group">
                <label htmlFor="img">
                  {" "}
                  <img src="" />
                </label>
                <input
                  type="file"
                  id="img"
                  accept="image/*"
                />
              </div> */}
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
                  name="name"
                  type="text"
                  className="upload-produk-inputtext"
                  placeholder="Contoh: Ayam Goreng Keremes"
                  onChange={e => setAddproduct({ ...addproduct, price: e.target.value })}
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
                  name="description"
                  className="upload-produk-inputtext"
                  placeholder="Contoh: 1 porsi ayam goreng kremes"
                  onChange={e => setAddproduct({ ...addproduct, description: e.target.value })}
                />
              </div>
            </div>

            <div className="harga">
              <div className="label-harga">
                <h3>harga</h3>
              </div>
              <div className="form-group">
                <input
                  name="price"
                  className="upload-produk-inputnumber"
                  placeholder="100000000"
                  onChange={e => setAddproduct({ ...addproduct, price: e.target.value })}
                />
              </div>
            </div>

            {/* <div className="kategori">
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
            </div> */}

            <div className="stok">
              <div className="label-stok">
                <h3>stok</h3>
              </div>
              <div className="form-group">
                <input type="text" name="quantity" placeholder="Masukkan Jumlah Stok"
                onChange={e => setAddproduct({ ...addproduct, quantity: e.target.value })}
                />
              </div>
            </div>
          </form>
        </main>
        <div className="button">
          <button type="submit" className="upload-produk-btnsubmit">
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};

export default Postmenu;
