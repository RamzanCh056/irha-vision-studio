import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/923116381451?text=" + encodeURIComponent("Hello! I'm interested in your services.");

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-whatsapp text-primary-foreground font-semibold shadow-lg hover:bg-whatsapp-dark transition-colors duration-300"
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      
      {/* Icon with bounce animation */}
      <motion.div
        animate={{ 
          y: [0, -3, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.div>
      
      <span className="hidden sm:inline relative z-10">Chat on WhatsApp</span>
    </motion.a>
  );
};
