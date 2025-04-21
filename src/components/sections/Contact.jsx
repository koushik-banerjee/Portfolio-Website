import user_info from "../../data/user_info.js";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormStatus(null);

    // Add your form submission logic here, like using an API or email service
    // Simulating a form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Thank you for reaching out! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000); // Simulated delay
  };

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== CONTACT FORM =========== */}
      <form onSubmit={handleSubmit} className="mt-12">
        {/* Name */}
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

        {/* Email */}
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

        {/* Subject */}
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 border border-zinc-300 rounded-md dark:bg-zinc-950 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-800 dark:focus:ring-red-500"
            required
          />
        </div>

        {/* Message */}
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

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-700 transition-all duration-300"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </div>

        {/* Form Status */}
        {formStatus && (
          <p className="mt-4 text-green-600 dark:text-green-400 font-medium">
            {formStatus}
          </p>
        )}
      </form>

      {/* =========== SOCIAL ICONS =========== */}
      <div className="mt-12">
        <a
          href={user_info.socials.github}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
        >
          <FaGithub className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Github</span>
        </a>

        <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>

        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Linkedin</span>
        </a>

        <hr className="mt-6 w-72 border dark:border-zinc-800" />

        {/* Email */}
        <a
          href={`mailto:${user_info.main.email}`}
          className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-300"
        >
          <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
          <span>{user_info.main.email}</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
