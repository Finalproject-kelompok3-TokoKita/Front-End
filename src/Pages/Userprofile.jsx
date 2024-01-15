import Footer from "../Components/Footer";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import card5 from "../assets/prof.png";
import card6 from "../assets/frame5.png";
import card7 from "../assets/frame6.png";
import card8 from "../assets/frame7.png";
import card9 from "../assets/facebook.jpg";
import card10 from "../assets/instagram.jpg";
import card11 from "../assets/twitter.jpg";

const Userprofile = () => {
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
      <div className="wrapper">
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
      </div>
      <div className="bac"></div>
      <Footer />
    </>
  );
};

export default Userprofile;
