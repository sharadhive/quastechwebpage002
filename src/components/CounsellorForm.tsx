import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone as PhoneIcon, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CounsellorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CounsellorForm = ({ isOpen, onClose }: CounsellorFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `
*New Enquiry from QUASTECH Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📚 *Interested Course:* ${formData.course || 'Not specified'}
💬 *Message:* ${formData.message || 'No message'}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // QUASTECH WhatsApp number (replace with actual number)
    const whatsappNumber = "918422800381"; // Format: country code + number (no + or -)
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    onClose();
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

        {/* Modal - Compact Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-md z-10 overflow-hidden"
        >
          {/* Header - Compact */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Speak to Counsellor
                </h2>
                <p className="text-white/90 text-xs mt-0.5">Connect via WhatsApp</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form - Compact */}
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Name Field - Compact */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Email Field - Compact */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                Email *
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Phone Field - Compact */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <PhoneIcon className="w-3.5 h-3.5 text-blue-600" />
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
                className="border border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Course Interest Field - Compact */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">
                Course (Optional)
              </label>
              <Input
                type="text"
                placeholder="Course interest"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="border border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Message Field - Compact */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">
                Message (Optional)
              </label>
              <Textarea
                placeholder="Any questions?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="border border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 text-sm resize-none"
              />
            </div>

            {/* Submit Button - Compact */}
            <div className="flex gap-2 pt-1">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                WhatsApp
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
              Opens WhatsApp with your details
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CounsellorForm;

