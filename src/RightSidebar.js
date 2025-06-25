import whiteShoes from './white-shoes.jpg';
import "./RightSidebar.css";

function RightSidebar(){
    const price = 991;
    return(
        <div className="card">
            <img src={whiteShoes} alt="white-shoe" className="product-img" />
            <p className="brand-name">Sketchers</p>
            <p className="price">
              {price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </p>
            <p className="discount">51% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>

    );
}

export default RightSidebar;