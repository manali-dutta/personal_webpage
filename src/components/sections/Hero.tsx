import { motion } from "framer-motion";
import { Mail, FileText, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section id="about" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-card">
                <img alt="Profile photo" className="w-full h-full object-cover" src="/lovable-uploads/7d711ab5-a633-47d6-a910-e951da4ca4fd.jpg" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
              PhD Candidate
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">Manali Dutta</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed mx-0 font-semibold">Department of Computer Science and Automation                      Indian Institute of Science Bangalore</p>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">I'm a PhD student working in the broad areas of stochastic control, networked control systems, and reinforcement learning. My research focuses on designing optimal scheduling policies for  resource constrained and networked systems. I am advised by <a href="https://www.csa.iisc.ac.in/~shalabh/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Prof. Shalabh Bhatnagar</a>, and my work combines theoretical analysis with algorithmic design, motivated by problems arising in communication networks and control systems.</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://raw.githubusercontent.com/m-pixel-star/Resume/main/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume / CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#publications">
                  <FileText className="w-4 h-4 mr-2" />
                  Publications
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};