import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Phone, MessageCircle, X, Move } from "lucide-react";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  
  // Motion values for drag position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Calculate drag constraints based on window size
  useEffect(() => {
    const updateConstraints = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const iconSize = 80; // Approximate size of the expanded icon
      
      // Calculate constraints from the default position (left-4, top-1/2)
      // left-4 = 16px from left, top-1/2 = 50% from top
      const defaultLeft = 16;
      const defaultTop = windowHeight / 2;
      
      setDragConstraints({
        left: -defaultLeft, // Can go to left edge (0px)
        right: windowWidth - defaultLeft - iconSize, // Can go to right edge
        top: -defaultTop + iconSize / 2, // Can go to top edge
        bottom: windowHeight - defaultTop - iconSize / 2 // Can go to bottom edge
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Load saved position from localStorage on mount
  useEffect(() => {
    const savedPosition = localStorage.getItem('floatingCTAPosition');
    if (savedPosition) {
      try {
        const { x: savedX, y: savedY } = JSON.parse(savedPosition);
        x.set(savedX);
        y.set(savedY);
      } catch (error) {
        console.error('Failed to load saved position:', error);
        localStorage.removeItem('floatingCTAPosition');
      }
    }
  }, [x, y]);

  // Save position to localStorage when drag ends
  const handleDragEnd = () => {
    const position = {
      x: x.get(),
      y: y.get()
    };
    localStorage.setItem('floatingCTAPosition', JSON.stringify(position));
    
    // Delay resetting isDragging to prevent accidental clicks after drag
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const handleToggle = (e: React.MouseEvent) => {
    // Don't toggle if user was just dragging
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsExpanded(!isExpanded);
  };

  // Reset position to default on double-click
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    x.set(0);
    y.set(0);
    localStorage.removeItem('floatingCTAPosition');
  };

  return (
    <motion.div 
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 ${!isExpanded ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
      style={{ x, y }}
      drag={!isExpanded} // Only draggable when collapsed
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraints}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleDoubleClick}
      whileDrag={{ scale: 1.05 }}
      title="Drag to move • Double-click to reset position"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          // Expanded State - Two Separate Buttons
          <motion.div
            key="expanded"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex flex-col gap-4"
          >
            {/* Call Us Button */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <motion.a
                href="tel:+918422800381"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-6 h-6 text-orange-500" />
              </motion.a>
              <motion.a
                href="tel:+918422800381"
                className="bg-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Call Us Now
              </motion.a>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              <motion.a
                href="https://wa.me/918422800381"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
              </motion.a>
              <motion.a
                href="https://wa.me/918422800381"
                className="bg-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                Chat With Us
              </motion.a>
            </motion.div>

            {/* Close Button */}
            <motion.button
              onClick={handleToggle}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-orange-500" />
            </motion.button>
          </motion.div>
        ) : (
          // Collapsed State - Single Combined Icon (Initial State)
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.button
              onClick={handleToggle}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-2xl transition-shadow border-2 border-orange-500 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* WhatsApp Icon - Top Right (Very close to center) */}
              <div className="absolute top-1 right-1 w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center shadow-md">
                <MessageCircle className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              
              {/* Call Icon - Bottom Left (Very close to center) */}
              <Phone className="w-7 h-7 text-orange-500 absolute bottom-1 left-1" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Drag Indicator - Shows when not dragging and not expanded */}
      {!isExpanded && !isDragging && (
        <motion.div 
          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Move className="w-3 h-3 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingCTA;

