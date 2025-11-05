import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone as PhoneIcon, Calendar, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookDemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoForm = ({ isOpen, onClose }: BookDemoFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message with all form data
    const whatsappMessage = `*Demo Class Booking Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📚 *Course:* ${formData.course || 'Not specified'}
📅 *Preferred Date:* ${formData.preferredDate || 'Flexible'}
⏰ *Preferred Time:* ${formData.preferredTime || 'Flexible'}
💬 *Message:* ${formData.message || 'No additional message'}

I would like to book a free demo class. Please confirm the schedule.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // QUASTECH WhatsApp number
    const whatsappNumber = "918422800381";
    
    // Create WhatsApp URL - this will open WhatsApp with the message pre-filled
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Log for debugging
    console.log("📱 Sending to WhatsApp:");
    console.log("Message:", whatsappMessage);
    console.log("URL:", whatsappURL);
    
    // Open WhatsApp - the message will be ready, user just clicks Send button in WhatsApp
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    if (whatsappWindow) {
      // Successfully opened
      toast({
        title: "✅ WhatsApp Opened!",
        description: "Your demo request is ready in WhatsApp. Just click Send!",
      });
      
      // Reset form and close modal after a short delay
      setTimeout(() => {
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          course: "",
          preferredDate: "",
          preferredTime: "",
          message: "" 
        });
        onClose();
      }, 2000);
    } else {
      // Popup blocked - try alternative
      toast({
        title: "⚠️ Allow Popups",
        description: "Please allow popups to open WhatsApp with your details",
        variant: "destructive"
      });
      
      // Try opening in same window as fallback
      window.location.href = whatsappURL;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-md z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Book Free Demo Class
                </h2>
                <p className="text-white/90 text-xs mt-0.5">Schedule your demo via WhatsApp</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-600" />
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-600" />
                Email *
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <PhoneIcon className="w-3.5 h-3.5 text-orange-600" />
                Phone *
              </label>
              <Input
                type="tel"
                placeholder="10 digit number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Course Selection */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                Course Interest *
              </label>
              <Select 
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
                required
              >
                <SelectTrigger className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="z-[10000] max-h-[300px] overflow-y-auto">
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

            {/* Preferred Date */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-600" />
                Preferred Date (Optional)
              </label>
              <Input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Preferred Time */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">
                Preferred Time (Optional)
              </label>
              <Select 
                value={formData.preferredTime}
                onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
              >
                <SelectTrigger className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent className="z-[10000]">
                  <SelectItem value="9-11am">9:00 AM - 11:00 AM</SelectItem>
                  <SelectItem value="11am-1pm">11:00 AM - 1:00 PM</SelectItem>
                  <SelectItem value="2-4pm">2:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="4-6pm">4:00 PM - 6:00 PM</SelectItem>
                  <SelectItem value="6-8pm">6:00 PM - 8:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">
                Additional Message (Optional)
              </label>
              <Textarea
                placeholder="Any specific topics or questions?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-2 pt-1">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                Send to WhatsApp
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="px-4 py-2.5 text-sm border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </div>

            <p className="text-[10px] text-gray-500 text-center">
              ✓ Opens WhatsApp with all your details. Just click Send there!
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookDemoForm;

