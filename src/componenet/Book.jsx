import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Book = () => {
  return (
    <section className="relative w-full py-14 px-2 bg-gradient-to-b from-white via-blue-50 to-pink-100 bg-[url('/src/img/bgb.png')] bg-clip-border bg-cover">
      <div className="max-w-6xl mx-auto">
        {/* Call to Action */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-gray-600 "> Awsome Project Idea?</span> <br />
            <span className="text-yellow-300 font-light">
              Let&apos;s Discuss
            </span>
          </h2>
          <p className="text-gray-500 mb-4">
            Project rates from $250 per active session.
          </p>
          <Link
            to="/book-session"
            className="inline-block shadow-blue-600  bg-whitet hover:bg-blue-600 text-gary-600  px-6 py-2 rounded-full shadow transition"
          >
            Book a Session
          </Link>
        </div>
        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/80 rounded-2xl shadow-lg p-6 md:p-8">
          {/* Left - Statement */}
          <div className="col-span-1 flex flex-col justify-between text-center md:text-start">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Every Project matters.
            </h3>
            <p className="text-gray-500 text-sm">
              OiO &copy; 2025 All rights reserved. Design by OiO
            </p>
          </div>
          {/* Social */}
          <div className="col-span-1 text-center md:text-start ">
            <h4 className="font-semibold text-gray-700 mb-2">Social</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-gray-700 hover:text-black transition" />
              </a>
            </div>
          </div>
          {/* Actions */}
          <div className="col-span-1 text-center md:text-start">
            <h4 className="font-semibold text-gray-700 mb-2">Actions</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/services" className="text-blue-500 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-blue-500 hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-blue-500 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-1 text-center md:text-start  ">
            <h4 className="font-semibold text-gray-700 mb-2">Newsletter</h4>

            <p className="text-xs text-gray-400 mt-1">Stay up to date</p>
            <form className="flex justify-between rounded-full bg-gray-300 p-1 my-2  ">
              <input
                type="email"
                className="rounded px-1 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-xs w-3/5 "
                placeholder="Your email"
                aria-label="Email"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white  px-3 py-1 hover:bg-gray-900 transition rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 w-full p-2 rounded-3xl -mt-3  px-3 bottom-1.5 text-center font-bold text-2xl text-gray-700 ">
          O <span className="text-white">i </span>
          O
        </div>
      </div>
    </section>
  );
};

export default Book;
