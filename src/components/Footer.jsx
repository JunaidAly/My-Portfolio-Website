import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/JunaidAly" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/junaid-ali-8679871ab/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/junaidaly2054?igsh=dHY4ZzVldHY1eW8%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/junaiddianuj.ila.3?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-gray-300 transition duration-300" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-lg font-medium">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
