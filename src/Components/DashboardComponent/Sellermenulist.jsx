import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Sellermenulist = ({ product }) => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [editId, setEditId] = useState();
  const [updateData, setUpdateData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const btnUpdate = (id) => {
    axios
      .get("http://localhost:5000/product/" + id)
      .then((res) => {
        if (res.data.message === "Scucessfully") {
          setUpdateData({
            ...updateData,
            name: res.data.data.name,
            description: res.data.data.description,
            price: res.data.data.price,
            quantity: res.data.data.quantity,
          });
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
    setEditId(id);
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:5000/product/" + editId, updateData)
      .then((res) => {
        if (res.data.message === "Updated") {
          location.reload();
        }
      })
      .then((err) => console.log(err));
  };

  const btnDelete = (id) => {
    axios
      .delete("http://localhost:5000/product/" + id)
      .then((res) => {
        if (res.data.message === "Deleted") {
          location.reload();
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <>
      <div id="dashboard-allmenu" style={{marginBottom:"50px"}}>
        <h2 className="fg" style={{ textAlign: "center" }}>
          Daftar Menu
        </h2>
        <h6 className="fg" style={{ textAlign: "center" }}>
          Total : {Object.keys(product).length}
        </h6>
        <hr />
        <table>
          <thead>
            <tr>
              <th className="fw">Nama Menu</th>
              <th className="fw">Deskripsi</th>
              <th className="fw">Harga</th>
              <th className="fw">Qty</th>
            </tr>
          </thead>
          <tbody>
            {product.map((prod) =>
              prod.id === editId ? (
                <tr>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={updateData.name}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      value={updateData.description}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          description: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="price"
                      value={updateData.price}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, price: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quantity"
                      value={updateData.quantity}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          quantity: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="dashboard-allmenu-action-button"
                      style={{ backgroundColor: "lightseagreen" }}
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>{prod.description}</td>
                  <td>{prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>
                    <button
                      type="button"
                      className="dashboard-allmenu-action-button"
                      style={{ backgroundColor: "lightseagreen" }}
                      onClick={() => btnUpdate(prod.id)}
                    >
                      Ubah
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="dashboard-allmenu-action-button"
                      style={{ backgroundColor: "red" }}
                      onClick={() => btnDelete(prod.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sellermenulist;
