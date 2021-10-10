import {
  PhoneIcon,
  AddressIcon,
  EmailIcon,
  FaceBookIcon,
  InstaIcon,
  Arrow,
} from "./CustomIcon";
const Footer = () => {
  return (
    <>
      <div className="footerBlock">
        <div className="footerSection">
          <div className="infoSection">
            <AddressIcon className="icon" />
            <p className="infoTitle">Address</p>
          </div>
          <div className="infoSection">
            <PhoneIcon className="icon" />
            <p className="infoTitle">Contact</p>
          </div>
          <div className="infoSection">
            <EmailIcon className="icon" />
            <p className="infoTitle">Email</p>
          </div>
        </div>
        <div>
          <ul className="orderlist">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="review">Reviewa</a>
            </li>
            <li>
              <a href="Login">Log in</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="socialInfo">
            <li>
              <a href="/facebook">
                <FaceBookIcon />
              </a>
            </li>
            <li>
              <a href="insta">
                <InstaIcon />
              </a>
            </li>
            <li>
              <a href="/facebook">
                <FaceBookIcon />
              </a>
            </li>
            <li>
              <a href="/insta">
                <InstaIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="userContact">
          <div>
            <p className="userTip">Free health and Nutrition tips</p>
            <div className="inputSection">
              <input
                className="emailInput"
                type="text"
                placeholder="Enter email"
              />
              <button type="submit" className="submitButton">
                <Arrow />
              </button>
            </div>
          </div>
          <div>
            <p className="userDetail">
              Made with Love in India
              <br />
              @2021 codemaker
              <br />
              Privacy Policy & Term and Condition
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
