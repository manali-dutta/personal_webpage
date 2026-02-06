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
          <p className="text-muted-foreground max-w-2xl mx-auto">I'm always open to discussing research opportunities, collaborations, or just having a conversation about stochastic learning and RL.</p>
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
                  <p className="text-foreground font-medium">Room No. 302, Department of Computer Science and Automation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">​​​​​​​Address    </p>
                  <p className="text-foreground font-medium">Department of Computer Science and Automation Indian Institute of Science  Bangalore, 560012 India 
                  <br />
                    ​<br />
                    ​
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};