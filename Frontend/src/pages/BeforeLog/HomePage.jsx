// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Heart, ChevronDown, Activity, Stethoscope } from "lucide-react";

// const carouselContent = [
//   {
//     image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
//     title: "Your Heart, Your Health",
//     subtitle: "Comprehensive Cardiovascular Risk Assessment",
//     description:
//       "Personalized insights to protect and improve your heart health",
//     buttonText: "Start Your Assessment",
//   },
//   {
//     image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg",
//     title: "Advanced Risk Prediction",
//     subtitle: "Data-Driven Health Strategies",
//     description:
//       "Leverage cutting-edge technology to understand your cardiovascular risk",
//     buttonText: "Explore Insights",
//   },
//   {
//     image: "https://images.pexels.com/photos/4226766/pexels-photo-4226766.jpeg",
//     title: "Proactive Wellness Journey",
//     subtitle: "Transform Your Cardiovascular Health",
//     description:
//       "Actionable recommendations tailored to your unique health profile",
//     buttonText: "Begin Your Journey",
//   },
// ];

// const ImageCarousel = () => {
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleScrollDown = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {carouselContent.map((item, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             index === currentIndex
//               ? "opacity-100 visible"
//               : "opacity-0 invisible"
//           }`}
//         >
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${item.image})` }}
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//         </div>
//       ))}

//       <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
//         <div className="max-w-3xl">
//           <h2 className="text-2xl md:text-3xl font-medium mb-4 text-red-300">
//             {carouselContent[currentIndex].subtitle}
//           </h2>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             {carouselContent[currentIndex].title}
//           </h1>
//           <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
//             {carouselContent[currentIndex].description}
//           </p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-red-600 text-white py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105"
//           >
//             {carouselContent[currentIndex].buttonText}
//           </button>
//         </div>
//       </div>

//       <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
//         {carouselContent.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
//               index === currentIndex
//                 ? "w-6 bg-white"
//                 : "w-3 bg-white bg-opacity-50"
//             }`}
//           />
//         ))}
//       </div>

//       <button
//         onClick={handleScrollDown}
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
//       >
//         <ChevronDown className="w-10 h-10 text-white" />
//       </button>
//     </div>
//   );
// };

// const FeatureHighlights = () => {
//   const features = [
//     {
//       icon: <Activity className="w-12 h-12 text-red-500" />,
//       title: "Comprehensive Risk Assessment",
//       description: "Detailed analysis of your cardiovascular health factors",
//     },
//     {
//       icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
//       title: "Personalized Insights",
//       description:
//         "Tailored recommendations based on your unique health profile",
//     },
//     {
//       icon: <Heart className="w-12 h-12 text-green-500" />,
//       title: "Proactive Health Management",
//       description: "Empower yourself with actionable health strategies",
//     },
//   ];

//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
//             >
//               <div className="flex justify-center mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const HomePage = () => {
//   return (
//     <div>
//       <ImageCarousel />
//       <FeatureHighlights />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import {
  Heart,
  Activity,
  Stethoscope,
  ArrowRight,
  BarChart3,
  Shield,
  ClipboardCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let navigate = useNavigate();
  const heroContent = [
    {
      title: "Virtual healthcare for you",
      subtitle:
        "CardioPredict provides progressive, and affordable cardiovascular risk assessment for everyone.",
      buttonText: "Start Assessment",
    },
    {
      title: "Your Heart, Your Health",
      subtitle:
        "Personalized insights to protect and improve your heart health with advanced ML prediction.",
      buttonText: "Explore Insights",
    },
    {
      title: "Proactive Wellness Journey",
      subtitle:
        "Transform your cardiovascular health with actionable recommendations tailored to you.",
      buttonText: "Begin Journey",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {heroContent[currentSlide].title}
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              {heroContent[currentSlide].subtitle}
            </p>

            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              {heroContent[currentSlide].buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Slide indicators */}
            <div className="flex gap-2 pt-4">
              {heroContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative">
              {/* Medical illustration placeholder */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Clipboard with health data */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 w-80 transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-32"></div>
                      </div>
                    </div>

                    {/* Heart rate visualization */}
                    <div className="mb-6">
                      <svg className="w-full h-20" viewBox="0 0 200 50">
                        <path
                          d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 200 25"
                          stroke="#EF4444"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="h-2 bg-gray-100 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="h-2 bg-gray-100 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="h-2 bg-gray-100 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating hearts */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
                </div>

                {/* Shield icon */}
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>

                {/* Medical cross */}
                <div className="absolute top-32 left-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-2xl font-bold">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide you the best choices for you. Adjust it to your health
              needs and make sure you undergo treatment with our highly
              qualified doctors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-12 h-12 text-blue-500" />,
                title: "Risk Assessment",
                description:
                  "Comprehensive cardiovascular risk analysis using advanced ML algorithms trained on extensive medical data.",
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
                title: "Health Analytics",
                description:
                  "Detailed insights and visualizations of your cardiovascular health metrics and trends over time.",
              },
              {
                icon: <ClipboardCheck className="w-12 h-12 text-blue-500" />,
                title: "Personalized Reports",
                description:
                  "Receive tailored health recommendations based on your unique risk profile and medical history.",
              },
              {
                icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
                title: "Expert Consultation",
                description:
                  "Connect with healthcare professionals to discuss your results and create action plans.",
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-500" />,
                title: "Data Security",
                description:
                  "Your health data is protected with enterprise-grade encryption and privacy measures.",
              },
              {
                icon: <Heart className="w-12 h-12 text-blue-500" />,
                title: "Ongoing Monitoring",
                description:
                  "Track your cardiovascular health journey with regular assessments and progress tracking.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-blue-500 font-medium px-8 py-3 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/30 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-white/10 rounded-2xl"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-12 bg-white/10 rounded-xl"></div>
                    <div className="h-12 bg-white/10 rounded-xl"></div>
                    <div className="h-12 bg-white/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Leading healthcare providers
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                CardioPredict combines cutting-edge machine learning with
                clinical expertise to deliver accurate cardiovascular risk
                predictions. Our platform has been validated against established
                medical guidelines and continues to improve through ongoing
                research and data analysis.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10k+", label: "Assessments Completed" },
              { number: "98%", label: "Prediction Accuracy" },
              { number: "24/7", label: "Platform Availability" },
              { number: "50+", label: "Healthcare Partners" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl font-bold text-blue-500">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
