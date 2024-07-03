import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";

//gets root elements that components can then be placed on
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  root
);
