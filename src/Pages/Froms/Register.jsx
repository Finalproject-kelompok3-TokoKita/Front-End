import { useState } from "react"
import axios from "axios"
import "./form.css"
import { useNavigate } from "react-router-dom"
//import Signupvalidation from "../../Service/Validation/Signupvalidation"

const Register = () => {

    const [regisdata, setRegisdata] = useState({
        username: '',
        fullName: '',
        email: '',
        password: ''
    })

    const [passcheck, setPasscheck] = useState('')
    const redirect = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();


        if (regisdata.password != passcheck) {
            alert("pass not match")
        } else {
            axios.post('http://localhost:5000/register', regisdata)
                .then(res => {
                    if (res.data.message === "Berhasil Registrasi") {
                        redirect('/login')
                    }
                })
                .then(err => console.log(err))
        }

    }

    return (
        <>
            <div id="body">
                <div className="register-container">
                    <h1 className="title">Daftar</h1>
                    <form id="form" onSubmit={handleRegister}>
                        <input className="form-input-ezer"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={e => setRegisdata({ ...regisdata, username: e.target.value })} />
                        <input className="form-input-ezer"
                            type="text"
                            placeholder="fullName"
                            name="fullName"
                            onChange={e => setRegisdata({ ...regisdata, fullName: e.target.value })} />

                        <input className="form-input-ezer"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={e => setRegisdata({ ...regisdata, email: e.target.value })} />

                        <input className="form-input-ezer"
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={e => setRegisdata({ ...regisdata, password: e.target.value })} />

                        <input
                                className="form-input-ezer"
                                type="password"
                                id="confirm-password"
                                placeholder="Ulangi Password"
                                name="confirm-password"
                                onChange={e => setPasscheck(e.target.value)}
                            />
                        {/* <div className="show-password">
                                <input type="checkbox" id="show-password-checkbox" />
                                <label htmlFor="show-password-checkbox" className="show"
                                >Tampilkan Password</label>
                            </div> */}
                        <button className="form-btn-ezer" type="submit">Daftar</button>
                    </form>
                    <p style={{ marginTop: "1rem" }}>
                        Sudah punya akun?
                        <a href="" className="a-link-ezer" style={{ fontWeight: "bold" }}>Login disini</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register;
