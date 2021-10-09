import logo from "../assets/Images/logo.png";
import AdvertisementBlock from "./AdvertisementBlock";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white Navbar"
        id="navbar"
      >
        <div className="container-fluid">
          <img className="logo" src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/products"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/diary">
                      Diary App
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/foodorder">
                      Food Ordering App
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/hotel">
                      Hotel Booking App
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Review"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/faqs">
                  FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-warning login" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      <AdvertisementBlock />
    </>
  );
};
export default Navbar;
