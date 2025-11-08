import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle2, Users, Award, Code, ChevronRight, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import { useToast } from "@/hooks/use-toast";
import BranchSection from "@/components/BranchSection";
import CourseTechnologySection from "@/components/CourseTechnologySection";

const AdvancedJava = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Counselling Session Request*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n💬 *Message:* ${formData.message || 'No additional message'}\n📚 *Course Page:* Advanced Java\n\nI am interested in booking a free counselling session. Please contact me at your earliest convenience.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/918422800381?text=${encodedMessage}`;
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    if (whatsappWindow) {
      toast({ title: "✅ WhatsApp Opened!", description: "Your counselling request is ready in WhatsApp. Just click Send!" });
      setTimeout(() => { setFormData({ name: "", email: "", phone: "", message: "" }); }, 2000);
    } else {
      toast({ title: "⚠️ Allow Popups", description: "Please allow popups to send your request via WhatsApp", variant: "destructive" });
      window.location.href = whatsappURL;
    }
  };

  const modules = [
    { title: "J2EE Basics", topics: ["Servlets", "JSP", "JDBC", "Session Management"] },
    { title: "Advanced Concepts", topics: ["EJB", "JMS", "Web Services", "Design Patterns"] }
  ];

  return (
    <DarkModeProvider>
      <SEO title="Advanced Java Programming Course - J2EE, Servlets, JSP" description="Master Advanced Java concepts including J2EE, Servlets, JSP, JDBC, and Enterprise Java." keywords="advanced java, J2EE, servlets, JSP, JDBC, enterprise java" canonical="/advanced-java" ogImage="/images/course images/java.jpg" category="IT Courses" />
      <CourseStructuredData name="Advanced Java Programming" description="Advanced Java training for enterprise applications." url="https://quastech.co.in/advanced-java" duration="P4M" courseMode="blended" image="https://quastech.co.in/images/course images/java.jpg" />
      <BreadcrumbStructuredData items={[{ name: "Home", url: "/" }, { name: "Courses", url: "/#courses" }, { name: "Advanced Java", url: "/advanced-java" }]} />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        <section className="relative w-full min-h-[600px] md:h-[600px] flex items-center overflow-hidden py-8 md:py-0" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)' }}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-4"><div className="text-white space-y-6"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm"><Link to="/"><Home className="w-4 h-4 inline" /> Home</Link><ChevronRight className="w-4 h-4" /><span>Advanced Java</span></motion.div><h1 className="text-5xl font-bold">Advanced Java Programming</h1><p className="text-xl">Master enterprise Java development</p><Button className="bg-white text-blue-600">Enroll Now</Button></div></div>
        </section>
        <section className="py-16 px-4 bg-gray-50"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2><div className="grid md:grid-cols-2 gap-6">{modules.map((m, i) => (<div key={i} className="p-6 rounded-xl bg-white shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">{m.title}</h3><ul className="space-y-2">{m.topics.map((t, idx) => (<li key={idx} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>{t}</span></li>))}</ul></div>))}</div></div></section>
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50"><div className="container mx-auto max-w-2xl"><h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2><form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6"><Input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /><Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /><Input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /><Textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} /><Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-500 py-6">Submit</Button></form></div></section>
        <CourseTechnologySection courseSlug="advanced-java" />
        <BranchSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default AdvancedJava;






