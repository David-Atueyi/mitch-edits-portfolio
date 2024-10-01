import { Link } from "react-router-dom";
import { ScrollReveal } from "../../../base/hooks/ScrollReveal";
import { ColorPaletteIcon } from "../../../Global/Icons/ColorPaletteIcon";
import { ElectricBoltIcon } from "../../../Global/Icons/ElectricBoltIcon";
import { LanguageIcon } from "../../../Global/Icons/LanguageIcon";
import { LightbulbIcon } from "../../../Global/Icons/LightbulbIcon";
import { ProfessionalHexagonIcon } from "../../../Global/Icons/ProfessionalHexagonIcon";
import { SmilingFaceIcon } from "../../../Global/Icons/SmilingFaceIcon";

export const SkillsSection = () => {
  return (
    <div id="skills" className="bg-black px-6 max-w-[1200px] m-auto">
      <ScrollReveal>
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          My Craft, Your Vision <span className="text-[#38b6ff]">—</span> Let's
          Create Magic
        </h2>
        <p className="text-center text-lg text-gray-400 mb-16">
          These are the skills that I use to transform your ideas into cinematic
          masterpieces.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
              <ColorPaletteIcon className="fill-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">
              Color Correction
            </h3>
          </div>
          <p className="text-gray-400">
            Elevating your visuals with the perfect color grading, making every
            scene pop with vibrancy.
          </p>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
            <ElectricBoltIcon className="fill-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">
              Visual Animations
            </h3>
          </div>
          <p className="text-gray-400">
            Bringing stills to life with dynamic animations that captivate and
            engage your audience.
          </p>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
            <LanguageIcon className="fill-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">Subtitles</h3>
          </div>
          <p className="text-gray-400">
            Precision-timed subtitles that ensure your message is clear, no
            matter the language.
          </p>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
            <ProfessionalHexagonIcon className="fill-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">
              Professionalism
            </h3>
          </div>
          <p className="text-gray-400">
            Delivering high-quality results with a commitment to excellence and
            punctuality.
          </p>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
            <LightbulbIcon className="fill-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">Research</h3>
          </div>
          <p className="text-gray-400">
            Thorough research to ensure your video is relevant, accurate, and
            impactful.
          </p>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[#38b6ff] text-white p-3 rounded-full">
            <SmilingFaceIcon className="stroke-white h-7 w-7"/>
            </span>
            <h3 className="text-xl font-semibold text-white">Collaboration</h3>
          </div>
          <p className="text-gray-400">
            Partnering closely with you to turn your vision into reality, one
            frame at a time.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal className="text-white flex flex-col justify-center items-center gap-6 mt-11 px-6">
        <ScrollReveal className="text-center text-3xl capitalize font-extrabold">
          Are you ready to work with me?
        </ScrollReveal>
        <Link
          to="https://www.instagram.com/mitchelle.kennedy.a?igsh=cGVkdW9sYjdoODZp&utm_source=qr"
          className="text-lg rounded-lg px-6 py-2 bg-[#38b6ff] transition duration-300"
        >
          <span>Lets Talk</span>
        </Link>
      </ScrollReveal>
    </div>
  );
};
