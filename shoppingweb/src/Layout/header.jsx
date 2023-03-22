/*
 */
import logo from "../images/react.png";
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function MainHeader() {
  return (
    <div className="pt-3 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h1 pt-4 text-white-50">REACT COURSE - TaskOPedia</span>
    </div>
  );
}
function SubHeader() {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be an exciting course.
    </p>
  );
}

const Headers = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default Headers;
