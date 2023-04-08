import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from './Components/header';
import Introduction from './Components/introduction';

function App() {
  return (
    <div className="App">
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Introduction patents ="./assets/patents.jpg" login = "KapilThaman"/>} />
    </Routes>
    {/* <Footer /> */}
  </div>
  );
}

export default App;
