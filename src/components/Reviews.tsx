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
      name: "Saurabh Devlekar",
      role: "Software Engineer",
      course: "Full Stack Development",
      rating: 5,
      image: "/images/studentreviews01/RewSaurabhDevlekar.jpg",
      review: "QUASTECH completely transformed my career. The instructors are industry experts, and the hands-on projects gave me real-world experience. Within 3 months of completing the course, I landed my dream job!",
      videoUrl: "https://www.instagram.com/p/DKhjEbATXjN/?hl=en",
      hasVideo: true
    },
    {
      name: "Dipesh Sawant",
      role: "Full Stack Developer",
      course: "MERN Stack Development",
      rating: 5,
      image: "/images/studentreviewnamesaspercourses/dipeshsavantsoftwaretesting.png",
      review: "The Data Science course at QUASTECH is exceptional. The curriculum is up-to-date with industry standards, and the placement assistance is phenomenal. I highly recommend QUASTECH to anyone looking to break into tech.",
      videoUrl: "#"
    },
    {
      name: "Kanchan Rane",
      role: "Data Scientist",
      course: "Data Science & AI",
      rating: 5,
      image: "/images/studentreviews01/RewKanchanRane.jpg",
      review: "The practical approach and live projects at QUASTECH made all the difference. The mentorship and career guidance helped me transition from a non-tech background to landing a role at a top company.",
      videoUrl: "#"
    },
    {
      name: "Omkar Bhagojikarkare",
      role: "DevOps Engineer",
      course: "DevOps & Cloud Computing",
      rating: 5,
      image: "/images/studentreviews01/RewOmkarBhagojikarkare.jpg",
      review: "QUASTECH's mobile development course is comprehensive and practical. The instructors provide personal attention, and the placement cell worked tirelessly to help me secure my position.",
      videoUrl: "#"
    },
    {
      name: "Pooja Khapar",
      role: "Mobile App Developer",
      course: "Mobile App Development",
      rating: 5,
      image: "/images/studentreviews01/RewPoojaKhapar.jpg",
      review: "The cybersecurity program at QUASTECH is world-class. Real-world scenarios, hands-on labs, and expert mentorship prepared me for the challenges in the industry. Grateful for the excellent placement support!",
      videoUrl: "#"
    },
    {
      name: "Sarjerao Sanjay Patil",
      role: "Software Engineer",
      course: "Full Stack Development",
      rating: 5,
      image: "/images/studentreviews01/RewSarjeraoSanjayPatil.jpg",
      review: "QUASTECH provided me with the perfect foundation for my tech career. The comprehensive curriculum and practical projects helped me develop strong technical skills. The placement support was outstanding!",
      videoUrl: "#"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "2500+", label: "Reviews", icon: MessageCircle },
    { value: "95%", label: "Recommend Us", icon: ThumbsUp }
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
    <section id="reviews" className="section-spacing-compact bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto container-padding">
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
          className="grid grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-4 md:p-5 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-yellow-500 mx-auto mb-2 md:mb-3" />
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
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
          className="mb-8 md:mb-10"
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-primary p-5 md:p-6 text-white relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 opacity-30" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{reviews[currentReview].name}</h3>
                  <p className="text-white/90">{reviews[currentReview].role}</p>
                  <p className="text-white/80 text-sm">{reviews[currentReview].course}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm">({reviews[currentReview].rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-5 md:p-6">
              <blockquote className="text-base md:text-lg text-muted-foreground mb-4 md:mb-5 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>
              
              <div className="flex items-center justify-end gap-4">
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
          <h3 className="heading-subsection gradient-text-primary text-center mb-8 md:mb-10">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-4">
                      "{review.review.substring(0, 120)}..."
                    </blockquote>
                    
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t">
                      {review.hasVideo && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openVideoModal(review.videoUrl)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Watch Video
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-auto"
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
          className="text-center mt-10 md:mt-12"
        >
          <div className="bg-gradient-hero rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-sm md:text-base mb-5 md:mb-6 text-white/90 max-w-3xl mx-auto">
              Join thousands of successful professionals who transformed their careers with QUASTECH
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button variant="glass" size="lg" className="text-sm md:text-base font-semibold">
                Start Your Journey Today
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary text-sm md:text-base">
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