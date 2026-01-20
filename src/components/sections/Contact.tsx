import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+92 311 6381451",
    href: "tel:+923116381451",
  },
  {
    icon: Mail,
    title: "Email",
    value: "irhasofts@gmail.com",
    href: "mailto:irhasofts@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with us",
    href: "https://www.linkedin.com/in/shireen-zainab1451/",
  },
];

export const Contact = () => {
  const whatsappUrl = "https://wa.me/923116381451?text=" + encodeURIComponent("Hello! I'm interested in your services.");

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-4 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out and
            let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl glass hover:shadow-card transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20">
                    <info.icon className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {info.title}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block font-medium hover:text-purple transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8"
            >
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full group"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Us on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
