import Nav from "../Components/Nav"

const Pembayaran = () => {
     return (
          <>
               <div className="container">
                    <Nav />
               </div>
               <div className="container-pembayaran">
                    <form action>
                         <div className="row">
                              <div className="col">
                                   <img className="silang" src="./assets/images/silang.png" alt />
                                   <div className="silang-bayar">Pembayaran</div>
                                   <div className="inputBox">
                                        <div className="metode">Pilih Metode Pembayaran</div>
                                        <span className="metode1">Lihat Semua</span>
                                   </div>
                                   <div className="inputBox1">
                                        <img className="bca" src="./assets/bca.png" alt />
                                        <div className="bcaa">BCA Virtual Account</div>
                                        <img className="metode2" src="./assets/bunder1.png" alt />
                                   </div>
                                   <div className="inputBox1">
                                        <img className="bca" src="./assets/bri.png" alt />
                                        <div className="bcaa">BRI Virtual Account</div>
                                        <img className="metode2" src="./assets/bunder2.png" alt />
                                   </div>
                                   <div className="pem">
                                        <h4>Detail Pembayaran</h4>
                                        <p>Nasi Goreng (1)
                                             <span className="metode3">20.000</span>
                                        </p>
                                        <p>Es Jeruk (1)
                                             <span className="metode4">20.000</span>
                                        </p>
                                   </div>
                                   <p>Total
                                        <span className="metode5">40.000</span>
                                   </p>
                              </div>
                         </div>
                         <input type="submit" defaultValue="pesan" className="submit-btn" />
                    </form>
               </div>




          </>
     )
}

export default Pembayaran