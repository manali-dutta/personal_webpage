import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Understanding Context in Neural Language Models: A Comprehensive Analysis",
    authors: "Your Name, Advisor Name, Collaborator Name",
    venue: "ACL 2024",
    type: "Conference",
    link: "#",
  },
  {
    title: "Interpretable Attention Mechanisms for Document Classification",
    authors: "Your Name, Co-author Name",
    venue: "EMNLP 2023",
    type: "Conference",
    link: "#",
  },
  {
    title: "A Survey of Explainable AI Methods in Natural Language Processing",
    authors: "Your Name, Advisor Name",
    venue: "Journal of Machine Learning Research",
    type: "Journal",
    link: "#",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected publications from my research work. For a complete list, please see my
            Google Scholar profile.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-lg border border-border/50 shadow-soft hover:shadow-card transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {pub.type}
                    </Badge>
                    <span className="text-sm text-accent font-medium">{pub.venue}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                </div>
                <a
                  href={pub.link}
                  className="flex-shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            <FileText className="w-4 h-4" />
            View all on Google Scholar
          </a>
        </motion.div>
      </div>
    </section>
  );
};
