import React from "react";
//import components used
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

//creates app componenet that will be used in root
function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

//exports element
export default App;
