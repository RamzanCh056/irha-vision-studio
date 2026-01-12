import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Pet Tracker",
    category: "Mobile App",
    description: "Smart pet tracking with AI-powered health monitoring",
  },
  {
    title: "Be a Better Parent",
    category: "Mobile App",
    description: "Parenting guidance app with expert tips and community support",
  },
  {
    title: "Voxofide App Design",
    category: "UI/UX Design",
    description: "Voice-first social networking platform design",
  },
  {
    title: "HeartPad V1",
    category: "Mobile App",
    description: "Health monitoring and heart rate tracking application",
  },
  {
    title: "MoodWise MVP",
    category: "Mobile App",
    description: "AI-powered mood tracking and mental wellness app",
  },
  {
    title: "Parking Mobile App UI Kit",
    category: "UI Kit",
    description: "Complete parking solution with smart spot detection",
  },
  {
    title: "Pro Automotive Transport",
    category: "Mobile App",
    description: "Automotive reconditioning and transport management",
  },
  {
    title: "Trove Free App UI",
    category: "UI/UX Design",
    description: "Minimalist treasure discovery app interface",
  },
  {
    title: "BrainBin App UI",
    category: "Mobile App",
    description: "Knowledge management and learning platform",
  },
  {
    title: "Vellato",
    category: "Web App",
    description: "Modern business management dashboard",
  },
  {
    title: "P2P RMB-NGN Exchange",
    category: "Fintech",
    description: "Peer-to-peer currency exchange platform",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-4 mb-6">
            Latest <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden glass hover:shadow-elevated transition-all duration-500"
            >
              {/* Placeholder gradient background */}
              <div className="aspect-video bg-gradient-to-br from-purple/20 via-pink/20 to-blue/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-foreground/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-5">
                <span className="text-xs font-medium text-purple uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold font-display mt-2 mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="gradient" size="default" className="gap-2">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
