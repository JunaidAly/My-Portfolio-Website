import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            My Portfolio
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-center py-4 space-y-4">
          <li>
            <Link
              to="/"
              className="block text-lg font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-lg font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-lg font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
