import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";

const JourneySection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow text-white text-base font-semibold">
            <Award className="w-6 h-6 mr-1 text-white" />
            OUR JOURNEY
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
              Your Path to Success
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-4" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Follow the path from learning to placement success
          </p>
        </div>
        {/* Journey Banner - Edge to Edge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img 
            src="/images/careerpath.jpg" 
            alt="Your Journey With Us" 
            className="w-full h-auto object-cover"
          />
        </motion.div> */}

        {/* Additional Journey Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <img 
            src="/images/carrierpath.png" 
            alt="Career Path Journey" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
