import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        Coding Tracker
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/tracker" className="hover:text-gray-300">Tracker</Link>
      </div>
    </nav>
  );
}
