import { useState } from "react"
import "./form.css"
import axios from "axios"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Sellersignup = () => {
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const redirect = useNavigate()

    const [sellerdata, setSellerdata] = useState({
        phone: '',
        name: '',
        domain: '',
        address: ''
    })

    const sellerRegister = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/store', sellerdata)
            .then(res => {
                if (res.data.message === "Created") {
                    redirect('/dashboard')
                }
            })
            .then(err => console.log(err))
    }

    return (
        <>
            <div id="body">
                <div className="login-container">
                    <p className="title">
                        Hallo, <span className="bold">Insyu</span> ayo isi detail toko kamu
                    </p>
                    <form id="form" onSubmit={sellerRegister}>
                        <label htmlFor="nohp">Masukkan NO.HP mu</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Masukkan NO. HP mu"
                            className="form-input-ezer"
                            onChange={e => setSellerdata({ ...sellerdata, phone: e.target.value })}
                        />
                        <label htmlFor="namatoko">Masukkan Nama Toko & Nama Domain</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            onChange={e => setSellerdata({ ...sellerdata, name: e.target.value })}
                        />
                        <div className="domain">
                            <label htmlFor="domain">tokokita.com/</label>
                            <input name="domain" type="text" placeholder="Nama Domain" className="form-input-ezer"
                                onChange={e => setSellerdata({ ...sellerdata, domain: e.target.value })}
                            />
                        </div>

                        <label htmlFor="alamat">Masukkan Alamat Tokomu</label>
                        <input
                            name="address"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            onChange={e => setSellerdata({ ...sellerdata, address: e.target.value })}
                        />
                        <button type="submit" className="form-btn-ezer">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sellersignup