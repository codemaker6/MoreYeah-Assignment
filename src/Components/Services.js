import food from "../assets/Images/foodmineral.png";
import delivery from "../assets/Images/delivery.png";
import packing from "../assets/Images/package.png";
const Services = () => {
  return (
    <>
      <div className="serviceBlock">
        <div>
          <div className="head">
            <h1 className="serviceHeading">Our services for You</h1>
            <p className="serviceTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="services">
            <div>
              <img className="serviceImage" src={food} alt="food mineral" />
              <h5 className="serviceName">Vitamin and minerals</h5>
              <p className="serviceDetail">
                HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt
              </p>
            </div>
            <div>
              <img className="serviceImage" src={delivery} alt="food mineral" />
              <h5 className="serviceName">On time delivery</h5>
              <p className="serviceDetail">
                HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt
              </p>
            </div>
            <div>
              <img className="serviceImage" src={packing} alt="food mineral" />
              <h5 className="serviceName">Secured Packaging</h5>
              <p className="serviceDetail">
                HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
