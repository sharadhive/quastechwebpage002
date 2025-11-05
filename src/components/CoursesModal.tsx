import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CourseTab = "it" | "non-it" | "eclass" | "degree";
type ITCategory = "st" | "fd" | "sd" | "fed" | "ds" | "bde" | "ai";

const CoursesModal = ({ isOpen, onClose }: CoursesModalProps) => {
  const [activeTab, setActiveTab] = useState<CourseTab>("it");
  const [activeCategory, setActiveCategory] = useState<ITCategory>("st");

  // Certification Course Categories
  const itCourses = {
    st: {
      title: "Software Testing",
      courses: [
        { name: "Software Testing", icon: "📚", link: "/software-testing-training", description: "Comprehensive testing training" },
        { name: "Manual Testing", icon: "📚", link: "/manual-testing", description: "Fundamentals of QA" },
        { name: "Selenium Automation Testing", icon: "📚", link: "/selenium-testing", description: "Automation with Selenium" },
        { name: "ISTQB Certification", icon: "📚", link: "/istqb-certification", description: "Global QA certification" }
      ]
    },
    fd: {
      title: "Fullstack Development",
      courses: [
        { name: "Full Stack Java Development", icon: "📚", link: "/full-stack-java-development", description: "Java + Spring + React" },
        { name: "Full Stack Python Development", icon: "📚", link: "/full-stack-python-development", description: "Django + Flask + React" },
        { name: "Full Stack Web Development", icon: "📚", link: "/web-development-course", description: "MERN Stack" },
        { name: "Full Stack .Net Development", icon: "📚", link: "/full-stack-dotnet-development", description: "ASP.NET Core + Angular" }
      ]
    },
    sd: {
      title: "Software Development",
      courses: [
        { name: "Java Development", icon: "📚", link: "/java-training", description: "Core & Advanced Java" },
        { name: "Python Development", icon: "📚", link: "/python-training", description: "Python programming" },
        { name: "Mean Stack Development", icon: "📚", link: "/mean-stack-development", description: "MongoDB + Angular" },
        { name: "Mern Stack Development", icon: "📚", link: "/mern-stack-development", description: "MongoDB + React" }
      ]
    },
    fed: {
      title: "Front End Development",
      courses: [
        { name: "React JS Development", icon: "📚", link: "/react-course", description: "Modern React development" },
        { name: "Angular Development", icon: "📚", link: "/angular-course", description: "Enterprise Angular apps" },
        { name: "Web Designing", icon: "📚", link: "/web-designing-training", description: "HTML, CSS, JavaScript" }
      ]
    },
    ds: {
      title: "Data Science & Analytics",
      courses: [
        { name: "Data Science & Analytics with AI", icon: "📚", link: "/python-data-science", description: "ML & Data analysis" }
      ]
    },
    bde: {
      title: "Big Data Engineering / Other IT",
      courses: [
        { name: "Big Data Engineering", icon: "📚", link: "/big-data-engineering", description: "Hadoop + Spark" },
        { name: "RPA", icon: "📚", link: "/rpa", description: "Process automation" }
      ]
    }
  };

  // Non-IT Courses
  const nonItCourses = [
    { name: "Digital Marketing Course", link: "/digital-marketing" },
    { name: "Data Analytics & Visualization", link: "/data-analysis-visualization" },
    { name: "Graphic Designing", link: "/graphic-designing" },
    { name: "Web Graphic Designing", link: "/web-graphic-designing" },
    { name: "Management Information Systems", link: "/management-information-systems" },
    { name: "Information Technology Programme", link: "/information-technology-programme" },
    { name: "Financial Accounting", link: "/financial-accounting" },
    { name: "Accounting Course", link: "/accounting" },
    { name: "Taxation Course", link: "/taxation" }
  ];

  // E-Class / Online Courses - Your Exact List
  const eclassCourses = [
    { name: "SOFTWARE TESTING TRAINING", link: "/software-testing-training" },
    { name: "FULL STACK JAVA DEVELOPMENT TRAINING", link: "/full-stack-java-development" },
    { name: "FULL STACK PYTHON DEVELOPMENT TRAINING", link: "/full-stack-python-development" },
    { name: "FULL STACK WEB DEVELOPMENT TRAINING", link: "/web-development-course" },
    { name: "JAVA DEVELOPMENT TRAINING", link: "/java-training" },
    { name: "PYTHON DEVELOPMENT TRAINING", link: "/python-training" },
    { name: "WEB DESIGNING TRAINING", link: "/web-designing-training" },
    { name: "DATA SCIENCE WITH PYTHON", link: "/python-data-science" },
    { name: "DIGITAL MARKETING", link: "/digital-marketing" }
  ];

  // Degree Courses - Your Exact List
  const degreeCourses = [
    { name: "BCA (Bachelor of Computer Applications)", link: "/bca" },
    { name: "Quastech Degree Program", link: "/quastech-degree-program" }
  ];

  const tabs = [
    { id: "it" as CourseTab, label: "Certification Courses" },
    { id: "non-it" as CourseTab, label: "Placement Courses with AI" },
    { id: "eclass" as CourseTab, label: "Online" },
    { id: "degree" as CourseTab, label: "Degree" }
  ];

  const certificationCategories = [
    { id: "st" as ITCategory, label: "Software Testing" },
    { id: "fd" as ITCategory, label: "Fullstack Development" },
    { id: "sd" as ITCategory, label: "Software Development" },
    { id: "fed" as ITCategory, label: "Front End Development" },
    { id: "ds" as ITCategory, label: "Data Science & Analytics" },
    { id: "bde" as ITCategory, label: "Big Data Engineering / Other IT" }
  ];

  // Placement Courses with AI (displayed as simple list)
  const aiPlacementCourses = [
    { name: "Software Testing with AI", icon: "🤖", link: "/software-testing-training" },
    { name: "Full Stack Java Development with AI", icon: "🤖", link: "/full-stack-java-development" },
    { name: "Full Stack Python Development with AI", icon: "🤖", link: "/full-stack-python-development" },
    { name: "Full Stack .NET Development with AI", icon: "🤖", link: "/full-stack-dotnet-development" },
    { name: "Digital Marketing with AI", icon: "🤖", link: "/digital-marketing" },
    { name: "Data Science with AI", icon: "🤖", link: "/python-data-science" },
    { name: "Data Analytics with AI", icon: "🤖", link: "/data-analysis-visualization" }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl w-[95vw] max-w-4xl max-h-[85vh] overflow-hidden z-10"
        >
          {/* Modal Header with Tabs */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Our Courses
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === "it") {
                      setActiveCategory("st"); // Reset to first category when switching to IT
                    }
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-lg"
                      : "bg-blue-500 text-white hover:bg-blue-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)]">
            {/* Certification Courses - Two Column Layout */}
            {activeTab === "it" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Sidebar - Categories */}
                <div className="md:col-span-5 space-y-2">
                  {certificationCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Right Side - Sub Courses */}
                <div className="md:col-span-7">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                      {itCourses[activeCategory].title}
                    </h3>
                    {itCourses[activeCategory].courses.map((course, index) => (
                      <Link to={course.link} key={index} onClick={onClose}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group bg-gradient-to-r from-blue-50 to-orange-50 hover:from-blue-100 hover:to-orange-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md border border-blue-100 hover:border-blue-500"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1">
                              <span className="text-2xl">{course.icon}</span>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                  {course.name}
                                </div>
                                <div className="text-xs text-gray-600 mt-1">
                                  {course.description}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* Placement Courses with AI - Grid Layout */}
            {activeTab === "non-it" && (
              <div>
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    AI-Enhanced Placement Courses
                  </h3>
                  <p className="text-sm text-gray-600">Industry-focused training with AI integration and guaranteed placement support</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aiPlacementCourses.map((course, index) => (
                    <Link to={course.link} key={index} onClick={onClose}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 hover:from-purple-100 hover:via-blue-100 hover:to-cyan-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border border-purple-100 hover:border-purple-400"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{course.icon}</span>
                            <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors text-sm">
                              {course.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* E-Class Courses - Grid Layout */}
            {activeTab === "eclass" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eclassCourses.map((course, index) => (
                  <Link to={course.link} key={index} onClick={onClose}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-orange-600" />
                          <span className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors text-sm">
                            {course.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            )}

            {/* Degree Courses - Grid Layout */}
            {activeTab === "degree" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {degreeCourses.map((course, index) => (
                  <Link to={course.link} key={index} onClick={onClose}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-gray-800 group-hover:text-green-600 transition-colors text-sm">
                            {course.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-gray-600">
                Need help choosing a course?
              </p>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => window.location.href = 'tel:+918422800381'}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Request to Call
                </Button>
                <Button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CoursesModal;


