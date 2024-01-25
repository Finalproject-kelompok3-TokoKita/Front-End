import Footer from "../../Components/Footer"
import Nav from "../../Components/Nav"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Useredit = () => {

    const { id } = useParams()
    const redirect = useNavigate()
    const [data, SetData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        axios.get('http://localhost:5000/users/' + id)
            .then(res => {
                if (res.data.message === "Scucessfully") {
                    SetData({
                        ...data,
                        fullName: res.data.data.fullName,
                        dateOfBirth: res.data.data.dateOfBirth,
                        gender: res.data.data.gender,
                        email: res.data.data.email,
                        phone: res.data.data.phone
                    })
                }
            })
            //.then(res => console.log(res))
            .then(err => console.log(err))
    }, [])

    const editUser = (event) => {
        event.preventDefault();
        //console.log(data)
        axios.put('http://localhost:5000/users/' + id, data)
        .then(res => {
            if (res.data.message === "Updated") {
                redirect('/userprofile')
            }
        })
        // .then(err => console.log(err))
    }


    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <div className="container" style={{ marginTop: "50px" }}>
                <main id="main">
                    <div className="head-1"><h2>Biodata Diri</h2></div>
                    <div className="biodata">
                        <div className="edit-foto">
                            <div className="image-user-profile">
                                <img
                                    style={{ height: "345px", width: "345px" }}
                                    src=""
                                    alt="Foto-Profile"
                                    className="img-ezer"
                                />
                            </div>
                        </div>
                        <div className="edit-biodata">
                            <h2>Ubah Data Diri</h2>
                            <form id="form-useredit" onSubmit={editUser}>
                                <label htmlFor="fullName">Nama</label>
                                <input name="fullName" type="text" value={data.fullName} className="input-useredit"
                                 onChange={e => SetData({ ...data, fullName: e.target.value })}
                                />
                                <label htmlFor="tgllahir">Tgl Lahir</label>
                                <input
                                    type="text"
                                    className="input-useredit"
                                    name="dateOfBirth"
                                    value={data.dateOfBirth}
                                    onChange={e => SetData({ ...data, dateOfBirth: e.target.value })}
                                />
                                <label htmlFor="jeniskelamin">Jenis Kelamin</label>
                                <input name="gender" type="text" value={data.gender} className="input-useredit"
                                onChange={e => SetData({ ...data, gender: e.target.value })}     
                                />
                                <h2>Ubah Kontak</h2>
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="input-useredit" value={data.email}
                                onChange={e => SetData({ ...data, email: e.target.value })}
                                />
                                <label htmlFor="nohp">No Handphone</label>
                                <input name="phone" type="text" value={data.phone} className="input-useredit"
                                onChange={e => SetData({ ...data, phone: e.target.value })}
                                />
                                <button type="submit" btn-useredit>simpan</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Useredit