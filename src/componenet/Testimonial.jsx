import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Dummy data

const testimonials = [
  {
    name: "Jane Cooper",
    role: "CIO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with OiO was a game-changer for our brand. They delivered beyond expectations and stayed supportive well after launch. Professional, fast, and creative. The website OiO built for our NGO helped us reach a broader audience and increase donations.",
  },
  {
    name: "Jane Cooper",
    role: "CIO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with OiO was a game-changer for our brand. They delivered beyond expectations and stayed supportive well after launch. Professional, fast, and creative. The website OiO built for our NGO helped us reach a broader audience and increase donations.",
  },
  {
    name: "Jane Cooper",
    role: "CIO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with OiO was a game-changer for our brand. They delivered beyond expectations and stayed supportive well after launch. Professional, fast, and creative. The website OiO built for our NGO helped us reach a broader audience and increase donations.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="w-full bg-white py-10 px-2 md:px-0  bg-[url('/src/img/Background.png')] bg-clip-border bg-cover">
      <div className="max-w-3xl mx-auto text-center">
       
        <h3 className="text-xl md:text-3xl font-bold text-gray-700 px-4 my-10">
          Testimonials That Speak to{" "}
          <span className="text-blue-500">Our Results</span>
        </h3>
        <p className="text-gray-500 text-sm  my-6 md:text-lg max-w-2xl mx-auto mb-6" >
          Real results. Real feedback. <br />
          At OiO, client satisfaction is at the heart of everything we do.
        </p>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx}>
              <div className="bg-gray-200/50 rounded-xl shadow-md px-6 py-8 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-200"
                />
                <p className="text-gray-700 mb-4 text-base md:text-lg">
                  &quot;{t.text}&quot;
                </p>
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
