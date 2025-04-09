import React from "react";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact-us");
  };
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative bg-green-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L100,0 L100,100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            Empowering heart-healthy living through technology, data, and
            personalized guidance.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-4">
              The ASCVD Risk Calculator and Health Improvement Website began
              with a simple vision: to make heart health accessible,
              understandable, and improvable for everyone.
            </p>
            <p className="text-gray-700 mb-4">
              Recognizing the growing prevalence of cardiovascular diseases
              globally, we set out to create a tool that combines cutting-edge
              machine learning with practical health guidance.
            </p>
            <p className="text-gray-700">
              Our platform stands at the intersection of technology and
              wellness, turning complex medical metrics into actionable insights
              that empower users to take control of their heart health journey.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
              <p className="text-gray-700">
                Our advanced ASCVD risk calculator analyzes your health
                parameters to provide a personalized cardiovascular risk profile
                and monitoring system.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Guidance
              </h3>
              <p className="text-gray-700">
                Receive customized dietary, exercise, and lifestyle
                recommendations based on your unique health profile and risk
                factors.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-700">
                Monitor your health improvements over time with intuitive
                dashboards and visualizations that show your journey to better
                heart health.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Integration</h3>
              <p className="text-gray-700">
                Connect with your fitness devices and health apps for seamless
                data integration and a comprehensive view of your cardiovascular
                health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Technology */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Technology
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <img
                  src="/api/placeholder/400/300"
                  alt="AI Health Technology"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">
                  Powered by MERN Stack & ML
                </h3>
                <p className="text-gray-700 mb-4">
                  Built on the modern MERN stack (MongoDB, Express.js, React.js,
                  Node.js), our platform delivers a seamless and responsive user
                  experience while handling complex health data.
                </p>
                <p className="text-gray-700 mb-4">
                  Our advanced machine learning algorithms process health
                  parameters to accurately predict cardiovascular risk based on
                  established medical guidelines.
                </p>
                <p className="text-gray-700">
                  The ML systems continuously learn and adapt to provide
                  increasingly personalized dietary recommendations tailored to
                  each user's heart health profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Built With Modern Technology
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-green-600 font-bold text-xl">M</span>
              </div>
              <h3 className="font-semibold">MongoDB</h3>
              <p className="text-sm text-gray-600">NoSQL Database</p>
            </div>

            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-green-600 font-bold text-xl">E</span>
              </div>
              <h3 className="font-semibold">Express.js</h3>
              <p className="text-sm text-gray-600">Backend Framework</p>
            </div>

            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-green-600 font-bold text-xl">R</span>
              </div>
              <h3 className="font-semibold">React.js</h3>
              <p className="text-sm text-gray-600">Frontend Library</p>
            </div>

            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <span className="text-green-600 font-bold text-xl">N</span>
              </div>
              <h3 className="font-semibold">Node.js</h3>
              <p className="text-sm text-gray-600">JavaScript Runtime</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="h-16 w-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <span className="text-green-600 font-bold text-xl">ML</span>
            </div>
            <h3 className="font-semibold">Machine Learning</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Intelligent algorithms that analyze health data to provide
              personalized risk assessments and dietary recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our platform or want to learn more? We'd love
              to hear from you.
            </p>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
              onClick={handleClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
