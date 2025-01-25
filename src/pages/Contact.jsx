import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      alert(data.message);
    },
  });

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800  mb-6">Contact Me</h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Contact Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              rows="5"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-3">Connect with me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/JunaidAly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-gray-600 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/junaid-ali-8679871ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-gray-600 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/junaidaly2054"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-3xl hover:text-gray-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/junaiddianuj.ila.3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-gray-600 transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
