import logo from "./images/ReactLogoL.png";

function Header() {
  return (
    <div className="pt-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h1 pt-4 m-2 text-white-50">
        REACT COURSE - CountOpedia
      </span>
    </div>
  );
}
export default Header;
