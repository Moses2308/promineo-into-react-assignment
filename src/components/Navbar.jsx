import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="pageNav">
          <ul>
            <a href="../../public/index.html">
              <li>Home</li>
            </a>
            <a href="../../public/index.html">
              <li>About</li>
            </a>
            <a href="../../public/index.html">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </>
    );
  }
}
export default Navbar;
