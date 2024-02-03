import { Link } from "react-router-dom";

const Tokodisekitar = ({ product }) => {
  return (
    <>
      <div id="fourth-layer" style={{ paddingTop: "40px" }}>
        <div className="container">
          <h1 style={{ paddingBottom: "20px" }}>Toko Disekitar</h1>
          <div className="three-col-wrapper">
            {
              product && product.slice(0, 5).map((prod) => (
                <div className="index-product-list" key={prod.id}>
                  <img src="" alt="" />
                  {/* <div className="container">
                    <h3>
                      {prod.name}
                      <br />
                      <small>{prod.category.name}</small>
                    </h3>
                    <button
                      className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
                      type="submit">
                      <Link to={`/seller/${prod.id}`} className="">
                        Kunjungi Toko
                      </Link>
                    </button>
                  </div> */}
                  <div className="bg-primarybg flex flex-col gap-4 h-[220px] p-4 rounded-b-xl">
                    <div>
                      <h2 className="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {prod.name}
                      </h2>
                      <h6 className="text-xs">{prod.category.name}</h6>
                    </div>
                    <div className="flex justify-center gap-4">
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="font-bold">Kota</h2>
                        <h6 className="text-xs">{prod.city.name}</h6>
                      </div>
                      <div className="border-r border-gray-500 h-full"></div>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="font-bold">Provinsi</h2>
                        <h6 className="text-xs">{prod.province.name}</h6>
                      </div>
                    </div>
                    <button
                      className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
                      type="submit">
                      <Link to={`/seller/${prod.id}`} className="">
                        Kunjungi Toko
                      </Link>
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokodisekitar;
