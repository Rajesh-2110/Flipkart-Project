import "./RightSidebar.css";
import whiteShoes from "./white-shoes.jpg";
import phone from "./Phone.jpg";
import sunglasses from "./polarized sunglasses.jpg";
import rackets from "./rackets.jpg";
import shoes from "./shuttle shoes.jpg";
import watch from "./Titan-watches.jpg";

function RightSidebar() {
  const products = [
    {
      id: 1,
      image: whiteShoes,
      name: "Sketchers",
      price: 991,
      discount: "51%",
    },
    {
      id: 2,
      image: phone,
      name: "IPhone 13pro",
      price: 79999,
      discount: "30%",
    },
    {
      id: 3,
      image: sunglasses,
      name: "Polarized Sunglass",
      price: 1150,
      discount: "25%",
    },
    {
      id: 4,
      image: rackets,
      name: "Yonex Nanoray Light",
      price: 1998,
      discount: "31%",
    },
    {
      id: 5,
      image: shoes,
      name: "Yonex shuttle shoe",
      price: 510,
      discount: "50%",
    },
    {
      id: 6,
      image: watch,
      name: "Titan",
      price: 4500,
      discount: "15%",
    },
  ];

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
