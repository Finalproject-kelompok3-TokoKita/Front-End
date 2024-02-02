import { Link } from "react-router-dom"
import { profile } from "../../utils/images"

const Userbio = ({ userdata }) => {

    const photo = userdata.photo

    return (
        <>
            <div className="wrapper">
                <div className="left">
                    {
                        photo ?
                            <img src={`http://localhost:5000/static/users/${userdata.photo}`} width={100} />
                            :
                            <img src={profile} width={100} />
                    }
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
                                <h5>
                                    {userdata.fullName}
                                </h5>
                                <h5>
                                    {userdata.dateOfBirth}
                                </h5>
                                <h5>
                                    {userdata.gender}
                                </h5>
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
                                <h5>
                                    {userdata.email}
                                </h5>
                                <h5>
                                    {userdata.phone}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/editprofile/${userdata.id}`}><button className="">edit user</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userbio