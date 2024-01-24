import axios from "axios"

const Userbio = ({userdata}) => {

    return (
        <>
            <div className="wrapper">
                <div className="left">
                    <img src="./assets/images/prof.png" alt="user" width="100" />
                    <button className="ubah">Ubah Foto Profil</button>
                    <p className="file">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                    <button className="ubah2">Ubah Password</button>


                </div>
                <div className="right">
                    <div className="info">
                        <h3>Ubah Biodata Diri</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Nama</h4>
                                <h4>Tanggal Lahir</h4>
                                <h4>Jenis Kelamin</h4>
                            </div>
                            <div className="data">
                                <h5>{userdata.fullName} <span>Ubah</span></h5>
                                <h5>{userdata.dateOfBirth} <span>Ubah</span></h5>
                                <h5>{userdata.gender} <span>Ubah</span></h5>
                            </div>
                        </div>
                    </div>

                    <div className="projects">
                        <h3>Ubah Kontak</h3>
                        <div className="projects_data">
                            <div className="data">
                                <h4>Email</h4>
                                <h4>No Hp</h4>
                            </div>
                            <div className="data">
                                <h5>{userdata.email} <span>Ubah</span></h5>
                                <h5>{userdata.phone} <span>Ubah</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Userbio