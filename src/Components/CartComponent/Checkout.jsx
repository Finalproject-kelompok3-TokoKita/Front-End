const Checkout = () => {
    return (
        <>
            <div className="cart-total">
                <h3 className="bayar">Detail Pembayaran</h3>
                <p>
                    <span className="span">Nasi Goreng (1)</span>
                    <span className="span">10k</span>
                </p>
                <p>
                    <span className="span">Ayam Goreng (1)</span>
                    <span className="span">15k</span>
                </p>
                <p>
                    <span className="span">Total Pembayaran</span>
                    <span className="span">25k</span>
                </p>
                <a href="#">Pilih Pembayaran</a>
            </div>
        </>
    )
}

export default Checkout