import "./RightSidebar.css";

function RightSidebar({ products }) {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-img" />
          <p className="brand-name">{product.name}</p>
          <p className="price">
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
          <p className="discount">{product.discount} off</p>
          <span className="hot-deal">hot-deal</span>
        </div>
      ))}
    </div>
  );
}

export default RightSidebar;
