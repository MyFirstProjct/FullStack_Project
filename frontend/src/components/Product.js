import "./Product.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Product = ({
  productId,
  name,
  price,
  description,
  imageUrl,
  countInStock,
  label,
}) => {
  console.log("===>", productId);
  const pdtname = name;
  return (
    <div className="products">
      <img src={imageUrl} alt={name} className="product_image" />
      <h1 className="info_name" data-testid="heading">
        {label}
      </h1>
      <div className="Product__info">
        <p className="info__name" data-testid="productName">
          {name}
        </p>
        <p className="info__description">{description}</p>
        <p className="info__price">Rs {price}</p>
        <p className="info__countInStock">In Stock - {countInStock}</p>
        <Router>
          <Link to={`/product/${productId}`} className="info__button">
            View
          </Link>
        </Router>
        <code>Product Id -{productId}</code>
      </div>
    </div>
  );
};
export default Product;
