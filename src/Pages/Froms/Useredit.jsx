import Footer from "../../Components/Footer"
import Nav from "../../Components/Nav"

const Useredit = () => {
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

                                <button type="edit" className="btn-useredit">Ubah Foto Profile</button>
                                <p>
                                    Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                                    file yang diperbolehkan: .JPG .JPEG .PNG
                                </p>
                            </div>
                            <button type="edit" className="btn-useredit">Ubah Password</button>
                        </div>
                        <div className="edit-biodata">
                            <h2>Ubah Data Diri</h2>
                            <form id="form-useredit">
                                <label htmlFor="nama">Nama</label>
                                <input name="nama" type="tel" placeholder="Insyu" className="input-useredit" />
                                <label htmlFor="tgllahir">Tgl Lahir</label>
                                <input
                                    type="text"
                                    placeholder="31/12/1997"
                                    className="input-useredit"
                                />
                                <label htmlFor="jeniskelamin">Jenis Kelamin</label>
                                <input name="jeniskelamin" type="text" placeholder="Perempuan" className="input-useredit" />
                                <h2>Ubah Kontak</h2>
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" placeholder="insyu@gmail.com" className="input-useredit" />
                                <label htmlFor="nohp">No Handphone</label>
                                <input name="nohp" type="tel" placeholder="081343717272" className="input-useredit" />
                                <button type="submit" className="btn-useredit">simpan</button>
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