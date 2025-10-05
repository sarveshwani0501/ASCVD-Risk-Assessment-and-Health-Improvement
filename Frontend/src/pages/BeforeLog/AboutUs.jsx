// import React from "react";
// import { useNavigate } from "react-router-dom";
// const AboutUs = () => {
//   const navigate = useNavigate();
//   const handleClick = (e) => {
//     e.preventDefault();
//     navigate("/contact-us");
//   };
//   return (
//     <div className="bg-gradient-to-b from-green-50 to-white min-h-screen mt-16">
//       <div className="relative bg-green-700 text-white">
//         <div className="absolute inset-0 opacity-20">
//           <svg
//             className="w-full h-full"
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//           >
//             <path d="M0,0 L100,0 L100,100 Z" fill="white" />
//           </svg>
//         </div>
//         <div className="container mx-auto px-4 py-16 relative z-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             About Our Mission
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl opacity-90">
//             Empowering heart-healthy living through technology, data, and
//             personalized guidance.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <p className="text-gray-700 mb-4">
//               The ASCVD Risk Calculator and Health Improvement Website began
//               with a simple vision: to make heart health accessible,
//               understandable, and improvable for everyone.
//             </p>
//             <p className="text-gray-700 mb-4">
//               Recognizing the growing prevalence of cardiovascular diseases
//               globally, we set out to create a tool that combines cutting-edge
//               machine learning with practical health guidance.
//             </p>
//             <p className="text-gray-700">
//               Our platform stands at the intersection of technology and
//               wellness, turning complex medical metrics into actionable insights
//               that empower users to take control of their heart health journey.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-10">
//             What We Offer
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 rounded-lg p-6 shadow-md">
//               <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
//               <p className="text-gray-700">
//                 Our advanced ASCVD risk calculator analyzes your health
//                 parameters to provide a personalized cardiovascular risk profile
//                 and monitoring system.
//               </p>
//             </div>

//             <div className="bg-green-50 rounded-lg p-6 shadow-md">
//               <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">
//                 Personalized Guidance
//               </h3>
//               <p className="text-gray-700">
//                 Receive customized dietary, exercise, and lifestyle
//                 recommendations based on your unique health profile and risk
//                 factors.
//               </p>
//             </div>

//             <div className="bg-green-50 rounded-lg p-6 shadow-md">
//               <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
//               <p className="text-gray-700">
//                 Monitor your health improvements over time with intuitive
//                 dashboards and visualizations that show your journey to better
//                 heart health.
//               </p>
//             </div>

//             <div className="bg-green-50 rounded-lg p-6 shadow-md">
//               <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Health Integration</h3>
//               <p className="text-gray-700">
//                 Connect with your fitness devices and health apps for seamless
//                 data integration and a comprehensive view of your cardiovascular
//                 health.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">
//             Our Technology
//           </h2>
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
//                 <img
//                   src="/api/placeholder/400/300"
//                   alt="AI Health Technology"
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Powered by MERN Stack & ML
//                 </h3>
//                 <p className="text-gray-700 mb-4">
//                   Built on the modern MERN stack (MongoDB, Express.js, React.js,
//                   Node.js), our platform delivers a seamless and responsive user
//                   experience while handling complex health data.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   Our advanced machine learning algorithms process health
//                   parameters to accurately predict cardiovascular risk based on
//                   established medical guidelines.
//                 </p>
//                 <p className="text-gray-700">
//                   The ML systems continuously learn and adapt to provide
//                   increasingly personalized dietary recommendations tailored to
//                   each user's heart health profile.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-10">
//             Built With Modern Technology
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="p-4">
//               <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
//                 <span className="text-green-600 font-bold text-xl">M</span>
//               </div>
//               <h3 className="font-semibold">MongoDB</h3>
//               <p className="text-sm text-gray-600">NoSQL Database</p>
//             </div>

//             <div className="p-4">
//               <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
//                 <span className="text-green-600 font-bold text-xl">E</span>
//               </div>
//               <h3 className="font-semibold">Express.js</h3>
//               <p className="text-sm text-gray-600">Backend Framework</p>
//             </div>

//             <div className="p-4">
//               <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
//                 <span className="text-green-600 font-bold text-xl">R</span>
//               </div>
//               <h3 className="font-semibold">React.js</h3>
//               <p className="text-sm text-gray-600">Frontend Library</p>
//             </div>

//             <div className="p-4">
//               <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
//                 <span className="text-green-600 font-bold text-xl">N</span>
//               </div>
//               <h3 className="font-semibold">Node.js</h3>
//               <p className="text-sm text-gray-600">JavaScript Runtime</p>
//             </div>
//           </div>

//           <div className="mt-12">
//             <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
//               <span className="text-green-600 font-bold text-xl">ML</span>
//             </div>
//             <h3 className="font-semibold">Machine Learning</h3>
//             <p className="text-gray-600 max-w-md mx-auto">
//               Intelligent algorithms that analyze health data to provide
//               personalized risk assessments and dietary recommendations
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-100">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Have questions about our platform or want to learn more? We'd love
//               to hear from you.
//             </p>
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
//               onClick={handleClick}
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ClipboardCheck,
  Dumbbell,
  TrendingUp,
  Zap,
  Database,
  Server,
  Code,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact-us");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white py-24">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full -ml-40 -mb-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-8 shadow-xl">
              <Heart className="h-10 w-10 text-blue-600" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Our Mission
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              Empowering heart-healthy living through technology, data, and
              personalized guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The ASCVD Risk Calculator and Health Improvement Website began
              with a simple vision: to make heart health accessible,
              understandable, and improvable for everyone.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Recognizing the growing prevalence of cardiovascular diseases
              globally, we set out to create a tool that combines cutting-edge
              machine learning with practical health guidance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our platform stands at the intersection of technology and
              wellness, turning complex medical metrics into actionable insights
              that empower users to take control of their heart health journey.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Risk Assessment */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Risk Assessment
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our advanced ASCVD risk calculator analyzes your health
                  parameters to provide a personalized cardiovascular risk
                  profile and monitoring system.
                </p>
              </div>

              {/* Personalized Guidance */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personalized Guidance
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Receive customized dietary, exercise, and lifestyle
                  recommendations based on your unique health profile and risk
                  factors.
                </p>
              </div>

              {/* Progress Tracking */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Progress Tracking
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Monitor your health improvements over time with intuitive
                  dashboards and visualizations that show your journey to better
                  heart health.
                </p>
              </div>

              {/* Health Integration */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Health Integration
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Connect with your fitness devices and health apps for seamless
                  data integration and a comprehensive view of your
                  cardiovascular health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Technology
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-3"></div>
                  <img
                    src="/api/placeholder/500/400"
                    alt="AI Health Technology"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                      Powered by MERN Stack & ML
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Built on the modern MERN stack (MongoDB, Express.js,
                    React.js, Node.js), our platform delivers a seamless and
                    responsive user experience while handling complex health
                    data.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our advanced machine learning algorithms process health
                    parameters to accurately predict cardiovascular risk based
                    on established medical guidelines.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The ML systems continuously learn and adapt to provide
                    increasingly personalized dietary recommendations tailored
                    to each user's heart health profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Built With Modern Technology
            </h2>
            <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
              Our platform leverages industry-leading technologies to deliver a
              powerful, secure, and scalable solution
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Database,
                  name: "MongoDB",
                  desc: "NoSQL Database",
                  color: "from-green-400 to-green-600",
                },
                {
                  icon: Server,
                  name: "Express.js",
                  desc: "Backend Framework",
                  color: "from-gray-400 to-gray-600",
                },
                {
                  icon: Code,
                  name: "React.js",
                  desc: "Frontend Library",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: Cpu,
                  name: "Node.js",
                  desc: "JavaScript Runtime",
                  color: "from-green-500 to-green-700",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Machine Learning
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Intelligent algorithms that analyze health data to provide
                personalized risk assessments and dietary recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-xl">
              <Heart className="h-8 w-8 text-blue-600" fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Have questions about our platform or want to learn more? We'd love
              to hear from you.
            </p>
            <button
              onClick={handleClick}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
