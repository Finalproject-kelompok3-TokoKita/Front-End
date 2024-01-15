import car1 from "../assets/facebook.png";
import car2 from "../assets/instagram.png";
import car3 from "../assets/twitter.jpg";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="two-col-wrapper">
            <div id="footer-detail-info">
              <h1>TokoKita</h1>
              <p>
                Jl. Ahmad Yani, Singa Gembara, Kabupaten Kutai Timur, Kalimantan
                Timur
              </p>
              <p>tokokita@gmail.com</p>
              <p>08151234567</p>
            </div>
            <div id="footer-detail-contact">
              <h3>Newsletter</h3>
              <p>Dapatkan Informasi Melalui Newsletter Kami</p>
              <a href="" className="button-link-newsletter">
                Berlangganan
              </a>
              <h3>Ikuti Kami</h3>
              <div className="fab-icon">
                <a href="">
                  <img className="feb" src={car1} alt="" />
                </a>
                <a href="">
                  <img className="feb" src={car2} alt="" />
                </a>
                <a href="">
                  <img className="feb" src={car3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
