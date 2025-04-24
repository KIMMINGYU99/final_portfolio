import HeroSection from "@/components/main/hero/HeroSection";
import AboutSection from "@/components/main/about/AboutSection";
import ProjectSection from "@/components/main/projects/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
