import { motion } from "framer-motion";
import { Brain, MessageSquare, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const researchAreas = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Developing novel deep learning architectures for improved model interpretability and performance.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Creating systems that understand context, nuance, and semantic meaning in human language.",
  },
  {
    icon: Code,
    title: "Explainable AI",
    description: "Building transparent AI systems that can explain their reasoning and decision-making processes.",
  },
  {
    icon: Lightbulb,
    title: "Human-AI Interaction",
    description: "Studying how humans and AI systems can collaborate more effectively and intuitively.",
  },
];

export const Research = () => {
  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Research Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research sits at the intersection of machine learning and human-computer interaction,
            with a focus on making AI systems more understandable and useful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-soft hover:shadow-card transition-shadow border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
