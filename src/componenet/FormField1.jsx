import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FormField = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Have an <span className="text-gray-900">Awsome Project</span> Idea? <span className="text-blue-500">Let's Discuss</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            — Schedule a session and let’s map out the path to your digital success — one smart step at a time
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-6 py-8 space-y-6 border  border-blue-400/40">
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">Company's Description</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2  placeholder:text-xs focus:ring-blue-500/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2  placeholder:text-xs focus:ring-blue-500/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+00-000-0000"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2  placeholder:text-xs focus:ring-blue-500/50"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Which service do you need?</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2  placeholder:text-xs focus:ring-blue-500/50 bg-white"
              required
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-apps">Mobile Apps</option>
              <option value="branding">Branding</option>
              <option value="consulting">Consulting</option>
            </select>
            <FaChevronDown className="absolute right-3 top-10 text-gray-400 pointer-events-none" />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full rounded-full bg-blue-500 text-white py-2  hover:bg-blue-600 transition text-sm font-medium"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormField