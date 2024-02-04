import { home_promo, home_terdekat, home_terlaris } from "../../utils/images";
import Nav from "../Nav";

const HomeHeader = () => {
  return (
    <>
      <div className="font-inter">
        <Nav />
        <div className="h-[420px] m-2 px-10 py-8 bg-[url('/src/assets/images/home_image.jpg')] bg-cover bg-center rounded-3xl flex justify-center flex-col">
          <p className="tradisi" style={{paddingTop:"0px", fontSize:"50px"}}>Rasakan Tradisi Kuliner Lokal Kami!</p>
          <p className="tradisi" style={{}}>Jelajahi Cita Rasa Kuliner Nusantara</p>
        </div>
        <div className="flex justify-center mt-8 px-12 gap-6 h-[320px]">
          <div className="w-1/3 flex flex-col justify-center items-center gap-8 bg-primarybg rounded-[40px]">
            <img src={home_terdekat} alt="" />
            <h1 className="font-bold text-[32px]">Terdekat</h1>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center gap-8 bg-primarybg rounded-[40px]">
            <img src={home_terlaris} alt="" />
            <h1 className="font-bold text-[32px]">Terlaris</h1>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center gap-8 bg-primarybg rounded-[40px]">
            <img src={home_promo} alt="" />
            <h1 className="font-bold text-[32px]">Promo</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
