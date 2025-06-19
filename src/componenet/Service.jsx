import React from 'react'
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaCode, FaCogs, FaLifeRing } from 'react-icons/fa';
import serv1 from "../img/serv1.png"
import serv2 from "../img/serv2.png"
import serv3 from "../img/serv3.png"
import serv4 from "../img/serv4.png"

const services = [
  {
    title: 'UI/UX Design',
    description:
      'We focus on creating seamless, user-centered experiences that are visually appealing, easy to navigate, and aligned with your business goals.',
    icon: <FaPaintBrush className="text-3xl text-blue-500" />,
    link: '/services/ui-ux',
    image: serv1,
    highlight: true,
  },
  {
    title: 'Web Development',
    description:
      'We use the latest technologies and frameworks to ensure your website is not only beautiful but also performs flawlessly across all devices and browsers.',
    icon: <FaCode className="text-3xl text-purple-500" />,
    link: '/services/web-development',
    image:  serv2,
  },
  {
    title: 'Custom App Dev.',
    description:
      'We learn to understand your processes, then develop intuitive solutions that automate tasks, improve efficiency, and deliver measurable value.',
    icon: <FaCogs className="text-3xl text-green-500" />,
    link: '/services/custom-app',
    image:  serv3,
  },
  {
    title: 'Technical Support',
    description:
      'We offer continuous technical support and maintenance to ensure your website or application stays secure, up-to-date, and fully functional.',
    icon: <FaLifeRing className="text-3xl text-cyan-500" />,
    link: '/services/support',
    image:  serv4,
  },
];

const  Service =() =>{
  return (
    <section className="pt-4 px-6 mb-20 bg-white bg-[url('/src/img/Background.png')] bg-clip-border bg-cover  ">
      <div className="max-w-5xl mx-auto pb-4 md:pb-10">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 my-3">Our Services</h2>
          <p className="text-gray-500 text-sm  md:text-lg max-w-2xl mx-auto">
            Crafting purposeful digital experiences that drive results. Here are the services we offer
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, idx) => (
            <Link
              key={service.title}
              to={service.link}
              className={`group flex flex-col items-start  bg-gray-200/50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg p-6 h-full relative border
                ${service.highlight ? 'border-blue-400 ring-2 ring-blue-200' : 'border-transparent'}
              `}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 shrink-0">
                {/* Use dummy image or icon */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                {/* Or use icon: {service.icon} */}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <span className="mt-auto text-blue-500 text-sm font-medium group-hover:underline">
                Learn More &rarr;
              </span>
              {/* For accessibility */}
              <span className="sr-only">Go to {service.title} service</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
 );
}
export default  Service;