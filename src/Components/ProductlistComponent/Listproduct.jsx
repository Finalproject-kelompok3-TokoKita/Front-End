import { Link } from "react-router-dom";
import kakap from "../../assets/kakap.jpg";

const ListProduct = ({ product }) => {
  return (
    <>
      <div className="font-inter p-8">
        <div className="flex gap-4">
          {product.map((prod) => (
            <div className="w-1/3 flex flex-col" key={prod.id}>
              <div className="h-[220px]">
                <img
                  src={`http://localhost:5000/static/stores/${prod.photo}`}
                  alt=""
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="bg-primarybg flex flex-col gap-4 h-[190px] p-4 rounded-b-xl">
                <div>
                  <h2 className="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {prod.name} - Yogyakarta
                  </h2>
                  <h6 className="text-xs">Jajanan</h6>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold">15.000</h2>
                    <h6 className="text-xs">Harga</h6>
                  </div>
                  <div className="border-r border-gray-500 h-full"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold">5⭐</h2>
                    <h6 className="text-xs">Rating</h6>
                  </div>
                </div>
                {/* <Link to={`/seller/${prod.id}`} className="">
                  Kunjungi Toko
                </Link> */}
                <button
                  className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
                  type="submit">
                  <Link to={`/seller/${prod.id}`} className="">
                    Kunjungi Toko
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
