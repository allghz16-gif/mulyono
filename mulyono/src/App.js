import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Dhika from "./pages/dhika";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika-alghazali" element={<Dhika />} />
      </Routes>
    </Router>
  );
}

export default App;