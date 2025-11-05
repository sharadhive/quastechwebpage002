import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, BookOpen, Home, Briefcase } from "lucide-react";
import { createPortal } from "react-dom";

interface SidebarMenuItem {
  name: string;
  href: string;
  isExternal: boolean;
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: SidebarMenuItem[];
  onCoursesClick?: () => void;
  onCounsellorClick?: () => void;
}

const SidebarMenu = ({ isOpen, onClose, menuItems, onCoursesClick, onCounsellorClick }: SidebarMenuProps) => {
  const sidebarContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 99998 }}
          />
          
          {/* Sidebar Canvas */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[85vw] sm:w-[320px] md:w-[380px] bg-white shadow-2xl overflow-y-auto"
            style={{ zIndex: 99999 }}
          >
            {/* Sidebar Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 px-5 py-4 md:py-5 flex items-center justify-between border-b border-white/20 sticky top-0 z-10">
              <h2 className="text-white text-lg md:text-xl font-bold">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Sidebar Menu Items */}
            <div className="py-4">
              {/* Main Navigation Items */}
              <div className="px-4 mb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                  Navigation
                </div>
                
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.25 }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onClose();
                    }}
                    className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <Home className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                      <span className="text-base">Home</span>
                    </div>
                  </a>
                </motion.div>

                {/* Placement Link */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.25 }}
                  className="mt-2"
                >
                  <Link
                    to="/placement"
                    onClick={onClose}
                    className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                      <span className="text-base">Placement</span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Courses Button */}
              {onCoursesClick && (
                <div className="px-4 mb-4">
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    onClick={() => {
                      onCoursesClick();
                      onClose();
                    }}
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Course's</span>
                  </motion.button>
                </div>
              )}

              {/* Speak to Counsellor Button */}
              {onCounsellorClick && (
                <div className="px-4 mb-4">
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                    onClick={() => {
                      onCounsellorClick();
                      onClose();
                    }}
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Speak to Counsellor</span>
                  </motion.button>
                </div>
              )}

              {/* Divider */}
              <div className="px-4 my-4">
                <div className="border-t border-gray-200"></div>
              </div>

              {/* Additional Menu Items Section */}
              <div className="px-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                  More Pages
                </div>
                
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.25 }}
                    className="mb-2"
                  >
                    {item.isExternal ? (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base">{item.name}</span>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-600"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 font-medium transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 active:bg-blue-100"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base">{item.name}</span>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-600"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Divider for future menu sections */}
              <div className="px-4 mt-6 mb-4">
                <div className="border-t border-gray-200"></div>
              </div>
              
              {/* Placeholder for future menu items */}
              <div className="px-4 text-xs text-gray-400 italic text-center">
                More options coming soon...
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render sidebar using portal at document body level to avoid stacking context issues
  if (typeof document !== 'undefined') {
    return createPortal(sidebarContent, document.body);
  }
  
  return sidebarContent;
};

export default SidebarMenu;

