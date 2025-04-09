import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ChevronDown, Activity, Stethoscope } from "lucide-react";

const carouselContent = [
  {
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    title: "Your Heart, Your Health",
    subtitle: "Comprehensive Cardiovascular Risk Assessment",
    description:
      "Personalized insights to protect and improve your heart health",
    buttonText: "Start Your Assessment",
  },
  {
    image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg",
    title: "Advanced Risk Prediction",
    subtitle: "Data-Driven Health Strategies",
    description:
      "Leverage cutting-edge technology to understand your cardiovascular risk",
    buttonText: "Explore Insights",
  },
  {
    image: "https://images.pexels.com/photos/4226766/pexels-photo-4226766.jpeg",
    title: "Proactive Wellness Journey",
    subtitle: "Transform Your Cardiovascular Health",
    description:
      "Actionable recommendations tailored to your unique health profile",
    buttonText: "Begin Your Journey",
  },
];

const ImageCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {carouselContent.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-red-300">
            {carouselContent[currentIndex].subtitle}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {carouselContent[currentIndex].title}
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {carouselContent[currentIndex].description}
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-red-600 text-white py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105"
          >
            {carouselContent[currentIndex].buttonText}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {carouselContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-6 bg-white"
                : "w-3 bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </button>
    </div>
  );
};

const FeatureHighlights = () => {
  const features = [
    {
      icon: <Activity className="w-12 h-12 text-red-500" />,
      title: "Comprehensive Risk Assessment",
      description: "Detailed analysis of your cardiovascular health factors",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
      title: "Personalized Insights",
      description:
        "Tailored recommendations based on your unique health profile",
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Proactive Health Management",
      description: "Empower yourself with actionable health strategies",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <ImageCarousel />
      <FeatureHighlights />
    </div>
  );
};

export default HomePage;
