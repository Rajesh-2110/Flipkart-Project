import "./RightSidebar.css";
import whiteShoes from './white-shoes.jpg';
import phone from './Phone.jpg'
import sunglasses from './polarized sunglasses.jpg';
import rackets from './rackets.jpg';
import shoes from './shuttle shoes.jpg';
import watch from './Titan-watches.jpg';

function RightSidebar(){
    const shoeprice = 991;
    const phprice = 70000;
    const sunglass = 1101;
    const yonex = 1550;
    const shuttle_shoes = 510;
    const titan_watch = 4200;
    return(
        <div className='card-container'>
        <div className="card">
            <img src={whiteShoes} alt="white-shoe" className="product-img" />
            <p className="brand-name">Sketchers</p>
            <p className="price">
              {shoeprice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </p>
            <p className="discount">51% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>
       
        <div className="card">
            <img src={phone} alt="iphone" className='product-img' />
            <p className="brand-name">IPhone 13 Pro</p>
            <p className="price">
              {phprice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </p>
            <p className="discount">30% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>

        <div className="card">
            <img src={sunglasses} alt="sunglass" className='product-img' />
            <p className="brand-name">Polarized sunglass</p>
            <p className="price">
              {sunglass.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </p>
            <p className="discount">20% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>

        <div className="card">
            <img src={rackets} alt="shuttle-rackets" className='product-img' />
            <p className="brand-name">Yonex</p>
            <p className="price">
              {yonex.toLocaleString('en-IN',{style: 'currency', currency: 'INR'})}
            </p>
            <p className="discount">11% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>
 
        <div className="card">
            <img src={shoes} alt="shuttle-shoes" className='product-img' />
            <p className="brand-name">Victor</p>
            <p className="price">
              {shuttle_shoes.toLocaleString('en-IN',{style:'currency',currency: 'INR'})}
            </p>
            <p className="discount">50% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>

        <div className="card">
            <img src={watch} alt="titan-watch" className='product-img' />
            <p className="brand-name">Titan</p>
            <p className="price">
              {titan_watch.toLocaleString('en-IN',{style:'currency',currency: 'INR'})}
            </p>
            <p className="discount">50% off</p>
            <span className="hot-deal">Hot Deal</span>
        </div>
          
        </div>
    );
}

export default RightSidebar;