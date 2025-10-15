import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import "./App.css";
import RightSidebar from "./RightSidebar";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/images/white-shoes.jpg",
      name: "Sketchers",
      price: 991,
      discount: "51%",
    },
    {
      id: 2,
      image: "/images/Phone.jpg",
      name: "IPhone 13pro",
      price: 79999,
      discount: "30%",
    },
    {
      id: 3,
      image: "/images/polarized sunglasses.jpg",
      name: "Polarized Sunglass",
      price: 1150,
      discount: "25%",
    },
    {
      id: 4,
      image: "/images/rackets.jpg",
      name: "Yonex Nanoray Light",
      price: 1998,
      discount: "31%",
    },
    {
      id: 5,
      image: "/images/shuttle shoes.jpg",
      name: "Yonex shuttle shoe",
      price: 510,
      discount: "50%",
    },
    {
      id: 6,
      image: "/images/Titan-watches.jpg",
      name: "Titan",
      price: 4500,
      discount: "15%",
    },
  ]);

  return (
    <div className="main-container">
      <Header />
      <div className="body-container">
        <LeftSidebar products={products} setProducts={setProducts} />
        <RightSidebar products={products} />
      </div>
    </div>
  );
}

export default App;
