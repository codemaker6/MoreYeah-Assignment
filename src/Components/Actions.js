import profile from "../assets/Images/profile.png";
import star from "../assets/Images/star.png";
const Actions = () => {
  return (
    <>
      <div className="ActionBlock">
        <div>
          <div className="head">
            <h1 className="actionHeading">
              The Best Vets will always <br />
              Suggest you our product
            </h1>
          </div>
          <div className="profileContent">
            <div>
              <div className="profileSection">
                <img src={profile} alt="profile" />
                <p className="profileTitle">
                  Dr kerry pat
                  <br />
                  Lorent forma
                </p>
              </div>
              <div className="profileSection">
                <img src={profile} alt="profile" />
                <p className="profileTitle">
                  Dr kerry pat
                  <br />
                  Lorent forma
                </p>
              </div>
              <div className="profileSection">
                <img src={profile} alt="profile" />
                <p className="profileTitle">
                  Dr kerry pat
                  <br />
                  Lorent forma
                </p>
              </div>
            </div>
            <div>
              <div>
                <h5 className="actionTitle">
                  One Of the Most Exciting Innovation In <br />
                  Pet Food
                </h5>
                <img className="star" src={star} alt="star" />
                <img className="star" src={star} alt="star" />
                <img className="star" src={star} alt="star" />
                <p className="content">
                  The best Vets will always suggest you our product Dr. Lizzy
                  Fan One of the most exciting innovations in pet food Lorenz
                  Farma Dr. Lizzy Fan “One of the most exciting innovations in
                  pet food, The Farmer’s Dog is a safe alternative to
                  conventional brands.One of the most exciting innovations in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Actions;
