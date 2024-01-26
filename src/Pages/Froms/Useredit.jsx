import Footer from "../../Components/Footer"
import Nav from "../../Components/Nav"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Useredit = () => {

    const { id } = useParams()
    const redirect = useNavigate()
    // const [data, SetData] = useState({
    //     fullName: '',
    //     dateOfBirth: '',
    //     gender: '',
    //     email: '',
    //     phone: '',
    //     photo: ''
    // })
    const [fullName, setfullName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [photo, setPhoto] = useState()

    // useEffect(() => {
    //     axios.get('http://localhost:5000/users/' + id)
    //         .then(res => {
    //             if (res.data.message === "Scucessfully") {
    //                 SetData({
    //                     ...data,
    //                     fullName: res.data.data.fullName,
    //                     dateOfBirth: res.data.data.dateOfBirth,
    //                     gender: res.data.data.gender,
    //                     email: res.data.data.email,
    //                     phone: res.data.data.phone
    //                 })
    //             }
    //         })
    //         //.then(res => console.log(res))
    //         .then(err => console.log(err))
    // }, [])

    const editUser = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("fullName", fullName)
        formData.append("dateOfBirth", dateOfBirth)
        formData.append("gender", gender)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("photo", photo)

        //console.log(formData)

        axios.put('http://localhost:5000/users/' + id, formData)
            // .then(res => {
            //     if (res.data.message === "Updated") {
            //         redirect('/userprofile')
            //     }
            // })
            .then(res => console.log(res))
            .then(err => console.log(err))
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
                        <form id="form-useredit">
                            <div className="edit-foto">
                                <div className="image-user-profile">
                                    <img
                                        style={{ height: "345px", width: "345px" }}
                                        src=""
                                        alt="Foto-Profile"
                                        className="img-ezer"
                                    />
                                    <input type="file"
                                        // onChange={e => SetData({ ...data, photo: e.target.value })}
                                        onChange={e => setPhoto(e.target.files[0])}
                                    />
                                </div>
                            </div>
                            <div className="edit-biodata">
                                <h2>Ubah Data Diri</h2>
                                <label htmlFor="fullName">Nama</label>
                                <input name="fullName" type="text"
                                    // value={data.fullName} 
                                    className="input-useredit"
                                    // onChange={e => SetData({ ...data, fullName: e.target.value })}
                                    onChange={e => setfullName(e.target.value)}
                                />
                                <label htmlFor="tgllahir">Tgl Lahir</label>
                                <input
                                    type="text"
                                    className="input-useredit"
                                    name="dateOfBirth"
                                    // value={data.dateOfBirth}
                                    // onChange={e => SetData({ ...data, dateOfBirth: e.target.value })}
                                    onChange={e => setDateOfBirth(e.target.value)}
                                />
                                <label htmlFor="jeniskelamin">Jenis Kelamin</label>
                                <input name="gender" type="text"
                                    // value={data.gender} 
                                    className="input-useredit"
                                    // onChange={e => SetData({ ...data, gender: e.target.value })}
                                    onChange={e => setGender(e.target.value)}
                                />
                                <h2>Ubah Kontak</h2>
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="input-useredit"
                                    //value={data.email}
                                    //onChange={e => SetData({ ...data, email: e.target.value })}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label htmlFor="nohp">No Handphone</label>
                                <input name="phone" type="text" className="input-useredit"
                                    //value={data.phone}
                                    // onChange={e => SetData({ ...data, phone: e.target.value })}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <button type="submit" className="btn-useredit" onClick={editUser}>simpan</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Useredit