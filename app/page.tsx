import HeroSection from "@/components/server/mainSection/hero/HeroSection";
import ProjectSection from "@/components/server/mainSection/projects/ProjectSection";
import IntroduceSection from "@/components/server/mainSection/introduce/introduce";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroduceSection />
      <ProjectSection />
    </main>
  );
}
