import { useState } from "react"
import axios from "axios"
import "./form.css"
import Signupvalidation from "../../Service/Validation/Signupvalidation"

const Register = () => {

    const [RegisData, setRegisData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword:''
    })

    const [error, setError] = useState({})

    const inputData = (e) =>{
        const userData = {...RegisData, [e.target.name]: [e.target.value]}
        setRegisData(userData)
    }

    const handleRegister = (event) => {
        event.preventDefault()
        //setError(Signupvalidation(RegisData))
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
                            onChange={inputData} />
                        {error.username && <p style={{color: "red"}}> {error.username} </p>}

                        <input className="form-input-ezer"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={inputData} />
                        {error.email && <p style={{color: "red"}}> {error.email} </p>}    

                        <input className="form-input-ezer"
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={inputData} />
                        {error.password && <p style={{color: "red"}}> {error.password} </p>}    

                        <input
                            className="form-input-ezer"
                            type="password"
                            id="confirm-password"
                            placeholder="Ulangi Password"
                            name="confirmpassword"
                            onChange={inputData} />
                        {error.confirmpassword && <p style={{color: "red"}}> {error.confirmpassword} </p>}
                            
                        <div className="show-password">
                            <input type="checkbox" id="show-password-checkbox" />
                            <label htmlFor="show-password-checkbox" className="show"
                            >Tampilkan Password</label>
                        </div>
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

export default Register