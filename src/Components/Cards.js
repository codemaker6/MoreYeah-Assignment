import Footer from "./Footer";

const Cards = () => {
  return (
    <>
      <div className="cardBlock">
        <div>
          <div className="cardSection">
            <h4 className="cardHeading">
              Get The best Food Now For <br /> Your Pet
            </h4>
            <div className="cardContent">
              <h6 className="cardTitle">
                Get fresh food conveniently delivered with our <br />
                secured delivery partners.
              </h6>
              <div className="buttonSection">
                <a href="/buynow" className="btn btn-warning cardButton">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cards;
