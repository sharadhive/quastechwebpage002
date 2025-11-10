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
          <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-orange-400 transition-colors" />
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
            window.location.href = '/#faq';
          }
        }}
        className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
      >
        <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-orange-400 transition-colors" />
        {name}
      </a>
    </li>
  );
};

// Helper component for main section titles
const FooterMainTitle = ({ title }) => (
  <h3 className="text-lg md:text-xl font-extrabold mb-5 text-white uppercase tracking-wider border-b-2 border-orange-500 pb-2 inline-block">
    {title}
  </h3>
);

// Helper component for subsection titles
const FooterSubTitle = ({ title }) => (
  <h5 className="text-sm font-semibold text-blue-300 mb-3 mt-5 first:mt-0">{title}</h5>
);

const Footer = () => {
  // Placement Courses with AI
  const placementCoursesWithAI = [
    { name: "Software Testing with AI", href: "/software-testing-training" },
    { name: "Full Stack Java with AI", href: "/full-stack-java-development" },
    { name: "Full Stack Python with AI", href: "/full-stack-python-development" },
    { name: "Full Stack .NET with AI", href: "/full-stack-dotnet-development" },
    { name: "Digital Marketing with AI", href: "/digital-marketing" },
    { name: "Data Science with AI", href: "/python-data-science" },
    { name: "Data Analytics with AI", href: "/data-analysis-visualization" },
  ];

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
      { name: "MEAN Stack", href: "/mean-stack-development" },
      { name: "MERN Stack", href: "/mern-stack-development" },
    ],
    frontendDevelopment: [
      { name: "React JS", href: "/react-course" },
      { name: "Angular", href: "/angular-course" },
      { name: "Web Designing", href: "/web-designing-training" },
    ],
    dataScienceAnalytics: [
      { name: "Data Science with Python", href: "/python-data-science" },
      { name: "Data Analysis & Visualization", href: "/data-analysis-visualization" },
      { name: "Big Data Engineering", href: "/big-data-engineering" },
    ],
    otherCourses: [
      { name: "Java Development", href: "/java-training" },
      { name: "Python Development", href: "/python-training" },
      { name: "RPA Training", href: "/rpa" },
    ]
  };

  const dualDegreeLinks = [
    { name: "BCA (Bachelor of Computer Applications)", href: "/bca" },
    { name: "Quastech Degree Program", href: "/quastech-degree-program" }
  ];
  
  const nonItTrainingLinks = [
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Graphic Designing", href: "/graphic-designing" },
    { name: "Web Graphic Designing", href: "/web-graphic-designing" },
    { name: "Financial Accounting", href: "/financial-accounting" },
    { name: "Accounting", href: "/accounting" },
    { name: "Taxation", href: "/taxation" }
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

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/QuasTech", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/quastech", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://www.instagram.com/quastech.in/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/quastech-in/", color: "hover:text-blue-400" },
    { icon: Youtube, href: "https://www.youtube.com/c/QuasTech", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white mt-6 md:mt-8">
      {/* MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          
          {/* Column 1: Company Info & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <img
                src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                alt="QUASTECH Logo"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                Leading IT education institute with ISO 9001:2015 certification. Transforming careers through innovative technology training.
              </p>
            </div>
            
            {/* Thane Branch Address */}
            <div className="space-y-3 bg-blue-900/30 rounded-lg p-4 border border-blue-800/50 mb-6">
              <h5 className="text-white font-bold mb-3 text-base">📍 Thane Branch</h5>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-xs text-gray-300 leading-relaxed">
                  201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/918422800381" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  +91 8422800381
                  <span className="text-xs text-green-400">(WhatsApp)</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a 
                  href="mailto:info@quastech.in"
                  className="text-xs text-gray-300 hover:text-orange-400 transition-colors"
                >
                  info@quastech.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-bold mb-3 text-white text-sm">Connect With Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-blue-800/50 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all border border-blue-700/50 hover:border-white/30`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Placement Courses with AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterMainTitle title="Placement Courses with AI" />
            <ul className="space-y-2 mt-5 mb-6">
              {placementCoursesWithAI.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <FooterMainTitle title="Quick Links" />
            <ul className="space-y-2 mt-5">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Certification Courses - Part 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterMainTitle title="Certification Courses" />
            
            <FooterSubTitle title="Software Testing" />
            <ul className="space-y-2">
              {certificationCourses.softwareTesting.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <FooterSubTitle title="Frontend Development" />
            <ul className="space-y-2">
              {certificationCourses.frontendDevelopment.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <FooterSubTitle title="Other Courses" />
            <ul className="space-y-2">
              {certificationCourses.otherCourses.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Certification Courses - Part 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="lg:mt-[52px]"> {/* Align with other columns after title */}
              <FooterSubTitle title="Fullstack Development" />
              <ul className="space-y-2">
                {certificationCourses.fullstackDevelopment.map((link) => (
                  <FooterLink key={link.name} {...link} />
                ))}
              </ul>

              <FooterSubTitle title="Data Science & Analytics" />
              <ul className="space-y-2">
                {certificationCourses.dataScienceAnalytics.map((link) => (
                  <FooterLink key={link.name} {...link} />
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 5: Programs & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FooterMainTitle title="Dual Degree" />
            <ul className="space-y-2 mt-5">
              {dualDegreeLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>

            <ul className="space-y-2 mt-5">
              {nonItTrainingLinks.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/50 bg-blue-950">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
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
