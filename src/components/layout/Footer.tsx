import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import irhaLogo from "@/assets/irha-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shireen-zainab1451/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:irhasofts@gmail.com", label: "Email" },
];

const footerLinks = {
  services: [
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "SEO Services", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 relative border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img src={irhaLogo} alt="Irha Softs" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. We create
              stunning applications that inspire and engage.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg glass hover:bg-purple/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-purple" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-display mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-purple transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-purple transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold font-display mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-purple transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Irha Softs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with <span className="text-pink">♥</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};
