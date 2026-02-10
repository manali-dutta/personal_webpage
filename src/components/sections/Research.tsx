import { motion } from "framer-motion";
import { Brain, Settings, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const researchAreas = [{
  icon: Brain,
  title: "Reinforcement Learning",
  description: "Designing learning based decision making algorithms that adapt through interaction with uncertain environments."
}, {
  icon: Settings,
  title: "Stochastic Control",
  description: "Developing optimal control strategies for systems operating under significant uncertainty and random dynamics."
}, {
  icon: Code,
  title: "Networked Control Systems",
  description: "Building transparent AI systems that can explain their reasoning and decision-making processes."
}, {
  icon: Lightbulb,
  title: "Human-AI Interaction",
  description: "Studying how humans and AI systems can collaborate more effectively and intuitively."
}];
export const Research = () => {
  return <section id="research" className="section-padding bg-secondary/30">
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
            Research Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research lies at the intersection of stochastic control and reinforcement learning, with a focus on decision making under uncertainty in networked control systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => <motion.div key={area.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="h-full shadow-soft hover:shadow-card transition-shadow border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-accent bg-destructive-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};