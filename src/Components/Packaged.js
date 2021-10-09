import product from "../assets/Images/product.png";
const Packaged = () => {
  return (
    <>
      <div className="ReceipeBlock">
        <div>
          <div className="head">
            <h2 className="mainHeading">
              Special secured packaging with multiple layers
            </h2>
            <p className="paraTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="ReceipeSection">
            <div>
              <div>
                <h4 className="receipeheading">Feature 1</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
              <div className="margin">
                <h4 className="receipeheading">Feature 2</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
            </div>
            <div className="receipeImageBlock">
              <img className="receipeImage" src={product} alt="receipe" />
            </div>
            <div>
              <div>
                <h4 className="receipeheading">Feature 3</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
              <div className="margin">
                <h4 className="receipeheading">Feature 4</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Packaged;
