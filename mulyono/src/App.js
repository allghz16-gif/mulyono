import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import dhika from "./pages/dhika";
import haoiz from "./pages/hapiz";
import zaki from "./pages/zaki";
import james from "./pages/james";
import navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika-alghazali" element={<Dhika />} />
        <Route path="/james" element={<James />} />
        <Route path="/hapiz" element={<Hapiz />} />
        <Route path="/zaki" element={<Zaki />} />
      </Routes>
    </Router>
  );
}

export default App;