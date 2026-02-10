import { motion } from "framer-motion";
import { Mail, MapPin, Building } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">I'm always open to discussing research opportunities, collaborations, or just having a conversation about stochastic control and RL.</p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="max-w-xl mx-auto">
          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:your.email@university.edu" className="text-foreground hover:text-accent transition-colors font-medium">manalidutta@iisc.ac.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Office</p>
                  <a href="https://www.csa.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors font-medium">Room No. 302, Department of Computer Science and Automation</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <a href="https://www.google.com/maps/place/Department+of+Computer+Science+and+Automation,+INDIAN+INSTITUTE+OF+SCIENCE,+Mirinji+Marg,+Mathikere,+Bengaluru,+Karnataka+560012/@13.0152873,77.5676122,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17d3b2dc2907:0xaab253c84e839ecd!8m2!3d13.0152821!4d77.5701871!16s%2Fg%2F11gzytlsq?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors font-medium block">
                    Department of Computer Science and Automation,<br />
                    Indian Institute of Science,<br />
                    Mirinji Marg, Mathikere,<br />
                    Bengaluru, Karnataka 560012, India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};