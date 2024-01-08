import "./form.css"

const Register = () => {
    return (
        <>
            <body id="body">
                <div className="register-container">
                    <h1 className="title">Daftar</h1>
                    <form id="form">
                        <input className="form-input-ezer" type="text" placeholder="Username" required />
                        <input className="form-input-ezer" type="email" placeholder="Email" required />
                        <input className="form-input-ezer" type="password" id="password" placeholder="Password" required />
                        <input
                            className="form-input-ezer"
                            type="password"
                            id="confirm-password"
                            placeholder="Ulangi Password"
                            required
                        />
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
            </body>
        </>
    )
}

export default Register