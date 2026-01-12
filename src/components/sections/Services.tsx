import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Globe,
  Monitor,
  Share2,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users and drive engagement with modern design principles.",
    gradient: "from-purple to-pink",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional experiences.",
    gradient: "from-pink to-secondary",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Responsive, scalable web apps built with cutting-edge technologies for optimal performance.",
    gradient: "from-blue to-purple",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description:
      "Powerful desktop applications tailored to your business needs with seamless cross-platform support.",
    gradient: "from-accent to-blue",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that boost your brand visibility and engage your target audience.",
    gradient: "from-purple to-blue",
  },
  {
    icon: Search,
    title: "Website SEO",
    description:
      "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
    gradient: "from-pink to-purple",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help your business thrive
            in the modern world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl glass hover:shadow-elevated transition-all duration-500"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
              >
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
