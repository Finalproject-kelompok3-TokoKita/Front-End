const Sellermenulist = ({ product }) => {
    return (
        <>
            <div id="dashboard-allmenu">
                <h2 style={{ textAlign: "center" }}>Daftar Menu</h2>
                <form action="" method="get" style={{ marginBottom: "20px" }}>
                    <input type="text" name="" id="" className="dasboard-filter-form" placeholder="Cari produk" />
                    <select name="" id="" className="dasboard-filter-form" style={{ margin: "0 16px" }}>
                        <option value="">Makanan</option>
                        <option value="">Jajanan</option>
                        <option value="">Minuman</option>
                        <option value="">Gorengan</option>
                    </select>
                    <select name="" id="" className="dasboard-filter-form">
                        <option value="">Terbanyak jual</option>
                        <option value="">dst</option>
                        <option value="">dst</option>
                        <option value="">dst</option>
                    </select>
                </form>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Nama Menu</th>
                            <th>Harga</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.quantity}</td>
                                    <td><button type="button" className="dashboard-allmenu-action-button"
                                        style={{ backgroundColor: "lightseagreen" }}>Ubah</button></td>
                                    <td><button type="button" className="dashboard-allmenu-action-button"
                                        style={{ backgroundColor: "red" }}>Hapus</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Sellermenulist