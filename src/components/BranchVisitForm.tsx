import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BranchVisitFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Branch data from ContactPage with Google Search URLs
const branches = [
  {
    id: "Thane",
    name: "Thane Branch",
    address: "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    mapUrl: "https://www.google.com/search?q=quastech+thane"
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address: "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384",
    email: "info@quastech.in",
    mapUrl: "https://www.google.com/search?q=quastech+borivali"
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address: "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    mapUrl: "https://www.google.com/search?q=quastech+vashi"
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address: "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 7208008461",
    email: "info@quastech.in",
    mapUrl: "https://www.google.com/search?q=quastech+mohali"
  }
];

const BranchVisitForm = ({ isOpen, onClose }: BranchVisitFormProps) => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const { toast } = useToast();

  // Handle branch selection - automatically open map
  const handleBranchSelect = (branchId: string) => {
    setSelectedBranch(branchId);
    
    // Find the selected branch
    const branch = branches.find(b => b.id === branchId);
    
    if (branch) {
      // Show toast
      toast({
        title: "🗺️ Opening Map...",
        description: `Showing directions to ${branch.name}`,
      });
      
      // Open Google Maps directions
      setTimeout(() => {
        window.open(branch.mapUrl, '_blank', 'noopener,noreferrer');
        
        // Close modal after opening map
        setTimeout(() => {
          setSelectedBranch("");
          onClose();
        }, 500);
      }, 300);
    }
  };

  const handleClose = () => {
    setSelectedBranch("");
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

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-md z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Select Branch to Visit
                </h2>
                <p className="text-white/90 text-sm mt-1">Choose a location to see on map</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Branch Selection */}
            <div className="space-y-2 mb-4">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Select Your Preferred Branch
              </label>
              <Select 
                value={selectedBranch}
                onValueChange={handleBranchSelect}
              >
                <SelectTrigger className="h-12 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded-lg px-4 text-base">
                  <SelectValue placeholder="Choose a branch location" />
                </SelectTrigger>
                <SelectContent className="z-[10000]">
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.id} className="cursor-pointer">
                      <div className="flex items-center gap-2 py-1">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="font-semibold">{branch.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{branch.address}</p>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Branch List for Quick View */}
            <div className="space-y-2 mt-6">
              <p className="text-xs font-semibold text-gray-500 uppercase">Available Branches</p>
              {branches.map((branch) => (
                <motion.div
                  key={branch.id}
                  onClick={() => handleBranchSelect(branch.id)}
                  className="p-3 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">{branch.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{branch.address}</p>
                      <p className="text-xs text-blue-600 font-semibold mt-1">📱 {branch.phone}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              🗺️ Click any branch to view directions on Google Maps
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BranchVisitForm;

