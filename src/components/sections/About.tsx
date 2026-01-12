import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative digital solutions that empower businesses to achieve their goals and exceed user expectations.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading digital agency recognized for creativity, quality, and transformative impact in the tech industry.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A talented collective of designers, developers, and strategists passionate about creating exceptional digital experiences.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Excellence, innovation, collaboration, and integrity guide everything we do, from concept to delivery.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-purple uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-4 mb-6">
              Crafting Digital <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Irha Softs is a full-service digital agency specializing in
              creating stunning user interfaces, powerful mobile applications,
              and scalable web solutions. With years of experience in the
              industry, we've helped businesses of all sizes transform their
              digital presence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team combines creativity with technical expertise to deliver
              products that not only look beautiful but also perform
              exceptionally. From initial concept to final deployment, we're
              with you every step of the way.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass">
                <div className="w-2 h-2 rounded-full bg-purple" />
                <span className="text-sm font-medium">UI/UX Experts</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass">
                <div className="w-2 h-2 rounded-full bg-pink" />
                <span className="text-sm font-medium">Full Stack Development</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full glass">
                <div className="w-2 h-2 rounded-full bg-blue" />
                <span className="text-sm font-medium">Digital Marketing</span>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl glass hover:shadow-card transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20 mb-4">
                  <value.icon className="w-5 h-5 text-purple" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
