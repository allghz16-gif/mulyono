import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/dhika-alghazali">Dhika</Link>
      <Link to="/hapiz">Hapiz</Link>
      <Link to="/zaki">Zaki</Link>
      <Link to="/james">James</Link>
    </div>
  );
}

export default Navbar;