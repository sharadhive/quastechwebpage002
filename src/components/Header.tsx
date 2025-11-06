import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Award,
  Globe,
  BookOpen,
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CheckSquare,
  Eye,
  Moon,
  ArrowRight,
} from "lucide-react";
import CoursesMegaMenu from "@/components/CoursesMegaMenu";
import CoursesModal from "@/components/CoursesModal";
import SidebarMenu from "@/components/SidebarMenu";
import CounsellorForm from "@/components/CounsellorForm";
import { useDarkMode } from "@/contexts/DarkModeContext";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [activeCourseType, setActiveCourseType] = useState<"it" | "non-it" | "eclass" | "degree" | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showCounsellorForm, setShowCounsellorForm] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isHoveringDropdown) {
          setActiveDropdown(null);
          setActiveCourseType(null);
        }
      }
      // Close language dropdown when clicking outside
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isHoveringDropdown]);

  const courseTypes = [
    { name: "CERTIFICATION COURSES", type: "it", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { name: "PLACEMENT COURSES WITH AI", type: "non-it", icon: Award, color: "from-purple-500 to-pink-500" },
    { name: "E Class", type: "eclass", icon: Award, color: "from-orange-500 to-red-500" },
    { name: "Degree", type: "degree", icon: GraduationCap, color: "from-green-500 to-emerald-500" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
    { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "bho", name: "भोजपुरी", flag: "🇮🇳" },
    { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
    { code: "awa", name: "अवधी", flag: "🇮🇳" },
    { code: "ur", name: "اردو", flag: "🇵🇰" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "te", name: "తెలుగు", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  ];

  // Initialize Google Translate
  useEffect(() => {
    // Add Google Translate script
    const addGoogleTranslateScript = () => {
      if ((window as any).google?.translate) {
        setIsTranslateLoaded(true);
        return;
      }
      
      if (document.getElementById('google-translate-script')) {
        // Wait for script to load
        const checkTranslate = setInterval(() => {
          if ((window as any).google?.translate) {
            setIsTranslateLoaded(true);
            clearInterval(checkTranslate);
          }
        }, 100);
        return;
      }
      
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate Widget
    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google?.translate?.TranslateElement) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,mr,pa,bho,gu,awa,ur,ar,te,ta,kn,ml,fr,de,ru,es,pt,it,zh,ja,ko,nl',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        setIsTranslateLoaded(true);
      }
    };

    addGoogleTranslateScript();
    
    // Check for existing language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    const cookieMatch = document.cookie.match(/googtrans=([^;]+)/);
    
    if (savedLang && savedLang !== 'en') {
      setCurrentLanguage(savedLang);
    } else if (cookieMatch) {
      // Parse cookie format: /en/hi or /auto/hi
      const cookieValue = decodeURIComponent(cookieMatch[1]);
      const parts = cookieValue.split('/');
      if (parts.length >= 3) {
        const targetLang = parts[2];
        if (targetLang && targetLang !== 'en') {
          setCurrentLanguage(targetLang);
          localStorage.setItem('preferredLanguage', targetLang);
        }
      }
    }
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    // Don't change if already selected
    if (currentLanguage === languageCode) {
      setShowLanguageDropdown(false);
      return;
    }
    
    setCurrentLanguage(languageCode);
    setShowLanguageDropdown(false);
    
    // If switching to English, clear all translation data
    if (languageCode === 'en') {
      localStorage.setItem('preferredLanguage', 'en');
      
      // Clear all Google Translate cookies
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
      
      // Remove hash and reload
      if (window.location.hash) {
        window.location.hash = '';
      }
      window.location.reload();
      return;
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', languageCode);
    
    // Clear any existing Google Translate cookies first
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
    
    // Set new Google Translate cookie with proper format
    const cookieValue = `/en/${languageCode}`;
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    
    // Set multiple cookie variations to ensure it works
    document.cookie = `googtrans=${cookieValue}; expires=${expires.toUTCString()}; path=/`;
    
    // For production domains (not localhost)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      const hostParts = window.location.hostname.split('.');
      if (hostParts.length >= 2) {
        const domain = '.' + hostParts.slice(-2).join('.');
        document.cookie = `googtrans=${cookieValue}; expires=${expires.toUTCString()}; domain=${domain}; path=/`;
      }
    }
    
    // Set URL hash (Google Translate uses this)
    window.location.hash = `googtrans(en|${languageCode})`;
    
    // Force reload to apply translation - most reliable method
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Main navigation items (visible in navbar) - Empty since Placement is in sidebar menu
  const navItems: { name: string; href: string; isExternal: boolean }[] = [];

  // Sidebar menu items (Contact-Us and About-Us)
  const sidebarMenuItems = [
    { name: "Contact-Us", href: "/contact", isExternal: true },
    { name: "About-Us", href: "/about", isExternal: true },
  ];

  const handleDropdownToggle = (categoryName: string) => {
    if (activeDropdown === categoryName) {
      setActiveDropdown(null);
      setActiveCourseType(null);
    } else {
      setActiveDropdown(categoryName);
    }
  };

  const handleMouseEnterDropdown = () => {
    setIsHoveringDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsHoveringDropdown(false);
    // Add a small delay before closing to allow smooth transitions
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDropdown(null);
        setActiveCourseType(null);
      }
    }, 150);
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Courses Modal */}
      <CoursesModal isOpen={showCoursesModal} onClose={() => setShowCoursesModal(false)} />
      
      {/* Counsellor Form */}
      <CounsellorForm isOpen={showCounsellorForm} onClose={() => setShowCounsellorForm(false)} />
      
      {/* Top Bar - Hidden on Mobile with Continuous Sliding Animation */}
      <div className="hidden md:block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-1.5 px-3 text-xs shadow-md overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          {/* Continuous Sliding Content */}
          <motion.div
            className="flex items-center gap-8"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-10 flex-shrink-0">
                {/* Contact Information */}
                <div className="flex items-center gap-4">
                  <motion.a 
                    href="tel:+918422800381"
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">+91 8422800381</span>
                  </motion.a>
                  <motion.a 
                    href="mailto:info@quastech.in"
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">info@quastech.in</span>
                  </motion.a>
                </div>
                
                {/* Certifications */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => alert("ISO 9001:2015 Certified - Quality Management System")}
                  >
                    <Award className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">ISO 9001:2015</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => alert("ISTQB Certified - International Software Testing Qualifications Board")}
                  >
                    <CheckSquare className="w-3 h-3 text-white" />
                    <span className="font-medium text-xs">ISTQB</span>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-5">
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">🎓 10k+ Students Placed</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">⭐ 4.8/5 Rating</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-xs">🏆 Award Winning Institute</span>
                  </motion.div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-2">
                  <motion.a
                    href="https://facebook.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Facebook className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Twitter className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Instagram className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Youtube className="w-3 h-3" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/company/quastech"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                  >
                    <Linkedin className="w-3 h-3" />
                  </motion.a>
                </div>
                
                {/* Login Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-md text-xs font-semibold transition-colors"
                  onClick={() => alert("Login functionality will be implemented")}
                >
                  Login
                </motion.button> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg backdrop-blur-sm ${isSidebarOpen ? 'pr-0' : ''}`}
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          transform: 'translateZ(0)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-18 sm:h-20 md:h-24 lg:h-28">
            {/* Logo Section with Courses & LMS Login Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* Main QUASTECH Logo */}
              <Link 
                to="/" 
                className="flex items-center"
                onClick={(e) => {
                  // If already on home page, scroll to top; otherwise let Link handle navigation
                  if (window.location.pathname === '/' || window.location.pathname === '') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <img
                  src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                  alt="QUASTECH Logo"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
              
              {/* Courses Button - Next to Logo */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCoursesModal(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Course's</span>
              </motion.button>

              {/* LMS Login Button - Next to Courses */}
              <motion.a
                href="https://your-lms-url.com/login"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">LMS Login</span>
              </motion.a>
            </div>


            {/* Animated Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Selector */}
              <div ref={languageRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300 flex items-center gap-0.5 sm:gap-1"
                  title="Change Language"
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark-mode:text-gray-300" />
                  <span className="text-xs font-semibold text-gray-600 dark-mode:text-gray-300">{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600 dark-mode:text-gray-300 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {showLanguageDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 max-h-96 bg-white dark-mode:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark-mode:border-gray-700 overflow-y-auto z-50"
                    >
                      {languages.map((language) => (
                        <motion.button
                          key={language.code}
                          whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors ${
                            currentLanguage === language.code
                              ? "bg-blue-50 dark-mode:bg-blue-900/20 text-blue-600 dark-mode:text-blue-400"
                              : "text-gray-700 dark-mode:text-gray-300 hover:bg-gray-50 dark-mode:hover:bg-gray-700"
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="text-sm font-medium">{language.name}</span>
                          {currentLanguage === language.code && (
                            <CheckSquare className="w-4 h-4 ml-auto" />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Eye Care / Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode (Eye Care)"}
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? (
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark-mode:text-gray-300" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark-mode:text-gray-300" />
                  )}
                </motion.div>
              </motion.button>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowCounsellorForm(true)}
                >
                  Speak to Counsellor
                </Button>
              </motion.div>

              {/* Burger Menu Icon - Always visible, simplified on mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(true)}
                className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 transition-colors duration-300"
                title="Menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark-mode:text-gray-300" />
              </motion.button>
            </div>
          </div>
        </div>


        {/* Right Side Sidebar Menu - Canvas Component */}
        <SidebarMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          menuItems={sidebarMenuItems}
          onCoursesClick={() => setShowCoursesModal(true)}
          onCounsellorClick={() => setShowCounsellorForm(true)}
        />
      </motion.header>
    </>
  );
};

export default Header;