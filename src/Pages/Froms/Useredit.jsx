import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Useredit = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const [data, SetData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    photo: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => {
        if (res.data.message === "Scucessfully") {
          SetData({
            ...data,
            fullName: res.data.data.fullName,
            dateOfBirth: res.data.data.dateOfBirth,
            gender: res.data.data.gender,
            email: res.data.data.email,
            phone: res.data.data.phone,
            photo: res.data.data.photo,
          });
        }
      })
      .then((err) => console.log(err));
  }, []);

  const editUser = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("gender", data.gender);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("file", data.photo);

      const response = await axios.put(
        `http://localhost:5000/users/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.message === "Updated") {
        redirect("/userprofile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <main id="main">
          <div className="head-1">
            <h2>Biodata Diri</h2>
          </div>
          <div className="biodata">
            <form id="form-useredit" onSubmit={editUser}>
              <div className="edit-foto">
                <div className="image-user-profile">
                  <img
                    style={{ height: "345px", width: "345px" }}
                    src={`http://localhost:5000/static/users/${data.photo}`}
                    alt="Foto-Profile"
                    className="img-ezer"
                  />
                  <input
                    type="file"
                    onChange={(e) =>
                      SetData({ ...data, photo: e.target.files[0] })
                    }
                    //onChange={e => setPhoto(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="edit-biodata">
                <h2>Ubah Data Diri</h2>
                <label htmlFor="fullName">Nama</label>
                <input
                  name="fullName"
                  type="text"
                  //value={fullName}
                  className="input-useredit"
                  onChange={(e) =>
                    SetData({ ...data, fullName: e.target.value })
                  }
                  //onChange={e => setfullName(e.target.value)}
                />
                <label htmlFor="tgllahir">Tgl Lahir</label>
                <input
                  type="text"
                  className="input-useredit"
                  name="dateOfBirth"
                  //value={dateOfBirth}
                  onChange={(e) =>
                    SetData({ ...data, dateOfBirth: e.target.value })
                  }
                  //onChange={e => setDateOfBirth(e.target.value)}
                />
                <label htmlFor="jeniskelamin">Jenis Kelamin</label>
                <input
                  name="gender"
                  type="text"
                  // value={data.gender}
                  className="input-useredit"
                  onChange={(e) => SetData({ ...data, gender: e.target.value })}
                  //onChange={e => setGender(e.target.value)}
                />
                <h2>Ubah Kontak</h2>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input-useredit"
                  //value={data.email}
                  onChange={(e) => SetData({ ...data, email: e.target.value })}
                  //onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="nohp">No Handphone</label>
                <input
                  name="phone"
                  type="text"
                  className="input-useredit"
                  //value={data.phone}
                  onChange={(e) => SetData({ ...data, phone: e.target.value })}
                  //onChange={e => setPhone(e.target.value)}
                />
                <button type="submit" className="btn-useredit">
                  simpan
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Useredit;
