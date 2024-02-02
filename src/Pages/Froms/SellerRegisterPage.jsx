import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav.jsx";
import { cityList, provinceList } from "../../Service/Api";

const SellerRegisterPage = () => {
  const token = Cookies.get("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const redirect = useNavigate();

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [domain, setDomain] = useState('')
  const [address, setAddress] = useState('')
  const [photo, setPhoto] = useState()
  const [categoryId, setCategoryId] = useState()
  const [categories, setCategories] = useState([])
  const [cityId, setCityId] = useState()
  const [city, setCity] = useState([])
  const [provinceId, setProvinceId] = useState()
  const [prov, setProv] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setCategories(res.data.data)
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  useEffect(() => {
    provinceList().then((prov) => {
      setProv(prov);
    })
  }, [])

  useEffect(() => {
    cityList(provinceId).then((ct) => {
      setCity(ct);
    })
  }, [provinceId])



  const sellerRegister = async () => {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("domain", domain)
    formData.append("address", address)
    formData.append("file", photo)
    formData.append("categoryId", categoryId)
    formData.append("cityId", cityId)
    formData.append("provinceId", provinceId)

    const response = await axios.post('http://localhost:5000/store', formData, {
      headers: { 'Content-Type': "multipart/form-data" },
    });

    if (response.data.message === "Created") {
      setTimeout(() => {
        redirect('/dashboard');
      }, 1000);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sellerRegister();

  }

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center font-inter py-8">
        <div className="w-full max-w-sm">
          <p className="text-center text-lg mb-2">
            Hallo, ayo isi
            detail toko kamu
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="phone" className="block text-sm font-bold mb-2">
              Masukkan No. HP mu
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder=""
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="seller" className="block text-sm font-bold mb-2">
              Masukkan Nama Toko & Nama Domain
            </label>
            <input
              name="seller"
              id="seller"
              type="text"
              placeholder=""
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-center items-center gap-2 mb-2">
              <h1 className="text-black text-opacity-50">tokokita.com/</h1>
              <input
                name="domain"
                type="text"
                placeholder=""
                className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700"
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>
            <label htmlFor="address" className="block text-sm font-bold mb-2">
              Masukkan Alamat Tokomu
            </label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder=""
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-center items-center gap-2 mb-2">
              <h1 className="text-black text-opacity-50">Provinsi</h1>
              <select
                name="pets"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700"
                onChange={(e) => setProvinceId(e.target.value)}>
                <option>-----Pilih Provinsi-----</option>
                {prov.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <h1 className="text-black text-opacity-50">Kota</h1>
              <select
                name="pets"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700"
                onChange={(e) => setCityId(e.target.value)}>
                <option>-----Pilih Kota-----</option>
                {city.map((ct) => (
                  <option key={ct.id} value={ct.id}>
                    {ct.name}
                  </option>
                ))}
              </select>
            </div>
            <label htmlFor="category" className="block text-sm font-bold mb-2">
              Masukkan Kategori Tokomu
            </label>
            <select
              name="pets"
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              onChange={(e) => setCategoryId(e.target.value)}>
              <option>--Pilih Kategori--</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mb-4 text-xs"
            />

            <button
              className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
              type="submit">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellerRegisterPage;
