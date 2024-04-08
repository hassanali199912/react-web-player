import { Link } from "react-router-dom";

export default function Nav() {
  const showMinue = (e) => {
    const minue = document.querySelector(".container_nav");
    minue.classList.remove("show");
  };

  return (
    <>
      <div className="container_nav">
        <div className="logo">
          <h3 className="h3">Logo</h3>
        </div>
        <div className="container_nav_manue_btn">
          <button className="menue_btns btn" onClick={showMinue}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <Link to={"/radios"} onClick={showMinue}>
                <i className="fa fa-heart" />
                Raido
              </Link>
            </li>
            <li>
              <Link to={"/readers"} onClick={showMinue}>
                <i className="fa fa-play" />
                Readers
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={showMinue}>
                <i className="fa fa-search" />
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={showMinue}>
                <i className="fa fa-phone" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="copyright">
          {" "}
          <p>Made With Love ❤💕</p>
        </div> */}
      </div>
    </>
  );
}
