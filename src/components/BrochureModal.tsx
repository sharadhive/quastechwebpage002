// src/components/BrochureModal.tsx

import { useState, FC, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Calendar } from "lucide-react";

// Step 1: Define the types for the component's props
interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureUrl: string;
  brochureImageUrl: string;
  whatsappNumber: string;
}

// Step 2: Define the type for the form's state
interface FormDataState {
  name: string;
  email: string;
  mobile: string;
}

// Step 3: Type the component with React.FC (Functional Component) and use the props type
const BrochureModal: FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  brochureUrl,
  brochureImageUrl,
  whatsappNumber,
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    mobile: "",
  });

  // Step 4: Type the event object for the input change handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Step 5: Type the event object for the form submission handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Create the WhatsApp message for demo booking
    const message = `Hello! I would like to book a demo session. My details are:\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 2. Trigger the brochure download (optional - still available)
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.setAttribute("download", "Quastech-Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // 4. Close the modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl m-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Side: Image */}
              <div className="hidden md:block">
                <img
                  src={brochureImageUrl}
                  alt="Quastech Course Promotion"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Side: Form */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-orange-600" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">Book Your Demo</h2>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">Schedule a free demo session and get course brochure</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile Number</label>
                    <input type="tel" id="mobile" value={formData.mobile} onChange={handleInputChange} className="mt-1 w-full border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="Enter 10-digit Mobile Number" required />
                  </div>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="mt-1 w-full border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 w-full border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" placeholder="e.g. yourname@gmail.com" required />
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30">
                    <Calendar size={20} />
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;