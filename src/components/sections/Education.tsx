import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Computer Science and Automation",
    institution: "Indian Institute of Science Bangalore",
    period: "2021 – Present",
    description: "Researching machine learning and NLP under the supervision of Prof. Advisor Name. Focus on interpretable AI systems.",
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "University Name",
    period: "2019 – 2021",
    description: "Graduated with distinction. Thesis on attention mechanisms in neural networks.",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University Name",
    period: "2015 – 2019",
    description: "First class honors. Specialized in artificial intelligence and data science.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block" />
                  
                  <div className="bg-card p-6 rounded-lg border border-border/50 shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center md:hidden">
                        <GraduationCap className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-accent font-medium mb-1">{item.period}</p>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
