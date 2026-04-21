import GradientMesh from "@/components/portfolio/GradientMesh";
import CustomCursor from "@/components/portfolio/CustomCursor";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sai Varun Mukunda",
    jobTitle: "Computer Science (AI) Student & Full-Stack Developer",
    affiliation: [
      { "@type": "CollegeOrUniversity", name: "Amrita Vishwa Vidyapeetham" },
      { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras" },
    ],
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
    knowsAbout: ["Artificial Intelligence", "Full-Stack Development", "Machine Learning", "Generative AI"],
  };

  return (
    <main className="relative min-h-screen">
      <GradientMesh />
      <CustomCursor />
      <Navbar />

      <h1 className="sr-only">Sai Varun Mukunda — AI & Full-Stack Developer Portfolio</h1>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </main>
  );
};

export default Index;
