import receipe from "../assets/Images/receipe.png";
import Services from "./Services";
const Receipe = () => {
  return (
    <>
      <div className="ReceipeBlock">
        <div>
          <div className="head">
            <h2 className="mainHeading">Freshly made food for good health.</h2>
            <p className="paraTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="ReceipeSection">
            <div>
              <div>
                <h4 className="receipeheading">Real food</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
              <div className="margin">
                <h4 className="receipeheading">Standard Kitchen</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
            </div>
            <div className="receipeImageBlock">
              <img className="receipeImage" src={receipe} alt="receipe" />
            </div>
            <div>
              <div>
                <h4 className="receipeheading">Made Fresh</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
              <div className="margin">
                <h4 className="receipeheading">Expert Tested</h4>
                <p className="receipeTitle">
                  Made Fresh Human-grade meat
                  <br /> and veggies in simple recipes, <br />
                  made for dogs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonBlock">
          <button className="btn btn-warning button" type="submit">
            see your receipes
          </button>
        </div>
      </div>
      <Services />
    </>
  );
};
export default Receipe;
