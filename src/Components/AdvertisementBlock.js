import dog from "../assets/Images/dog.png";
import Receipe from "./Reciepe";
const AdvertisementBlock = () => {
  return (
    <>
      <div className="advertisementBlock">
        <div className="advertisementSection">
          <div className="heading">
            <h1 className="text">
              best organic <br />
              food for <br />
              your dog
            </h1>
            <p className="para">
              Real food <span className="dot">.</span>Made fresh{" "}
              <span className="dot">.</span>Delivered
            </p>
            <button className="btn btn-warning login" type="submit">
              Sign Up
            </button>
          </div>
          <div className="picture">
            <img className="dogpic" src={dog} alt="dog" />
          </div>
        </div>
      </div>
      <Receipe />
    </>
  );
};
export default AdvertisementBlock;
