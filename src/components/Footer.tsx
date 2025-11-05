import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react";

// Helper component for list items
const FooterLink = ({ href, name }) => {
  // Check if it's an internal link (starts with /) or external link
  const isInternalLink = href.startsWith('/');
  
  if (isInternalLink) {
    return (
      <li>
        <Link
          to={href}
          onClick={(e) => {
            if (name === "Home") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
        >
          <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-white transition-colors" />
          {name}
        </Link>
      </li>
    );
  }
  
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          if (name === "Home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (name === "Faq's") {
            e.preventDefault();
            // Navigate to home page first, then scroll to FAQ section
            window.location.href = '/#faq';
          }
        }}
        className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
      >
        <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-white transition-colors" />
        {name}
      </a>
    </li>
  );
};

// Helper component for section titles
const FooterTitle = ({ title }) => (
  <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
    {title}
  </h4>
);

const Footer = () => {
  // Certification Courses - Organized by Category
  const certificationCourses = {
    softwareTesting: [
      { name: "Software Testing", href: "/software-testing-training" },
      { name: "Manual Testing", href: "/manual-testing" },
      { name: "Selenium Automation", href: "/selenium-testing" },
      { name: "ISTQB Certification", href: "/istqb-certification" },
    ],
    fullstackDevelopment: [
      { name: "Full Stack Java", href: "/full-stack-java-development" },
      { name: "Full Stack Python", href: "/full-stack-python-development" },
      { name: "Full Stack Web", href: "/web-development-course" },
      { name: "Full Stack .NET", href: "/full-stack-dotnet-development" },
    ],
    softwareDevelopment: [
      { name: "Java Development", href: "/java-training" },
      { name: "Python Development", href: "/python-training" },
      { name: "MEAN Stack", href: "/mean-stack-development" },
      { name: "MERN Stack", href: "/mern-stack-development" },
    ],
    frontendDevelopment: [
      { name: "React JS", href: "/react-course" },
      { name: "Angular", href: "/angular-course" },
      { name: "Web Designing", href: "/web-designing-training" },
    ],
    dataScience: [
      { name: "Data Science & Analytics", href: "/python-data-science" },
    ],
    bigDataRPA: [
      { name: "Big Data Engineering", href: "/big-data-engineering" },
      { name: "RPA", href: "/rpa" },
    ]
  };

  // Placement Courses with AI
  const placementCoursesWithAI = [
    { name: "Software Testing with AI", href: "/software-testing-training" },
    { name: "Full Stack Java Development with AI", href: "/full-stack-java-development" },
    { name: "Full Stack Python Development with AI", href: "/full-stack-python-development" },
    { name: "Full Stack .NET Development with AI", href: "/full-stack-dotnet-development" },
    { name: "Digital Marketing with AI", href: "/digital-marketing" },
    { name: "Data Science with AI", href: "/python-data-science" },
    { name: "Data Analytics with AI", href: "/data-analysis-visualization" },
  ];

  const dualDegreeLinks = [
    { name: "BCA (Bachelor of Computer Applications)", href: "/bca" },
    { name: "Quastech Degree Program", href: "/quastech-degree-program" }
  ];
  
  const onlineLinks = [
    { name: "Software Testing Training", href: "/software-testing-training" },
    { name: "Full Stack Java Development Training", href: "/full-stack-java-development" },
    { name: "Full Stack Python Development Training", href: "/full-stack-python-development" },
    { name: "Full Stack Web Development Training", href: "/web-development-course" },
    { name: "Java Development Training", href: "/java-training" },
    { name: "Python Development Training", href: "/python-training" },
    { name: "Web Designing Training", href: "/web-designing-training" },
    { name: "Data Science with Python", href: "/python-data-science" },
    { name: "Digital Marketing", href: "/digital-marketing" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Placement", href: "/placement" },
    { name: "Contact Us", href: "/contact" },
    { name: "Certificate Download", href: "#" },
    { name: "Payment Methods", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Faq's", href: "#" }
  ];

  const nonItTrainingLinks = [
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Data Analysis & Visualization", href: "/data-analysis-visualization" },
    { name: "Graphic Designing", href: "/graphic-designing" },
    { name: "Web Graphic Designing", href: "/web-graphic-designing" },
    { name: "Financial Accounting", href: "/financial-accounting" },
    { name: "Accounting", href: "/accounting" },
    { name: "Taxation", href: "/taxation" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/QuasTech", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/quastech", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://www.instagram.com/quastech.in/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/quastech-in/", color: "hover:text-blue-400" },
    { icon: Youtube, href: "https://www.youtube.com/c/QuasTech", color: "hover:text-red-500" }
  ];

  return (
    // Changed to dark blue background and white text
    <footer className="bg-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Changed to 5 columns to accommodate all content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          
          {/* Column 1: Company Info (From Code) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              {/* Using the logo path from your code */}
              <img
                src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                alt="QUASTECH Logo"
                className="h-10 w-auto mb-4 brightness-0 invert" // Kept invert filter to make logo white
              />
              <p className="text-gray-300 leading-relaxed text-sm">
                Leading IT education institute with ISO 9001:2015 certification. 
                Transforming careers through innovative technology training.
              </p>
            </div>
            
            {/* Contact Info - Thane Branch */}
            <div className="space-y-3">
              <h5 className="text-white font-semibold mb-3">Thane Branch</h5>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300">
                  Office No. 305, 3rd Floor, Mangalya Building,<br />
                  Near Cadbury Junction, Pokhran Road No. 1,<br />
                  Thane West, Maharashtra 400606
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/918422800381" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  +91 84228 00381
                  <span className="text-xs text-green-400">(WhatsApp)</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@quastech.co.in"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@quastech.co.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: CERTIFICATION COURSES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterTitle title="CERTIFICATION COURSES" />
            
            {/* Software Testing */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Software Testing</h5>
            <ul className="space-y-2">
              {certificationCourses.softwareTesting.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Fullstack Development */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Fullstack Development</h5>
            <ul className="space-y-2">
              {certificationCourses.fullstackDevelopment.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Software Development */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Software Development</h5>
            <ul className="space-y-2">
              {certificationCourses.softwareDevelopment.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 3: MORE CERTIFICATION COURSES & PLACEMENT WITH AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Frontend Development */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2">Frontend Development</h5>
            <ul className="space-y-2">
              {certificationCourses.frontendDevelopment.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Data Science & Analytics */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Data Science & Analytics</h5>
            <ul className="space-y-2">
              {certificationCourses.dataScience.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Big Data & RPA */}
            <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Big Data & RPA</h5>
            <ul className="space-y-2">
              {certificationCourses.bigDataRPA.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Placement Courses with AI */}
            <FooterTitle title="PLACEMENT COURSES WITH AI" />
            <ul className="space-y-2">
              {placementCoursesWithAI.slice(0, 4).map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 4: PLACEMENT COURSES WITH AI & MORE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Remaining Placement Courses with AI */}
            <ul className="space-y-2 mb-4">
              {placementCoursesWithAI.slice(4).map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Dual Degree */}
            <h4 className="text-lg font-semibold mt-4 mb-3 text-white uppercase tracking-wider">
              DUAL DEGREE
            </h4>
            <ul className="space-y-2">
              {dualDegreeLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* Non-IT Training */}
            <h4 className="text-lg font-semibold mt-4 mb-3 text-white uppercase tracking-wider">
              NON IT TRAINING
            </h4>
            <ul className="space-y-2">
              {nonItTrainingLinks.slice(0, 4).map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>
          
          {/* Column 5: QUICK LINKS & CONNECT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Quick Links */}
            <FooterTitle title="QUICK LINKS" />
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            {/* More Non-IT Courses */}
            <ul className="space-y-2 mb-6">
              {nonItTrainingLinks.slice(4).map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
            
            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors border border-blue-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar (From Code) */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 QUASTECH. All rights reserved. | ISO 9001:2015 Certified
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
