import "./Favorites.css";
import majica from "../../images/majica.jpg";
import jakna from "../../images/jakna.jpg";
import kosulja from "../../images/kosulja.jpg";
import covjek from "../../images/covjek.jpg";
const Favorites = () => {
  return (
    <div className="product-container">
      <div className="product-box">
        <img src={majica} className="product-img"></img>
        <p className="product-header-font">Adidas E Kit Jsy 20</p>
        <p className="product-brand-font">Adidas</p>
        <p className="product-price-font">$88.00</p>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <button className="button-add">ADD TO CART</button>
      </div>

      <div className="product-box">
        <img src={majica} className="product-img"></img>
        <p className="product-header-font">Adidas E Kit Jsy 20</p>
        <p className="product-brand-font">Adidas</p>
        <p className="product-price-font">$88.00</p>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <button className="button-add">ADD TO CART</button>
      </div>
      <div className="product-box">
        <img src={majica} className="product-img"></img>
        <p className="product-header-font">Adidas E Kit Jsy 20</p>
        <p className="product-brand-font">Adidas</p>
        <p className="product-price-font">$88.00</p>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <button className="button-add">ADD TO CART</button>
      </div>
    </div>
  );
};
export default Favorites;
