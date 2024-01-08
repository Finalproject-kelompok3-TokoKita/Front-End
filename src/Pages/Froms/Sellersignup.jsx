import "./form.css"

const Sellersignup = () => {
    return (
        <>
            <div id="body">
                <div className="login-container">
                    <p className="title">
                        Hallo, <span className="bold">Insyu</span> ayo isi detail toko kamu
                    </p>
                    <form id="form">
                        <label for="nohp">Masukkan NO.HP mu</label>
                        <input
                            name="nohp"
                            type="tel"
                            placeholder="Masukkan NO. HP mu"
                            className="form-input-ezer"
                            required
                        />
                        <label for="namatoko">Masukkan Nama Toko & Nama Domain</label>
                        <input
                            name="namatoko"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            required
                        />
                        <div className="domain">
                            <label for="domain">tokokita.com/</label>
                            <input name="domain" type="url" placeholder="Nama Domain" className="form-input-ezer" required />
                        </div>

                        <label for="alamat">Masukkan Alamat Tokomu</label>
                        <input
                            name="alamat"
                            type="text"
                            placeholder="Nama Toko Kamu"
                            className="form-input-ezer"
                            required
                        />
                        <button type="submit" className="form-btn-ezer">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sellersignup