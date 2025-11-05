import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Download,
  MoreHorizontal,
  Calendar,
  Briefcase,
  Award,
  Rocket,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Courses = () => {
  // Carousel features that rotate
  const carouselFeatures = [
    { text: "Running Projects", icon: Rocket, color: "from-purple-600 to-purple-700" },
    { text: "Unlimited Interviews", icon: Briefcase, color: "from-blue-600 to-blue-700" },
    { text: "Integrated Internship", icon: Award, color: "from-orange-500 to-orange-600" },
    { text: "100% Job Assistance", icon: TrendingUp, color: "from-green-600 to-green-700" }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [courseAutoPlay, setCourseAutoPlay] = useState(true);

  // Define courses array first
  const courses = [
    {
      icon: Database,
      title: "Data Science & Analytics with AI",
      duration: "8-10 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 2,
      // countdown: "47 hrs : 59 mins : 44 sec",
      features: [
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Python Full Stack Development",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 3,
      // countdown: "23 hrs : 15 mins : 32 sec",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Java Full Stack Development",
      duration: "7-9 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 1,
      // countdown: "12 hrs : 30 mins : 15 sec",
      features: [
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/django.jpg"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      duration: "5-7 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 4,
      // countdown: "18 hrs : 45 mins : 22 sec",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/python.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      duration: "10-12 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 2,
      // countdown: "35 hrs : 20 mins : 18 sec",
      features: [
        "/coursesicons/python.jpg",
        "/coursesicons/django.jpg",
        "/coursesicons/mysql.jpg",
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/bootstrap.jpg"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      // seatsLeft: 3,
      // countdown: "28 hrs : 12 mins : 45 sec",
      features: [
        "/coursesicons/html.jpg",
        "/coursesicons/css.jpg",
        "/coursesicons/jquery.jpg",
        "/coursesicons/bootstrap.jpg",
        "/coursesicons/python.jpg",
        "/coursesicons/mysql.jpg"
      ],
      color: "from-red-500 to-orange-600"
    }
  ];

  // Auto-rotate carousel features
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4); // 4 features total
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Auto-rotate course cards every 4 seconds
  useEffect(() => {
    if (!courseAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [courseAutoPlay, courses.length]);

  // Navigate to previous feature
  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentFeature((prev) => (prev - 1 + 4) % 4);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Navigate to next feature
  const handleNext = () => {
    setAutoPlay(false);
    setCurrentFeature((prev) => (prev + 1) % 4);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Navigate courses left/right
  const handleCoursePrevious = () => {
    setCourseAutoPlay(false);
    setCurrentCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setCourseAutoPlay(true), 5000);
  };

  const handleCourseNext = () => {
    setCourseAutoPlay(false);
    setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setCourseAutoPlay(true), 5000);
  };

  return (
    <section id="courses" className="section-padding bg-gradient-mesh overflow-hidden relative z-10">
      <div className="container mx-auto container-padding overflow-hidden px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-base font-semibold">
            <Code className="w-6 h-6 mr-1 text-white" />
            COURSES
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
              Transform Your Career
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed by industry experts 
            with hands-on projects and guaranteed placement assistance.
          </p>
        </motion.div>

        {/* Courses Slider with Professional Cards */}
        <div className="relative overflow-visible py-4">
          {/* Mobile: Single Card with Navigation */}
          <div className="block md:hidden relative py-4">
            {/* Navigation Arrows for Mobile */}
            <motion.button
              onClick={handleCoursePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={handleCourseNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Display Single Course Card */}
            <div className="flex justify-center px-14">
              {(() => {
                const course = courses[currentCourseIndex];
                return (
            <motion.div
              key={`${course.title}-${currentCourseIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              className="group w-full max-w-md"
            >
                <Card className="w-full min-h-[500px] sm:min-h-[520px] overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white transform-gpu">
                  {/* Compact Header - Countdown and Seats Side by Side */}
                  {/* <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-orange-50">
                    <div className="flex items-center gap-2">
                      <Timer className="w-3 h-3 text-institute-blue" />
                      <div>
                        <div className="text-xs text-gray-600">Next batch starts in</div>
                        <div className="text-sm font-bold text-institute-blue">{course.countdown}</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {course.seatsLeft} seats left
                    </div>
                  </div> */}

                  <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                    {/* Main Content - Course Icon Left, Details Right */}
                    <div className="flex gap-4 mb-4 min-h-[85px] sm:min-h-[90px]">
                      {/* Course Icon - Left Side */}
                      <motion.div 
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <course.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      
                      {/* Course Details - Right Side */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-snug min-h-[50px] flex items-center">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Clock className="w-4 h-4 text-institute-blue flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-tight">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-institute-orange flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-tight">{course.batchTypes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technology Logos - All 6 in 1 Line */}
                    <div className="mb-4">
                      <div className="flex justify-center gap-2 flex-wrap">
                        {course.features.slice(0, 6).map((imgSrc, idx) => (
                          <motion.div 
                            key={idx} 
                            className="w-12 h-12 sm:w-13 sm:h-13 bg-white rounded-lg shadow-md border border-gray-200 flex-shrink-0 overflow-hidden p-0"
                            whileHover={{ scale: 1.1, y: -2, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={imgSrc}
                              alt="Tech"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Feature Carousel - Animated with Controls */}
                    <div className="mb-5 h-10 flex items-center justify-center gap-2">
                      {/* Left Arrow */}
                      <motion.button
                        onClick={handlePrevious}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-700" />
                      </motion.button>

                      {/* Feature Display */}
                      <div className="flex-1 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {(() => {
                            const CurrentIcon = carouselFeatures[currentFeature].icon;
                            return (
                              <motion.div
                                key={currentFeature}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={`bg-gradient-to-r ${carouselFeatures[currentFeature].color} text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg`}
                              >
                                <CurrentIcon className="w-4 h-4" />
                                {carouselFeatures[currentFeature].text.toUpperCase()}
                              </motion.div>
                            );
                          })()}
                        </AnimatePresence>
                      </div>

                      {/* Right Arrow */}
                      <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </motion.button>
                    </div>

                    {/* Bottom Buttons - Compact */}
                    <div className="mt-auto space-y-2.5 pb-4">
                      <div className="flex gap-2.5">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-sm transition-all duration-300 font-semibold min-w-0 py-2.5"
                        >
                          <Download className="w-4 h-4 mr-1.5 flex-shrink-0" />
                          <span className="relative z-10">Download</span>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm min-w-0 py-2.5"
                        >
                          <MoreHorizontal className="w-4 h-4 mr-1.5 flex-shrink-0" />
                          <span>Know More</span>
                        </Button>
                      </div>
                      
                      {/* Enroll Now Button */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          alert(`Enrolling in ${course.title}! We'll contact you soon.`);
                        }}
                        className="cursor-pointer"
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-sm border-0"
                        >
                          <motion.span 
                            className="relative z-10 flex items-center justify-center gap-2"
                            whileHover={{ x: 1 }}
                          >
                            <span>Enroll Now</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
                );
              })()}
            </div>
          </div>

          {/* Desktop: Manual Navigation with Arrows */}
          <div className="hidden md:block relative py-4">
            {/* Navigation Arrows - Positioned Outside Cards with Higher Z-Index */}
            <motion.button
              onClick={handleCoursePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={handleCourseNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Course Cards Display - Show 3 at a time */}
            <div className="flex gap-4 lg:gap-6 xl:gap-8 justify-center px-20">
              {[0, 1, 2].map((offset) => {
                const courseIndex = (currentCourseIndex + offset) % courses.length;
                const course = courses[courseIndex];
                return (
              <motion.div
                key={`${course.title}-${offset}`}
                className="flex-shrink-0 w-72 md:w-80 group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: offset * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="min-h-[470px] md:min-h-[490px] w-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white transform-gpu">
                  <CardContent className="p-5 flex flex-col h-full min-h-[470px] md:min-h-[490px]">
                    {/* Main Content - Course Icon Left, Details Right */}
                    <div className="flex gap-4 mb-4 min-h-[100px]">
                      {/* Course Icon - Left Side */}
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <course.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Course Details - Right Side */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-snug min-h-[52px] flex items-center">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Clock className="w-4 h-4 text-institute-blue flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-tight">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-institute-orange flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-tight">{course.batchTypes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technology Logos - All 6 in 1 Line */}
                    <div className="mb-5">
                      <div className="flex justify-center gap-2 flex-wrap">
                        {course.features.slice(0, 6).map((imgSrc, idx) => (
                          <motion.div 
                            key={idx} 
                            className="w-11 h-11 bg-white rounded-lg shadow-md border border-gray-200 flex-shrink-0 overflow-hidden p-0"
                            whileHover={{ scale: 1.1, y: -2, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={imgSrc}
                              alt="Tech"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Feature Carousel - Animated with Controls */}
                    <div className="mb-5 h-10 flex items-center justify-center gap-3">
                      {/* Left Arrow */}
                      <motion.button
                        onClick={handlePrevious}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-md"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </motion.button>

                      {/* Feature Display */}
                      <div className="flex-1 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {(() => {
                            const CurrentIcon = carouselFeatures[currentFeature].icon;
                            return (
                              <motion.div
                                key={currentFeature}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={`bg-gradient-to-r ${carouselFeatures[currentFeature].color} text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}
                              >
                                <CurrentIcon className="w-5 h-5" />
                                {carouselFeatures[currentFeature].text.toUpperCase()}
                              </motion.div>
                            );
                          })()}
                        </AnimatePresence>
                      </div>

                      {/* Right Arrow */}
                      <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-md"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </motion.button>
                    </div>

                    {/* Bottom Buttons - Compact */}
                    <div className="mt-auto space-y-2 pb-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-xs transition-all duration-300 font-semibold min-w-0"
                        >
                          <Download className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="relative z-10 truncate">Download</span>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs min-w-0"
                        >
                          <MoreHorizontal className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Know More</span>
                        </Button>
                      </div>
                      
                      {/* Enroll Now Button */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          alert(`Enrolling in ${course.title}! We'll contact you soon.`);
                        }}
                        className="cursor-pointer"
                      >
                    <Button
                      variant="default"
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 hover:from-blue-700 hover:via-blue-800 hover:to-orange-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-sm border-0"
                        >
                          <motion.span 
                            className="relative z-10 flex items-center justify-center gap-2"
                            whileHover={{ x: 1 }}
                          >
                            <span>Enroll Now</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </motion.span>
                    </Button>
                      </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-hero rounded-3xl p-12 lg:p-16 text-white shadow-xl">
            <h3 className="heading-md mb-6">
              🚀 Transform Your Career with Expert Guidance
            </h3>
            <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with our <span className="font-semibold text-white">industry-expert career counselors</span> for personalized course recommendations tailored to your goals and unlock your potential with the perfect course match designed for success!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="glass" size="xl" className="text-lg font-bold hover:scale-105 transition-transform">
                🎯 Get Free Career Counseling →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
