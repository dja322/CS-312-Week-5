import React from "react";

//Makes footer components that shows Copyrigtht year at bottom of page
function Footer() {
  var year =  new Date().getFullYear();
  return (
    <footer>
        <p>Copyright © {year} </p>
    </footer>
  );
}

export default Footer;
