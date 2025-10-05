// import React, { useState } from "react";

// const ContactUs = () => {
//   const [formData, setState] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setState({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });

//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 mt-16">
//       <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full -mr-32 -mt-16 opacity-20"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200 rounded-full -ml-40 -mb-40 opacity-20"></div>

//       <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center mb-6">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-green-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//               />
//             </svg>
//           </div>
//           <h1 className="text-5xl font-bold text-green-800 mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-lg text-green-700 max-w-2xl mx-auto">
//             Have questions about your heart health journey? Our team of experts
//             is ready to help you achieve better cardiovascular wellness.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-green-100 transform transition duration-500 hover:scale-105">
//             {submitted ? (
//               <div className="text-center py-12">
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10 text-green-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-3xl font-bold text-green-800 mb-3">
//                   Thank You!
//                 </h2>
//                 <p className="text-green-600 text-lg">
//                   Your message has been sent successfully. We'll get back to you
//                   soon.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-green-800 mb-6">
//                   Send us a message
//                 </h2>
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-green-700 mb-1"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white bg-opacity-80"
//                     required
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-green-700 mb-1"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white bg-opacity-80"
//                     required
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="subject"
//                     className="block text-sm font-medium text-green-700 mb-1"
//                   >
//                     Subject
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white bg-opacity-80"
//                     required
//                   >
//                     <option value="">Select a topic</option>
//                     <option value="risk-calculator">
//                       Risk Calculator Help
//                     </option>
//                     <option value="diet-plans">Diet Plan Questions</option>
//                     <option value="exercise">Exercise Recommendations</option>
//                     <option value="account">Account Support</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-green-700 mb-1"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5"
//                     className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white bg-opacity-80"
//                     required
//                     placeholder="How can we help you today?"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
//                 >
//                   <span>Send Message</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>
//               </form>
//             )}
//           </div>

//           <div className="space-y-8">

//             <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-green-100 transform transition duration-500 hover:shadow-2xl">
//               <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-green-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//                 Meet Our Team
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { name: "Vijay Laxmi", role: "UI/UX Designer" },
//                   { name: "Sarvesh Wani", role: "Backend Developer" },
//                   { name: "Yash Nimbalkar", role: "Backend Developer" },
//                   { name: "Sakshi", role: "ML Engineer" },
//                 ].map((member, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
//                   >
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-white text-lg font-bold">
//                       {member.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-green-800">
//                         {member.name}
//                       </h3>
//                       <p className="text-sm text-green-600">{member.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-green-100 transform transition duration-500 hover:shadow-2xl">
//               <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-green-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 Contact Information
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-green-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-green-800">
//                       Email
//                     </h3>
//                     <p className="text-green-600 font-medium">
//                       support@ascvdrisk.health
//                     </p>
//                     <p className="text-sm text-green-500 mt-1">
//                       We respond within 24 hours
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-green-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-green-800">
//                       Phone
//                     </h3>
//                     <p className="text-green-600 font-medium">
//                       +1 (800) HEART-HELP
//                     </p>
//                     <p className="text-sm text-green-500 mt-1">
//                       Mon-Fri, 9am-5pm EST
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-green-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-green-800">
//                       Office
//                     </h3>
//                     <p className="text-green-600 font-medium">
//                       123 Heart Health Drive
//                     </p>
//                     <p className="text-sm text-green-500 mt-1">
//                       Wellness City, HC 10001
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-green-100 transform transition duration-500 hover:shadow-2xl">
//               <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-green-600"
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
//                 Connect With Us
//               </h2>
//               <div className="flex space-x-4">
//                 {[
//                   {
//                     name: "Twitter",
//                     icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
//                   },
//                   {
//                     name: "Facebook",
//                     icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
//                   },
//                   {
//                     name: "Instagram",
//                     icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z",
//                   },
//                   {
//                     name: "LinkedIn",
//                     icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
//                   },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 flex items-center justify-center transition duration-300 transform hover:scale-110 shadow-md"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d={social.icon}
//                       />
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">
//           <h2 className="text-3xl font-bold text-green-800 text-center mb-8 flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 mr-2 text-green-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             Frequently Asked Questions
//           </h2>
//           <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-green-100">
//             <div className="grid md:grid-cols-2 gap-8">
//               {[
//                 {
//                   q: "How accurate is the ASCVD Risk Calculator?",
//                   a: "Our calculator uses clinically validated algorithms based on the latest research in cardiovascular health. It provides a reliable estimate of your 10-year risk for heart disease or stroke.",
//                 },
//                 {
//                   q: "How often should I update my health information?",
//                   a: "We recommend updating your health metrics quarterly or whenever you have new lab results or significant lifestyle changes to ensure your risk assessment stays current.",
//                 },
//                 {
//                   q: "Can I connect my fitness tracker or smartwatch?",
//                   a: "Yes! Our platform integrates with popular devices from Apple, Fitbit, Garmin, and more to automatically import activity and heart rate data.",
//                 },
//                 {
//                   q: "Are the diet plans customizable for my needs?",
//                   a: "Absolutely. Our AI-powered dietary recommendations adapt to your specific health conditions, food preferences, allergies, and cultural considerations.",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-green-50 rounded-xl p-6 hover:shadow-md transition duration-300"
//                 >
//                   <h3 className="text-lg font-medium text-green-800 mb-3 flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 mr-2 text-green-600 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     <span>{item.q}</span>
//                   </h3>
//                   <p className="text-green-700 ml-8">{item.a}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Users,
  Info,
  HelpCircle,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
            <Heart className="h-8 w-8 text-white" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your heart health journey? Our team of experts
            is ready to help you achieve better cardiovascular wellness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Thank You!
                </h2>
                <p className="text-gray-600 text-lg">
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                      required
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                      required
                      placeholder="yourname@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="risk-calculator">
                        Risk Calculator Help
                      </option>
                      <option value="diet-plans">Diet Plan Questions</option>
                      <option value="exercise">Exercise Recommendations</option>
                      <option value="account">Account Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                    required
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Team */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-blue-600 font-medium">
                      support@ayuvita.health
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-green-600 font-medium">
                      +1 (800) HEART-HELP
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-purple-600 font-medium">
                      123 Heart Health Drive
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Wellness City, HC 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Meet Our Team
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Vijay Laxmi", role: "UI/UX Designer" },
                  { name: "Sarvesh Wani", role: "Backend Developer" },
                  { name: "Yash Nimbalkar", role: "Backend Developer" },
                  { name: "Sakshi", role: "ML Engineer" },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg font-bold mb-3 shadow-md">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm text-center">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Connect With Us
              </h2>
              <div className="flex justify-center space-x-4">
                {[
                  { Icon: Twitter, color: "from-blue-400 to-blue-600" },
                  { Icon: Facebook, color: "from-blue-500 to-blue-700" },
                  { Icon: Instagram, color: "from-pink-500 to-purple-600" },
                  { Icon: Linkedin, color: "from-blue-600 to-blue-800" },
                ].map(({ Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How accurate is the ASCVD Risk Calculator?",
                a: "Our calculator uses clinically validated algorithms based on the latest research in cardiovascular health. It provides a reliable estimate of your 10-year risk for heart disease or stroke.",
              },
              {
                q: "How often should I update my health information?",
                a: "We recommend updating your health metrics quarterly or whenever you have new lab results or significant lifestyle changes to ensure your risk assessment stays current.",
              },
              {
                q: "Can I connect my fitness tracker or smartwatch?",
                a: "Yes! Our platform integrates with popular devices from Apple, Fitbit, Garmin, and more to automatically import activity and heart rate data.",
              },
              {
                q: "Are the diet plans customizable for my needs?",
                a: "Absolutely. Our AI-powered dietary recommendations adapt to your specific health conditions, food preferences, allergies, and cultural considerations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.q}
                  </h3>
                </div>
                <p className="text-gray-600 ml-9">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
