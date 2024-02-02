import { useEffect, useState } from "react"
import "./form.css"
import axios from "axios"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { cityList, provinceList } from "../../Service/Api";

const Sellersignup = () => {
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const redirect = useNavigate()

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

        // for (const value of formData.values()) {
        //     console.log(value);
        //   }

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
            <div id="body">
                <div className="login-container">
                    <p className="title">
                        Hallo, <span className="bold">Insyu</span> ayo isi detail toko kamu
                    </p>
                    <form id="form" onSubmit={handleSubmit}>
                        <label htmlFor="nohp">Masukkan NO.HP mu</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Masukkan NO. HP mu"
                            className="form-input-ezer"
                            onChange={e => setPhone(e.target.value)}
                        />
                        <label htmlFor="namatoko">Masukkan Nama Toko & Nama Domain</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            onChange={e => setName(e.target.value)}
                        />
                        <div className="domain">
                            <label htmlFor="domain">tokokita.com/</label>
                            <input name="domain" type="text" placeholder="Nama Domain" className="form-input-ezer"
                                onChange={e => setDomain(e.target.value)}
                            />
                        </div>

                        <label htmlFor="alamat">Masukkan Alamat Tokomu</label>
                        <input
                            name="address"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            onChange={e => setAddress(e.target.value)}
                        />

                        <input type="file"
                            onChange={e => setPhoto(e.target.files[0])}
                        />

                        <div className="kategori">
                            <div className="label-kategori">
                                <h3>kategori</h3>
                            </div>
                            <div className="form-group">
                                <select name="pets" id="pet-select upload-produk-select" onChange={e => setCategoryId(e.target.value)}>
                                <option>--Pilih Kategori Toko--</option>
                                    {
                                        categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="kategori">
                            <div className="label-kategori">
                                <h3>Provinsi</h3>
                            </div>
                            <div className="form-group">
                                <select name="pets" id="pet-select upload-produk-select" onChange={e => setProvinceId(e.target.value)}>
                                    <option>--Pilih Provinsi--</option>
                                    {
                                        prov.map((p) => (
                                            <option key={p.id} value={p.id}>{p.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="kategori">
                            <div className="label-kategori">
                                <h3>kota</h3>
                            </div>
                            <div className="form-group">
                                <select name="pets" id="pet-select upload-produk-select" onChange={e => setCityId(e.target.value)}>
                                    <option>--Pilih Kota--</option>
                                    {
                                        city.map((ct) => (
                                            <option key={ct.id} value={ct.id}>{ct.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="form-btn-ezer">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sellersignup