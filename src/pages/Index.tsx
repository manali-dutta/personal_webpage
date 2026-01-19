import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Publications } from "@/components/sections/Publications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
