//import { location, mail, phone } from "../utils/images";
//import { facebook, instagram, twitter } from "../utils/images";

const Footer = () => {
  return (
    <div className="h-[320px] bg-secondarybg flex justify-between gap-80 p-12 font-inter">
      <div className="w-1/2 text-white">
        <h1 className="text-[32px] text-primary font-bold">Tokokita</h1>
        <div className="flex gap-4">
          <img src={''} alt="" />
          <p>
            Jl. Ahmad Yani, Singa Gembara, Kecamatan Sangatta Utara, Kabupaten
            Kutai Timur, Kalimantan Timur
          </p>
        </div>
        <div className="flex gap-4">
          <img src={''} alt="" />
          <p>tokokita@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <img src={''} alt="" />
          <p>080123456789</p>
        </div>
      </div>
      <div className="w-1/2 text-white">
        <h1 className="text-[24px] font-bold">Newsletter</h1>
        <p>Dapatkan Informasi Melalui Newsletter Kami</p>
        <button
          className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full mb-6"
          type="submit">
          Berlangganan
        </button>
        <h1 className="text-[20px] font-bold mb-2">Ikuti Kami</h1>
        <div className="flex gap-2">
          <a href="#">
            <img className="rounded" src={''} alt="" />
          </a>
          <a href="#">
            <img className="rounded" src={''} alt="" />
          </a>
          <a href="#">
            <img className="rounded" src={''} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
