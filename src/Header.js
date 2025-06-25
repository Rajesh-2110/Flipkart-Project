import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">Flipkart</div>
      <input
        type="search"
        className="search-bar"
        placeholder="search for products,brands an more"
      />
      <button className="login">LOGIN</button>
      <a href="#">Become a Seller</a>
      <select name="menu" className="more-menu" required>
        <option disabled selected hidden>
          More
        </option>
        <option>Notification Preferences</option>
        <option>24x7 Customer Care</option>
        <option>Advertise</option>
        <option>Download App</option>
      </select>
      <a href="#">Cart</a>
    </div>
  );
}

export default Header;   