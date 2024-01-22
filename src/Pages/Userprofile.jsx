import Footer from "../Components/Footer";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import card5 from "../assets/prof.png";
import Userbio from "../Components/ProfileComponent/Userbio";
import Nav from "../Components/Nav";

const Userprofile = () => {
  return (
    <>
      <Nav/>
      {/* <div className="wrapper">
        <div className="left">
          <img src={card5} alt="user" width={100} />
          <button className="ubah">Ubah Foto Profil</button>
          <p className="file">
            Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file
            yang diperbolehkan: .JPG .JPEG .PNG
          </p>
          <button className="ubah2">Ubah Password</button>
        </div>
        <div className="right">
          <div className="info">
            <h3>Ubah Biodata Diri</h3>
            <div className="info_data">
              <div className="data">
                <h4>Nama</h4>
                <h4>Tanggal Lahir</h4>
                <h4>Jenis Kelamin</h4>
              </div>
              <div className="data">
                <h5>
                  Insyu Karaeng <span>Ubah</span>
                </h5>
                <h5>
                  31 Desember 1997 <span>Ubah</span>
                </h5>
                <h5>
                  Perempuan <span>Ubah</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Ubah Kontak</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Email</h4>
                <h4>No Hp</h4>
              </div>
              <div className="data">
                <h5>
                  email.com <span>Ubah</span>
                </h5>
                <h5>
                  +62 856 6654 7765 <span>Ubah</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* NOTE : yang diedit di bagian <Userbio />> bukan bikin html baru */}
      <Userbio/>
      <div className="bac"></div>
      <Footer />
    </>
  );
};

export default Userprofile;
