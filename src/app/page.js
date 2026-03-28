import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <ExperienceEducation />
      <Skills />
      <Footer />
    </main>
  );
}
