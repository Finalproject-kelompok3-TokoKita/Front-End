const Cartlist = ({ cartdata }) => {

  console.log(cartdata)
  return (
    <>
      <div className="products">
        {
          cartdata.map((cart) => (
            <div className="product" key={cart.id}>
              <div className="product-info">
                <h3 className="product-name">{cart.product.name}</h3>
                <p className="khas">{cart.product.description}</p>
                <h4 className="product-offer">{cart.product.price}</h4>
                <p className="product-quantity">
                  Qnt: {cart.quantity}
                </p>
                <p className="product-remove"></p>
              </div>
              <img src={`http://localhost:5000/static/products/${cart.product.photo}`} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Cartlist;
