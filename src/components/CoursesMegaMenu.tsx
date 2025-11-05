import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
  Globe,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

interface CoursesMegaMenuProps {
  type: "it" | "non-it" | "eclass" | "degree";
  onClose: () => void;
  onTabChange?: (type: "it" | "non-it" | "eclass" | "degree") => void;
}

const CoursesMegaMenu = ({ type, onClose, onTabChange }: CoursesMegaMenuProps) => {
  const courseData = {
    it: {
      title: "Certification Courses",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      courses: [
        {
          title: "Software Testing",
          duration: "4-6 Months",
          link: "/software-testing-training"
        },
        {
          title: "Manual Testing",
          duration: "3-4 Months",
          link: "/manual-testing"
        },
        {
          title: "Selenium Automation Testing",
          duration: "4-6 Months",
          link: "/selenium-testing"
        },
        {
          title: "ISTQB Certification",
          duration: "2-3 Months",
          link: "/istqb-certification"
        },
        {
          title: "Full Stack Java Development",
          duration: "6-8 Months",
          link: "/full-stack-java-development"
        },
        {
          title: "Full Stack Python Development",
          duration: "6-8 Months",
          link: "/full-stack-python-development"
        },
        {
          title: "Full Stack Web Development",
          duration: "6-8 Months",
          link: "/web-development-course"
        },
        {
          title: "Full Stack .NET Development",
          duration: "6-8 Months",
          link: "/full-stack-dotnet-development"
        },
        {
          title: "Java Development",
          duration: "4-6 Months",
          link: "/java-training"
        },
        {
          title: "Python Development",
          duration: "4-6 Months",
          link: "/python-training"
        },
        {
          title: "MEAN Stack Development",
          duration: "6-8 Months",
          link: "/mean-stack-development"
        },
        {
          title: "MERN Stack Development",
          duration: "6-8 Months",
          link: "/mern-stack-development"
        },
        {
          title: "React JS Development",
          duration: "3-4 Months",
          link: "/react-course"
        },
        {
          title: "Angular Development",
          duration: "3-4 Months",
          link: "/angular-course"
        },
        {
          title: "Web Designing",
          duration: "4-6 Months",
          link: "/web-designing-training"
        },
        {
          title: "Data Science & Analytics",
          duration: "8-10 Months",
          link: "/python-data-science"
        },
        {
          title: "Big Data Engineering",
          duration: "6-8 Months",
          link: "/big-data-engineering"
        },
        {
          title: "RPA",
          duration: "4-6 Months",
          link: "/rpa"
        }
      ]
    },
    "non-it": {
      title: "Placement Courses with AI",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      courses: [
        {
          title: "Software Testing with AI",
          duration: "4-6 Months",
          link: "/software-testing-training"
        },
        {
          title: "Full Stack Java Development with AI",
          duration: "6-8 Months",
          link: "/full-stack-java-development"
        },
        {
          title: "Full Stack Python Development with AI",
          duration: "6-8 Months",
          link: "/full-stack-python-development"
        },
        {
          title: "Full Stack .NET Development with AI",
          duration: "6-8 Months",
          link: "/full-stack-dotnet-development"
        },
        {
          title: "Digital Marketing with AI",
          duration: "4-6 Months",
          link: "/digital-marketing"
        },
        {
          title: "Data Science with AI",
          duration: "8-10 Months",
          link: "/python-data-science"
        },
        {
          title: "Data Analytics with AI",
          duration: "4-6 Months",
          link: "/data-analysis-visualization"
        }
      ]
    },
    eclass: {
      title: "E-Class Courses",
      icon: Award,
      color: "from-orange-500 to-red-500",
      courses: [
        {
          title: "Online Full Stack Development",
          duration: "6-8 Months",
          link: "/web-development-course"
        },
        {
          title: "Online Data Science",
          duration: "8-10 Months",
          link: "/python-data-science"
        },
        {
          title: "Online Digital Marketing",
          duration: "4-6 Months",
          link: "/digital-marketing"
        },
        {
          title: "Online Software Testing",
          duration: "4-6 Months",
          link: "/software-testing-training"
        }
      ]
    },
    degree: {
      title: "Degree Programs",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      courses: [
        {
          title: "BCA (Bachelor of Computer Applications)",
          duration: "3 Years",
          link: "/bca"
        },
        {
          title: "Quastech Degree Program",
          duration: "3-4 Years",
          link: "/quastech-degree-program"
        }
      ]
    }
  };

  const currentData = courseData[type];

  return (
    <div className="w-full">
      {/* Course Category Tabs */}
      <div className="flex gap-2 mb-6">
        {Object.entries(courseData).map(([key, data]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTabChange?.(key as "it" | "non-it" | "eclass" | "degree")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              type === key
                ? 'bg-white text-blue-600 border-2 border-blue-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {key === 'it' ? 'IT PLACEMENT COURSES' :
             key === 'non-it' ? 'NON IT PLACEMENT COURSES' :
             key === 'eclass' ? 'E Class' :
             'Degree'}
          </motion.button>
        ))}
      </div>

      {/* Course Cards - Unified Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {currentData.courses.map((course, index) => {
        const cardContent = (
          <Card className="border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer h-full">
            <CardContent className="p-4">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3 text-blue-500" />
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>
                <div className="flex justify-end mt-3">
                  <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
        
        return (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            {course.link ? (
              <Link to={course.link} onClick={onClose}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            )}
          </motion.div>
        );
      })}
      </div>

      {/* Call to Action */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Looking for Guidance ?
          </p>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            onClick={onClose}
          >
            <Phone className="w-4 h-4" />
            Request A Call Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
