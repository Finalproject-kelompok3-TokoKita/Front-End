import { Link } from "react-router-dom";
import kakap from "../../assets/kakap.jpg";

const Userbio = ({ userdata }) => {
  return (
    <div className="p-12 font-inter flex justify-center min-h-screen">
      <div className="bg-primarybg shadow-lg w-2/3 h-[360px] p-8 flex flex-col gap-4 rounded-lg">
        <div>
          <h1 className="font-bold text-lg">{userdata.fullName}</h1>
        </div>
        <div className="flex gap-8">
          <div className="w-[240px] h-[240px]">
            <img
              src={kakap}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-lg">
              <h1>Nama: {userdata.fullName}</h1>
              <h4>Tanggal Lahir: {userdata.dateOfBirth} </h4>
              <h4>Jenis Kelamin: {userdata.gender} </h4>
              <h4>Email: {userdata.email}</h4>
              <h4>No. HP: {userdata.phone}</h4>
            </div>
            <button
              className="h-10 px-6 font-bold rounded-md bg-primary text-white w-[200px]"
              type="submit">
              <Link to={`/editprofile/${userdata.id}`}>Edit Profil</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userbio;
