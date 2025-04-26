import user_info from "../../data/user_info.js";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("C_YyGp_TcFPgYx-zu");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get current time
      const now = new Date();
      const time = now.toLocaleString();

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: time,
      };

      await emailjs.send(
        "service_w62ncsa",
        "template_wmjxkxq",
        templateParams,
        "C_YyGp_TcFPgYx-zu"
      );

      // Show success toast
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      // Show error toast
      toast.error("Failed to send message.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* TITLE */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* DESCRIPTION + FORM */}
      <div className="mt-12 flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col w-full lg:w-1/2 gap-2">
          {/* Description */}
          <p className="leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
            {user_info.contact.description}
          </p>
          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            <a
              href={user_info.socials.github}
              className="flex flex-col text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
            >
              <FaGithub className="self-center text-xl text-red-800 dark:text-red-500 transition hover:scale-[150%]" />
              {/* <span className="self-center">github</span> */}
            </a>

            <a
              href={user_info.socials.twitter}
              className="flex flex-col text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 "
            >
              <FaSquareXTwitter className="self-center text-xl text-red-800 dark:text-red-500 transition hover:scale-[150%]" />
              {/* <span className="self-center">X(twitter)</span> */}
            </a>

            <a
              href={user_info.socials.linkedin}
              className="flex flex-col text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 "
            >
              <FaLinkedin className="self-center text-xl text-red-800 dark:text-red-500 transition hover:scale-[150%]" />
              {/* <span className="self-center">linkedin</span> */}
            </a>

            <a
              href={`mailto:${user_info.main.email}`}
              className="flex flex-col text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
            >
              <MdEmail className="self-center text-xl text-red-800 dark:text-red-500 transition hover:scale-[150%]" />
              {/* <span>email</span> */}
            </a>
          </div>
        </div>
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-md dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-md dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-md dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-700 transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
