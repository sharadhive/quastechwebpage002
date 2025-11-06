import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  MessageCircle,
  Play,
  ArrowLeft,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const reviews = [
    {
      name: "Dipesh Sawant",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Dipesh sawant -Software Testing.png",
      review: "The Software Testing course at QUASTECH is exceptional. The curriculum is up-to-date with industry standards, and the placement assistance is phenomenal. I highly recommend QUASTECH to anyone looking to break into tech.",
      videoUrl: "#"
    },
    {
      name: "Nidhi Yelonde",
      role: "Full Stack Java Developer",
      course: "Full Stack Java Development",
      rating: 5,
      image: "/images/NewStudentReview/Nidhi Yelonde - Full stack java Development.png",
      review: "QUASTECH's Full Stack Java program gave me the skills and confidence I needed. The hands-on projects and expert guidance helped me secure a great position. Highly recommended for anyone serious about Java development!",
      videoUrl: "#"
    },
    {
      name: "Amey Pakhare",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Amey Pakhare-Software Testing.png",
      review: "The practical testing approach at QUASTECH helped me master manual and automation testing. The trainers are industry experts who provided valuable insights. Thanks to their support, I landed my dream testing job!",
      videoUrl: "#"
    },
    {
      name: "Ashish Raut",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/ashish raut -Software Testing.png",
      review: "QUASTECH's Software Testing course is comprehensive and practical. From Selenium to manual testing, I gained all the skills needed for the industry. The placement support was exceptional!",
      videoUrl: "#"
    },
    {
      name: "Karishma Yadav",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/karishma yadav - Software Testing.png",
      review: "The testing methodologies and tools I learned at QUASTECH made me industry-ready. The mock interviews and resume guidance helped me crack multiple interviews. Grateful for the amazing support!",
      videoUrl: "#"
    },
    {
      name: "Prashant Karande",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Prashant Karande -Software Testing.png",
      review: "QUASTECH's hands-on approach to software testing gave me real-world experience. The instructors are supportive and the curriculum is industry-focused. Successfully placed within weeks of completing the course!",
      videoUrl: "#"
    },
    {
      name: "Yesh Mhatre",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Yesh Mhatre -Software Testing.png",
      review: "From basics to advanced automation, QUASTECH covered everything needed for a testing career. The practical sessions and live projects built my confidence. Highly recommend for aspiring testers!",
      videoUrl: "#"
    },
    {
      name: "Akshay Patil",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Akshay patil -Software Testing.png",
      review: "QUASTECH's testing program is thorough and industry-oriented. The practical approach and real-world scenarios prepared me perfectly for my testing career. The placement support was outstanding!",
      videoUrl: "#"
    },
    {
      name: "Barkha Tiwari",
      role: "Java Developer",
      course: "Java Development",
      rating: 5,
      image: "/images/NewStudentReview/Barkha Tiwari - Java Development.png",
      review: "The Java Development course at QUASTECH gave me a strong foundation in programming. From core Java to advanced frameworks, I learned everything needed to excel. The instructors are truly knowledgeable!",
      videoUrl: "#"
    },
    {
      name: "Kanchan Rane",
      role: "Java Developer",
      course: "Java Development",
      rating: 5,
      image: "/images/NewStudentReview/Kanchan Rane - Java Developer.png",
      review: "QUASTECH's Java training is exceptional. The hands-on projects and expert mentorship helped me transition into a successful Java developer role. The placement assistance made all the difference!",
      videoUrl: "#"
    },
    {
      name: "Mahalaxmi Karthesan",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Mahalaxmi Karthesan -Software Testing.png",
      review: "The comprehensive Software Testing program at QUASTECH equipped me with all necessary skills. From manual to automation testing, the training was top-notch. Successfully placed with great package!",
      videoUrl: "#"
    },
    {
      name: "Mayur Hedau",
      role: "Java Developer",
      course: "Java Development",
      rating: 5,
      image: "/images/NewStudentReview/Mayur Hedau- Java Developer.png",
      review: "QUASTECH's Java course is well-structured and practical. The trainers provided excellent guidance throughout. The real-world projects helped me build a strong portfolio. Highly recommend!",
      videoUrl: "#"
    },
    {
      name: "Parav Thakur",
      role: "Full Stack Python Developer",
      course: "Full Stack Python Development",
      rating: 5,
      image: "/images/NewStudentReview/Parav Thakur  - Full Stack Python.png",
      review: "The Full Stack Python program at QUASTECH is comprehensive. From Django to React integration, I learned cutting-edge technologies. The placement support helped me land my dream job!",
      videoUrl: "#"
    },
    {
      name: "Rohan Kute",
      role: ".NET Developer",
      course: ".NET Development",
      rating: 5,
      image: "/images/NewStudentReview/Rohan Kute - .Net Development.png",
      review: "QUASTECH's .NET Development course gave me the skills to build enterprise applications. The practical training and expert guidance were invaluable. Successfully transitioned to a high-paying developer role!",
      videoUrl: "#"
    },
    {
      name: "Roshni Pathak",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Roshni Pathak - Software Testing.png",
      review: "The Software Testing training at QUASTECH is excellent. The combination of theory and practical sessions made learning effective. The placement team's support was phenomenal in securing my job!",
      videoUrl: "#"
    },
    {
      name: "Sarjerao Patil",
      role: "Software Testing Engineer",
      course: "Software Testing",
      rating: 5,
      image: "/images/NewStudentReview/Sarjerao Patil  -Software Testing.png",
      review: "QUASTECH's Software Testing program transformed my career. The comprehensive curriculum and hands-on training gave me the confidence to excel. The placement assistance was exceptional!",
      videoUrl: "#"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "5000+", label: "Reviews", icon: MessageCircle },
    { value: "98%", label: "Recommend Us", icon: ThumbsUp }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const openVideoModal = (videoUrl: string) => {
    // Convert Instagram URL to embed format
    const embedUrl = videoUrl.replace('/p/', '/p/').replace('/?hl=en', '/embed/');
    setCurrentVideoUrl(embedUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl("");
  };

  return (
    <section id="reviews" className="section-spacing-compact bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
      <div className="container mx-auto container-padding relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 mt-3 md:mt-4"
        >
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <Star className="w-4 h-4 md:w-5 md:h-5" />
            SUCCESS STORIES
          </div>
          <h2 className="heading-section gradient-text-primary mb-3 md:mb-4">
            Alumni Transforming Their Careers
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-3 md:p-4 border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-0 flex flex-col items-center justify-center">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mb-2" />
                  <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Review */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 md:mb-8"
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-primary p-4 md:p-5 text-white relative">
              <Quote className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 opacity-30" />
              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-white/20 flex-shrink-0">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold truncate">{reviews[currentReview].name}</h3>
                  <p className="text-white/90 text-sm md:text-base truncate">{reviews[currentReview].role}</p>
                  <p className="text-white/80 text-xs md:text-sm truncate">{reviews[currentReview].course}</p>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm">({reviews[currentReview].rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4 md:p-5">
              <blockquote className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>
              
              <div className="flex items-center justify-end gap-3">
                {reviews[currentReview].hasVideo && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openVideoModal(reviews[currentReview].videoUrl)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevReview}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextReview}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* All Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full min-h-[180px] max-h-[180px] border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 h-full flex flex-col">
                    <div className="flex gap-2.5 mb-2">
                      {/* Left Side - Image */}
                      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Right Side - Name, Role, Stars */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate leading-tight mb-0.5">{review.name}</h4>
                        <p className="text-xs text-muted-foreground truncate">{review.role}</p>
                        <div className="flex mt-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <blockquote className="text-xs text-muted-foreground line-clamp-3 flex-grow mb-2 leading-tight">
                      "{review.review.substring(0, 85)}..."
                    </blockquote>
                    
                    {/* Buttons */}
                    <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-gray-100">
                      {review.hasVideo && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openVideoModal(review.videoUrl)}
                          className="text-blue-600 hover:text-blue-700 text-xs h-6 px-2 flex-1"
                        >
                          <Play className="w-3 h-3 mr-0.5" />
                          Video
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs h-6 px-2 flex-1"
                        onClick={() => setCurrentReview(reviews.indexOf(review))}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 md:mt-10"
        >
          <div className="bg-gradient-hero rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white shadow-lg max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xs md:text-sm mb-4 md:mb-5 text-white/90">
              Join thousands of successful professionals who transformed their careers with QUASTECH
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <Button variant="glass" size="lg" className="text-xs md:text-sm font-semibold h-10 md:h-11">
                Start Your Journey Today
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary text-xs md:text-sm h-10 md:h-11">
                View Placements
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Instagram Embed */}
              <div className="w-full aspect-[9/16] bg-gray-100">
                <iframe
                  src={currentVideoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  title="Student Video Review"
                />
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="font-bold text-lg mb-1">{reviews[currentReview].name}</h3>
                <p className="text-sm text-white/90">{reviews[currentReview].role}</p>
                <p className="text-xs text-white/80 mt-1">{reviews[currentReview].course}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Reviews;