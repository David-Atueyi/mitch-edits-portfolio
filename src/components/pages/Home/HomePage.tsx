import { Clients } from "./HomePageSections/Clients";
import { EditingProcessSection } from "./HomePageSections/EditingProcessSection";
import { HeroSection } from "./HomePageSections/HeroSection";
import { Projects } from "./HomePageSections/Projects";
import { SkillsSection } from "./HomePageSections/SkillsSection";

export const HomePage = () => {
  return (
    <div className="flex flex-col mobile:gap-16 pc:gap-40">
      <HeroSection />
      <Clients />
      <Projects />
      <EditingProcessSection />
      <SkillsSection />
    </div>
  );
};
