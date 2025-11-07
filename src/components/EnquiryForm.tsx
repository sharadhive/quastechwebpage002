import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, User, BookOpen, MessageCircle, Users, Building, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BranchVisitForm from "@/components/BranchVisitForm";
import BookDemoForm from "@/components/BookDemoForm";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const { toast } = useToast();
  const [showBranchVisitForm, setShowBranchVisitForm] = useState(false);
  const [showBookDemoForm, setShowBookDemoForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
      toast({
      title: "✅ Enquiry Submitted!",
      description: "Thank you for your interest. We'll contact you shortly.",
      });
      
    // Reset form
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle quick action clicks
  const handleQuickAction = (actionType: string) => {
    switch(actionType) {
      case "Live Chat":
          toast({
          title: "Live Chat",
          description: "Chat feature coming soon!",
          });
        break;
      case "Book Demo":
        setShowBookDemoForm(true);
        break;
      case "Campus Visit":
        setShowBranchVisitForm(true);
        break;
    }
  };

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our counselors",
      action: "Start Chat",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Book Demo",
      description: "Schedule a free demo class",
      action: "Book Now",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Building,
      title: "Campus Visit",
      description: "Visit our campus",
      action: "Schedule Visit",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="enquiry" className="section-spacing-compact relative bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10 mt-3 md:mt-4"
        >
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            GET IN TOUCH
          </div>
          <h2 className="heading-section gradient-text-primary mb-3 md:mb-4">
            Start Your Career Journey
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Call Us - Clickable */}
                <motion.a 
                  href="tel:+918422800381"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 cursor-pointer hover:shadow-md transition-all duration-300 hover:border-blue-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Call Us</p>
                    <p className="text-gray-600 text-sm">+91 8422800381</p>
                  </div>
                </motion.a>

                {/* Email Us - Clickable with professional message */}
                <motion.a 
                  href="mailto:info@quastech.in?subject=Course Enquiry from Website&body=Hello QUASTECH Team,%0D%0A%0D%0AI am interested in learning more about your courses and would like to receive detailed information about:%0D%0A%0D%0A- Available courses and programs%0D%0A- Course duration and schedule%0D%0A- Fee structure and payment options%0D%0A- Placement assistance%0D%0A- Certification details%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you,%0D%0A"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/50 cursor-pointer hover:shadow-md transition-all duration-300 hover:border-orange-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                    <p className="text-gray-600 text-sm">info@quastech.in</p>
                  </div>
                </motion.a>

                {/* Visit Us - Clickable to open branch selection form */}
                <motion.div 
                  onClick={() => setShowBranchVisitForm(true)}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 cursor-pointer hover:shadow-md transition-all duration-300 hover:border-blue-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Visit Us</p>
                    <p className="text-gray-600 text-sm">Tech Hub, Innovation Center<br />Mumbai, Maharashtra</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    onClick={() => handleQuickAction(action.title)}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100/50 border-2 border-gray-200/50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">{action.title}</p>
                      <p className="text-xs text-gray-600">{action.description}</p>
                    </div>
                    <div className={`bg-gradient-to-r ${action.color} text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm group-hover:shadow-md transition-all`}>
                      {action.action}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Send Enquiry
                </CardTitle>
                <p className="text-gray-600 text-sm mt-1">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Mail className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        <Input
                          type="tel"
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Course Interest
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                        <Select onValueChange={(value) => handleChange("course", value)} value={formData.course}>
                          <SelectTrigger className="h-11 pl-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent className="z-[10000] bg-white max-h-[300px] overflow-y-auto">
                            {/* Software Testing */}
                            <SelectItem value="software-testing">Software Testing</SelectItem>
                            <SelectItem value="manual-testing">Manual Testing</SelectItem>
                            <SelectItem value="selenium-testing">Selenium Automation Testing</SelectItem>
                            <SelectItem value="istqb-certification">ISTQB Certification</SelectItem>
                            
                            {/* Fullstack Development */}
                            <SelectItem value="full-stack-java">Full Stack Java Development</SelectItem>
                            <SelectItem value="full-stack-python">Full Stack Python Development</SelectItem>
                            <SelectItem value="full-stack-web">Full Stack Web Development</SelectItem>
                            <SelectItem value="full-stack-dotnet">Full Stack .Net Development</SelectItem>
                            
                            {/* Software Development */}
                            <SelectItem value="java-development">Java Development</SelectItem>
                            <SelectItem value="python-development">Python Development</SelectItem>
                            <SelectItem value="mean-stack">MEAN Stack Development</SelectItem>
                            <SelectItem value="mern-stack">MERN Stack Development</SelectItem>
                            
                            {/* Front End Development */}
                            <SelectItem value="react-js">React JS Development</SelectItem>
                            <SelectItem value="angular">Angular Development</SelectItem>
                            <SelectItem value="web-designing">Web Designing</SelectItem>
                            
                            {/* Data Science & Analytics */}
                            <SelectItem value="data-science">Data Science & Analytics with AI</SelectItem>
                            <SelectItem value="data-analytics">Data Analysis & Visualization</SelectItem>
                            
                            {/* Big Data & RPA */}
                            <SelectItem value="big-data">Big Data Engineering</SelectItem>
                            <SelectItem value="rpa">RPA (Robotic Process Automation)</SelectItem>
                            
                            {/* Non-IT Courses */}
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="graphic-designing">Graphic Designing</SelectItem>
                            <SelectItem value="web-graphic-designing">Web Graphic Designing</SelectItem>
                            <SelectItem value="financial-accounting">Financial Accounting</SelectItem>
                            <SelectItem value="accounting">Accounting</SelectItem>
                            <SelectItem value="taxation">Taxation</SelectItem>
                            
                            {/* Degree Programs */}
                            <SelectItem value="bca">BCA (Bachelor of Computer Applications)</SelectItem>
                            <SelectItem value="quastech-degree">Quastech Degree Program</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your career goals and any specific questions..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3}
                      className="resize-none bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Enquiry
                    </Button>
                  </motion.div>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    ✓ We'll get back to you within 24 hours
                  </p>

                  {/* Partner Logos Section */}
                  <motion.div 
                    className="pt-10 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <p className="text-lg font-bold text-gray-700 mb-8">Certified & Recognized By</p>
                      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                        {/* Skill India Logo */}
                        <motion.div
                          className="flex items-center justify-center bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow h-20 sm:h-22 md:h-24 min-w-[140px] border border-gray-200"
                          whileHover={{ scale: 1.05, y: -3 }}
                        >
                          <img
                            src="/uploads/skillindia--.jpg"
                            alt="Skill India Logo"
                            className="h-full w-auto object-contain"
                          />
                        </motion.div>
                        
                        {/* NSDC Logo */}
                        <motion.div
                          className="flex items-center justify-center bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow h-20 sm:h-22 md:h-24 min-w-[140px] border border-gray-200"
                          whileHover={{ scale: 1.05, y: -3 }}
                        >
                          <img
                            src="/uploads/nsdeimg01.jpg"
                            alt="NSDC Logo"
                            className="h-full w-auto object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Branch Visit Form Modal */}
      <BranchVisitForm 
        isOpen={showBranchVisitForm}
        onClose={() => setShowBranchVisitForm(false)}
      />

      {/* Book Demo Form Modal */}
      <BookDemoForm 
        isOpen={showBookDemoForm}
        onClose={() => setShowBookDemoForm(false)}
      />
    </section>
  );
};

export default EnquiryForm;