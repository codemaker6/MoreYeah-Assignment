import star from "../assets/Images/star.png";
import screenshot1 from "../assets/Images/dogshot1.png";
import screenshot2 from "../assets/Images/dogshot2.png";
const Reviews = () => {
  return (
    <>
      <div className="reviewBlock">
        <div>
          <div className="head">
            <h1 className="reviewHeading">
              Our customers reviews for our
              <br /> food delivery satisfaction
            </h1>
            <p className="reviewTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="reviewSection">
            <div className="reviewCard">
              <img className="reviewstar" src={star} alt="star" />
              <img className="reviewstar" src={star} alt="star" />
              <img className="reviewstar" src={star} alt="star" />
              <h5 className="reviewer">Juliana C</h5>
              <p className="reviewContent">
                The best Vets will always suggest you our product Dr. Lizzy Fan
                One of the most exciting innovations in pet food Lorenz Farma
                Dr. Lizzy Fan “One of the most exciting innovations in pet food.
              </p>
            </div>
            <div>
              <img className="shot1" src={screenshot1} alt="review" />
            </div>
            <div>
              <img className="shot2" src={screenshot2} alt="review" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
