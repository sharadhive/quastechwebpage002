import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MapPin, Phone, Mail, Navigation, Building2 } from "lucide-react";

const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address:
      "Office No. 305, 3rd Floor, Mangalya Building, Near Cadbury Junction, Pokhran Road No. 1, Thane West, Maharashtra 400606",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+thane",
    images: [
      "/images/branches/IMG20240104153417.jpg",
      "/images/branches/IMG20240104153434.jpg",
      "/images/branches/IMG20240104153417.jpg",
      "/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address:
      "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384/81",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+borivali",
    images: [
      "/images/branches/IMG20240104153526.jpg",
      "/images/branches/IMG20240104153417.jpg",
      "/images/branches/IMG20240104153638.jpg",
      "/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address:
      "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800384/81",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+vashi",
    images: [
      "/images/branches/IMG20240104153526.jpg",
      "/images/branches/IMG20240104153417.jpg",
      "/images/branches/IMG20240104153638.jpg",
      "/images/branches/IMG20240104153417.jpg"
    ]
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address:
      "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 72080 08461/62",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+mohali",
    images: [
      "/public/images/branches/mohali/20240104_154224.jpg",
      "/public/images/branches/mohali/20240104_154237.jpg",
      "/public/images/branches/mohali/20240104_154314.jpg",
      "/public/images/branches/mohali/20240104_154424.jpg"
    ]
  }
];

const BranchSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  return (
    <section
      id="branches"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 section-spacing-compact overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-12 mt-3 md:mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            OUR LOCATIONS
          </div>
          <h2 className="heading-section gradient-text-primary mb-3 md:mb-4">
            Explore Our Branches
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />
        </motion.div>

        {/* Branch Selector with Animated Underline */}
        <div className="flex justify-center mb-12 relative">
          <div className="flex gap-6 relative">
            {branchesData.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`relative px-4 py-2 text-lg font-semibold transition-colors ${
                  selectedBranch === branch.id
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-indigo-500"
                }`}
              >
                {branch.id}
                {selectedBranch === branch.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Card with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                {currentBranch?.name}
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50"
                >
                  <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{currentBranch?.address}</p>
                </motion.div>

                {/* Phone */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`tel:${currentBranch?.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {currentBranch?.phone}
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`mailto:${currentBranch?.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 text-gray-600 hover:text-pink-600 transition"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {currentBranch?.email}
                </motion.a>

                {/* Directions */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={currentBranch?.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full shadow hover:shadow-lg mt-4"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Carousel with Animated Overlay */}
          <motion.div
            key={selectedBranch + "-images"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              slidesPerView={1}
            >
              {currentBranch?.images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-[4/3] w-full overflow-hidden relative group"
                  >
                    <img
                      src={src}
                      alt={`${currentBranch?.name} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110"
                      loading="lazy"
                      style={{ filter: 'brightness(1.2) contrast(1.05)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm font-medium flex justify-between">
                      <span>{currentBranch?.name}</span>
                      <span>
                        {idx + 1}/{currentBranch?.images.length}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Swiper Styles */}
      <style>{`
        .branch-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.7);
          width: 10px;
          height: 10px;
          transition: transform 0.3s;
        }
        .branch-swiper .swiper-pagination-bullet-active {
          background: #6366f1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default BranchSection;
