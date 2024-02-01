import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function ContactPage() {
  return (
    <div className="font-inter">
      <Nav />
      <div className="flex flex-col items-center mb-8">
        <div className="p-12 w-2/3 flex flex-col justify-center items-center">
          <h1 className="text-[19px] text-center font-bold">
            Tokokita adalah platform yang bertujuan untuk membantu para penjual
            UMKM
          </h1>
          <p className="text-justify mb-6">
            Masalah utama yang paling sering dihadapi oleh para pedagang kuliner
            daerah pada saat ini salah satunya adalah promosi produk dagangan
            mereka, dan kebanyakan dari para pembeli yang hanya melihat merek
            dan mereka rela untuk pergi keluar daerah hanya untuk membeli produk
            dagangan yang bisa didapatkan di daerah mereka sendiri. Dengan
            adanya Website Tokokita diharapkan dapat membantu para pedagang pada
            bidang kuliner daerah dalam mempromosikan dagangan/produk mereka.
          </p>
          <button
            className="h-10 px-6 font-bold rounded-md bg-primary text-white w-1/3"
            type="submit">
            Jelajahi Tokokita
          </button>
        </div>
        <div className="w-1/3">
          <form>
            <input
              type="text"
              className="input w-full"
              placeholder="your name"
            />
            <input
              type="text"
              className="input w-full"
              placeholder="your email"
            />
            <input
              type="text"
              className="input w-full"
              placeholder="your Subject"
            />
            <textarea
              className="input w-full"
              cols="30"
              rows="5"
              placeholder="Your Message..."></textarea>
            <button
              className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
              type="submit">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
