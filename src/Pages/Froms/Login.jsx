import "./form.css"

const Login = () => {
    return (
        <>
            <body id="body">
                <div className="login-container">
                    <h1 className="title">Tokokita</h1>
                    <form id="form">
                        <input className="form-input-ezer" type="text" placeholder="Username or Email address" required />
                        <a href="" style={{ textAlign: "right" }}>Lupa Password</a>
                        <input className="form-input-ezer" type="password" placeholder="Password" required />
                        <button className="form-btn-ezer" type="submit">Login</button>
                    </form>
                    <p style={{ textAlign: "center" }}>
                        Baru di Tokokita
                        <a href="" className="a-link-ezer" style={{ fontWeight: "bold" }}>Daftar</a>
                    </p>
                </div>
            </body>
        </>
    )
}

export default Login