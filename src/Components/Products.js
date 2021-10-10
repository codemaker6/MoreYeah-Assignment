import product from "../assets/Images/product.png";
import Packaged from "./Packaged";
const Products = () => {
  return (
    <>
      <div className="productBlock">
        <div>
          <div className="head">
            <h1 className="productHeading">Our best selling products</h1>
            <p className="productTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="products">
            <div className="card">
              <img src={product} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product name</h5>
                <p className="card-text">Rs 1000</p>
                <a href="/buynow" class="btn btn-primary buyButton">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card">
              <img src={product} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product name</h5>
                <p className="card-text">Rs 750</p>
                <a href="/buynow" className="btn btn-primary buyButton">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card">
              <img src={product} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">product name</h5>
                <p className="card-text">Rs 450</p>
                <a href="/buynow" className="btn btn-primary  buyButton">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Packaged />
    </>
  );
};
export default Products;
