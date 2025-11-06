import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Headset, Building, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

// Branch data
const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address: "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.97089!3d19.19178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzMwLjQiTiA3MsKwNTgnMTUuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+thane"
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address: "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.85581!3d19.23083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzUxLjAiTiA3MsKwNTEnMjAuOSJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+borivali"
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address: "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.00787!3d19.07618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjIiTiA3M8KwMDAnMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+vashi"
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address: "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 7208008461",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.69124!3d30.70332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzEyLjAiTiA3NsKwNDEnMjguNSJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+mohali"
  }
];

const ContactPage = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message with all contact form data
    const whatsappMessage = `*Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📚 *Course Interest:* ${formData.course || 'Not specified'}
💬 *Message:* ${formData.message || 'No additional message'}

I would like to get in touch with you regarding the course.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // QUASTECH WhatsApp number
    const whatsappNumber = "918422800381";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  const contactMethods = [
    { icon: Phone, title: "Call Us", value: "+91 8422800381", link: "tel:+918422800381", color: "from-blue-500 to-cyan-500" },
    { icon: Mail, title: "Email Us", value: "info@quastech.in", link: "mailto:info@quastech.in", color: "from-purple-500 to-pink-500" },
    { icon: MessageCircle, title: "WhatsApp", value: "+91 8422800381", link: "https://wa.me/918422800381", color: "from-green-500 to-emerald-500" }
  ];

  const contactCards = [
    { title: "Corporate Training", email: "corporate@quastech.in", icon: "🏢", color: "from-blue-500/20 to-cyan-500/20" },
    { title: "Student Query", email: "enquiry@quastech.in", icon: "🎓", color: "from-purple-500/20 to-pink-500/20" },
    { title: "Admission Info", email: "admission@quastech.in", icon: "📝", color: "from-orange-500/20 to-red-500/20" },
    { title: "HR & Placement", email: "hr@quastech.in", icon: "💼", color: "from-green-500/20 to-emerald-500/20" },
    { title: "Become A Partner", email: "partners@quastech.in", icon: "🤝", color: "from-indigo-500/20 to-purple-500/20" },
    { title: "Become Instructor", email: "instructor@quastech.in", icon: "👨‍🏫", color: "from-pink-500/20 to-rose-500/20" }
  ];


  return (
    <DarkModeProvider>
      <SEO 
        title="Contact Us - Get in Touch with QUASTECH"
        description="Contact QUASTECH IT Training Institute - Multiple branches across Ahmedabad, Mumbai, and Pune. Get course details, visit our centers, or enquire about placements. Call us or visit our locations for free career counseling."
        keywords="contact QUASTECH, IT training contact, course enquiry, visit training center, Ahmedabad IT institute contact, career counseling, free demo class"
        canonical="/contact"
        category="Contact"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" }
        ]}
      />
      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Header />
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Banner with Gradient Background - Same as Hero Component */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Clean Professional Hero Gradient - Same as Hero Component */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
          
          {/* Subtle Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20" />
          
          {/* Professional Mesh Overlay */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
          
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 9, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
          />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
            {/* Floating 3D Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="hidden 2xl:block absolute left-4 top-16"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs">24/7 Support</p>
                    <p className="text-white font-bold text-sm">Available</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="hidden 2xl:block absolute left-4 bottom-16"
            >
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotateY: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs">Quick Reply</p>
                    <p className="text-white font-bold text-sm">In 1 Hour</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated 3D Geometric Shapes - Bubbles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  y: [0, -100, -200],
                  x: [0, Math.random() * 100 - 50, Math.random() * 150 - 75],
                  rotate: [0, 180, 360],
                  scale: [1, 1.5, 0.5]
                }}
                transition={{ 
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                className="absolute bottom-0 pointer-events-none"
                style={{ 
                  left: `${10 + i * 15}%`,
                }}
              >
                <div 
                  className={`w-4 h-4 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'} bg-gradient-to-br ${
                    i % 3 === 0 ? 'from-blue-400 to-cyan-500' : 
                    i % 3 === 1 ? 'from-orange-400 to-pink-500' : 
                    'from-purple-400 to-blue-500'
                  } blur-sm`}
                />
              </motion.div>
            ))}

            {/* Dynamic Animated Lines */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0,
              }}
            />
            
            <motion.div
              className="absolute top-1/3 right-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay: 2,
              }}
            />

            <motion.div
              className="absolute top-2/3 right-1/3 w-36 h-0.5 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1.5,
              }}
            />

            {/* Geometric Shapes - Floating Elements */}
            <motion.div
              className="absolute top-20 right-20 w-12 h-12 border border-blue-300/20 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-32 left-32 w-8 h-8 border border-orange-300/20 rounded-full"
              animate={{
                rotate: [0, -360],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute top-1/2 right-10 w-10 h-10 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-20 right-40 w-14 h-14 border-2 border-purple-300/15 rotate-45"
              animate={{
                rotate: [45, 405],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white relative"
            >
              {/* Floating particles behind text */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-extrabold mb-3 relative"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent border-l-4 border-orange-500 pl-4">
                  GET IN TOUCH
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-base md:text-lg text-white/90 leading-relaxed pl-6">
                  We Accelerate Customer Experiences
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg text-blue-100 leading-relaxed pl-6 max-w-2xl"
              >
                In this competitive world where each industry demands more, we help you in transforming your skill base that drives measurable impact on your Professional Life.
              </motion.p>

              {/* Contact Details in Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pl-6 mt-8"
              >
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                  {/* Call Us */}
                  <motion.a
                    href="tel:+918422800381"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                    <p className="text-white/90 font-medium">+91 8422800381</p>
                  </motion.a>

                  {/* Email Us */}
                  <motion.a
                    href="mailto:info@quastech.in"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                    <p className="text-white/90 font-medium">info@quastech.in</p>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/918422800381"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
                    <p className="text-white/90 font-medium">+91 8422800381</p>
                  </motion.a>
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mt-6 pt-6 border-t border-white/20"
                >
                  <p className="text-white/80 text-lg">
                    Available 24/7 for your career guidance needs
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Decorative Circle Behind */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-2xl"
                />
                
                {/* Contact Illustration */}
                <motion.img
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  src="/images/studentreviewnamesaspercourses/contect us.png"
                  alt="Contact Us"
                  className="relative w-96 h-96 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Details - Side by Side with 3D Effect */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Enquiry Form - 3D Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div 
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">Send Us A Message</h3>
                        <p className="text-gray-600">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name *"
                            required
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address *"
                            required
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none"
                          />
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number *"
                            required
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none"
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none"
                          >
                            <option value="">Select Course</option>
                            <option value="software-testing">Software Testing</option>
                            <option value="full-stack">Full Stack Development</option>
                            <option value="data-science">Data Science</option>
                            <option value="digital-marketing">Digital Marketing</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none resize-none"
                        />
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information - 3D Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Get personalized course recommendations",
                      "Schedule a free demo class",
                      "Discuss flexible payment options",
                      "Talk to our career counselors",
                      "Visit our training centers"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Monday - Saturday</p>
                        <p className="text-gray-600">9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Sunday</p>
                        <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Cards - 3D Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Contact Departments
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`group relative bg-gradient-to-br ${card.color} backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20`}
                >
                  {/* Icon and Title - Side by Side */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                  </div>
                  
                  {/* Email Section */}
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href={`mailto:${card.email}`}
                      className="text-blue-600 hover:text-orange-600 font-semibold transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                    >
                      {card.email}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-orange-500"
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media - Modern Design */}
        <section className="py-12 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-white lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Stay Connected with Us!
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Follow our social media channels for the latest updates, events, and exclusive content. 
                  Don't miss out—join our community today!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-4 gap-4 lg:w-1/2 justify-items-center"
              >
                {[
                  { Icon: Facebook, link: "https://facebook.com/quastech", color: "#1877F2" },
                  { Icon: Instagram, link: "https://instagram.com/quastech", color: "#E4405F" },
                  { Icon: Linkedin, link: "https://linkedin.com/company/quastech", color: "#0A66C2" },
                  { Icon: Youtube, link: "https://youtube.com/@quastech", color: "#FF0000" },
                  { Icon: Twitter, link: "https://twitter.com/quastech", color: "#000000" },
                  { Icon: MessageCircle, link: "https://wa.me/918422800381", color: "#25D366" },
                  { Icon: Mail, link: "mailto:info@quastech.in", color: "#EA4335" },
                  { Icon: Phone, link: "tel:+918422800381", color: "#4285F4" },
                ].map(({ Icon, link, color }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{ backgroundColor: "white" }}
                  >
                    <Icon className="w-8 h-8" style={{ color }} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Branches Section - 3D Tabs */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
                <Building className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-600 tracking-wide">OUR CAMPUSES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Visit Our Branches
                </span>
              </h2>
              <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-3" />
              <p className="text-lg text-slate-600">Choose your nearest location</p>
            </motion.div>

            {/* Branch Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {branchesData.map((branch) => (
                <motion.button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                    selectedBranch === branch.id
                      ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-xl scale-110"
                      : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  {branch.name}
                </motion.button>
              ))}
            </div>

            {/* Branch Details - 3D Card */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-6 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentBranch?.name}</h3>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                  >
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{currentBranch?.address}</p>
                  </motion.div>

                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    href={`tel:${currentBranch?.phone}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-gray-700 hover:text-green-600 transition"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    {currentBranch?.phone}
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    href={`mailto:${currentBranch?.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 text-gray-700 hover:text-orange-600 transition"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    {currentBranch?.email}
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(currentBranch?.directionUrl, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </motion.button>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
                  <iframe
                    src={currentBranch?.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default ContactPage;
