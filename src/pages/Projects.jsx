// src/pages/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-blue-600">
              Organization Task Tracker
            </h3>
            <p className="text-gray-700 mt-2">
              Developed using{" "}
              <span className="font-semibold">Angular (front end)</span> and{" "}
              <span className="font-semibold">Laravel (back end)</span> to
              manage organizational tasks efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Role-based access control</li>
              <li>Real-time notifications & task tracking</li>
              <li>User-friendly dashboard for task management</li>
            </ul>

            <a
              href="https://www.youtube.com/watch?v=uwpQyfTYeJ0"
              className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            >
              🔗 Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105  hover:font-semibold">
            <h3 className="text-2xl font-bold text-green-600">Tea Station</h3>
            <p className="text-gray-700 mt-2">
              Built with the{" "}
              <span className="font-semibold">HTML, CSS and JavaScript</span> to
              offer a seamless ordering experience for tea products.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Interactive product catalog</li>
              <li>Interactive Animations and Transitions</li>
              <li>Made Responsive Using Css Media Queries</li>
            </ul>
            <a
              href="https://snazzy-syrniki-96c61e.netlify.app/"
              className="inline-block mt-4 text-green-500 font-semibold hover:underline"
            >
              🔗 Live Demo
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105  hover:font-semibold">
            <h3 className="text-2xl font-bold text-purple-600">
              E-commerce Website
            </h3>
            <p className="text-gray-700 mt-2">
              Developed using{" "}
              <span className="font-semibold">React.js (front end)</span> to
              support online product sales.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Shopping cart & secure payment gateways</li>
              <li>Admin dashboard for inventory management</li>
              <li>Product reviews & order tracking</li>
            </ul>
            <a
              href="https://capable-torrone-467511.netlify.app/"
              className="inline-block mt-4 text-purple-500 font-semibold hover:underline"
            >
              🔗 Live Demo
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-green-600">
              Task Management App
            </h3>
            <p className="text-gray-700 mt-2">
              Built using the <span className="font-semibold">MEAN Stack</span>{" "}
              (MongoDB, Express.js, Angular, Node.js) for seamless task
              tracking.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>User authentication & role-based access control</li>
              <li>Task creation, assignment & real-time updates</li>
              <li>Interactive dashboard with analytics</li>
            </ul>
            <a
              href="https://github.com/JunaidAly/crud-task-fe.git"
              className="inline-block mt-4 text-green-500 font-semibold hover:underline"
            >
              🔗 Repository Link
            </a>
          </div>

          {/* Project 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-blue-600">
              Attendance Management System
            </h3>
            <p className="text-gray-700 mt-2">
              Developed using the{" "}
              <span className="font-semibold">Frontend (Html,css)</span>{" "}
              Backend(MongoDB, Express.js,Node.js) for efficient attendance
              tracking.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Role-based user authentication (Admin, Teacher, Student)</li>
              <li>Automated attendance tracking with real-time updates</li>
              <li>Detailed reports & analytics for attendance monitoring</li>
            </ul>
            <a
              href="https://github.com/JunaidAly/Attendance-Management-System.git"
              className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            >
              🔗 Repository Link
            </a>
          </div>

          {/* Project 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-red-600">
              Cargo Booking System
            </h3>
            <p className="text-gray-700 mt-2">
              Developed using <span className="font-semibold">Laravel</span>,
              this system streamlines the process of managing and scheduling
              cargo shipments efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Real-time cargo tracking & shipment management</li>
              <li>Seamless integration with payment gateways</li>
              <li>Automated notifications & detailed reporting</li>
              <li>Route optimization for efficient logistics coordination</li>
            </ul>
            <a
              href="https://github.com/JunaidAly/Cargo_Booking_System_in_Laravel.git"
              className="inline-block mt-4 text-red-500 font-semibold hover:underline"
            >
              🔗 Repository Link
            </a>
          </div>

          {/* Project 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-blue-600">
              Veterinary Management System
            </h3>
            <p className="text-gray-700 mt-2">
              This project explores the fundamental concepts of{" "}
              <span className="font-semibold">
                Object-Oriented Programming (OOP)
              </span>{" "}
              in Java. It implements core Java features to enhance understanding
              and practical application.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>File Handling for data storage & retrieval</li>
              <li>Exception Handling to manage runtime errors</li>
              <li>Graphical User Interface (GUI) implementation in Java</li>
              <li>Practical demonstration of OOP principles</li>
            </ul>
            <a
              href="https://github.com/JunaidAly/Veterinary_Management_System_in_Java_OOP.git"
              className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            >
              🔗 Source Code
            </a>
          </div>

          {/* Contract Management System */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-green-600">
              Contract Management System
            </h3>
            <p className="text-gray-700 mt-2">
              A desktop application built with{" "}
              <span className="font-semibold">C# in Visual Studio</span> for
              managing contracts efficiently. The system enables CRUD operations
              with a MySQL database, offering a seamless user experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>✅ Create, Read, Update, and Delete (CRUD) contracts</li>
              <li>✅ MySQL database integration for secure data storage</li>
              <li>✅ User-friendly C# Windows Forms (WinForms) interface</li>
              <li>✅ Data validation & exception handling</li>
            </ul>
            <a
              href="https://github.com/JunaidAly/Contract_management_system_in_c-_desktop_app.git"
              className="inline-block mt-4 text-green-500 font-semibold hover:underline"
            >
              🔗 Source Code
            </a>
          </div>

          {/* Project 9 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:font-semibold">
            <h3 className="text-2xl font-bold text-blue-600">
              Mobile Applications (React Native)
            </h3>
            <p className="text-gray-700 mt-2">
              Developed multiple mobile applications using{" "}
              <span className="font-semibold">React Native</span>, providing
              cross-platform compatibility for both Android and iOS. These apps
              ensure high performance, responsive UI, and seamless user
              experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>📱 Cross-platform apps for Android & iOS</li>
              <li>🔗 API integration for real-time data fetching</li>
              <li>💡 Smooth UI/UX with custom components</li>
              <li>
                ⚡ Performance optimization for fast and efficient execution
              </li>
            </ul>
            <a
              href="https://github.com/JunaidAly/Mobile-Application-Development.git"
              className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            >
              🔗 Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
