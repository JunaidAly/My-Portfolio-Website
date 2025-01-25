import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          About Me
        </h2>

        <div className="bg-white p-12 rounded-lg shadow-xl flex flex-col items-center text-center">
          {/* Profile Picture & Personal Info */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-blue-500 shadow-md mb-4 hover:scale-110 transition-transform duration-300">
              <img
                src="src/assets/junaid.jpg"
                alt="Junaid Ali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Personal Information */}
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Junaid Ali</h3>
              <p className="text-gray-600 font-medium">Full-Stack Developer</p>
              <div className="mt-2 space-y-2">
                <p className="flex items-center justify-center text-gray-700">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  juanidalikhan03@gmail.com
                </p>
                <p className="flex items-center justify-center text-gray-700">
                  <FaPhone className="text-blue-500 mr-2" />
                  +92 349 5328703
                </p>
                <p className="flex items-center justify-center text-gray-700">
                  <FaWhatsapp className="text-blue-500 mr-2" />
                  +92 349 5328703
                </p>
                <p className="flex items-center justify-center text-gray-700">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  Hunza, Gilgit-Baltistan, Pakistan
                  <br />
                  Current Address: Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-blue-600 font-semibold">
                💻 Aspiring MERN Stack Developer
              </span>{" "}
              | Passionate About Web Development & Problem-Solving.
            </p>
            <p className="mt-4 text-gray-600">
              I’m <span className="font-semibold text-gray-800">Junaid Ali</span>, a BS Computer Science graduate from{" "}
              <span className="font-semibold text-blue-500">
                COMSATS University Islamabad
              </span>. My expertise lies in the{" "}
              <span className="font-semibold text-green-600">MERN stack</span>{" "}
              (MongoDB, Express.js, React.js, Node.js), and I enjoy building
              scalable web applications.
            </p>

            {/* Skills List */}
            <div className="mt-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🔹 What I Bring:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold text-blue-600">✔</span> Proficiency in JavaScript, React.js, and Node.js
                </li>
                <li>
                  <span className="font-semibold text-blue-600">✔</span> Experience with API integration & database management (MongoDB, MySQL)
                </li>
                <li>
                  <span className="font-semibold text-blue-600">✔</span> Strong UI/UX design knowledge & responsive web design
                </li>
                <li>
                  <span className="font-semibold text-blue-600">✔</span> Passion for continuous learning & adapting to new technologies
                </li>
              </ul>
            </div>

            {/* Career Goal */}
            <div className="mt-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🔹 Looking for Opportunities:
              </h3>
              <p className="text-gray-600">
                I am actively seeking an internship or entry-level role where I
                can apply my skills, contribute to meaningful projects, and grow
                as a developer. I thrive in collaborative environments and am
                eager to learn from industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
