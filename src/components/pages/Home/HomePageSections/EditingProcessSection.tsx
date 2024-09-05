import { ScrollReveal } from "../../../base/hooks/ScrollReveal";

export const EditingProcessSection = () => {
  return (
      <div id="edit-process" className=" bg-black text-center px-6 max-w-[1200px] m-auto ">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-8">
            The Edit Process
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Where Your Vision Meets My Expertise – Let's Create Something
            Amazing Together!
          </p>
        </ScrollReveal>
        <div className="flex mobile:flex-col pc:flex-row justify-center gap-9">
          <ScrollReveal className="flex flex-col items-center">
            <div className="text-4xl w-16 h-16 rounded-full flex justify-center items-center bg-[#38b6ff] font-bold text-white mb-4">
              <p>01</p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-400">
              Tell me about your project, your goals, and the vibe you're aiming
              for. Let's set the stage for something great.
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center">
            <div className="text-4xl w-16 h-16 rounded-full flex justify-center items-center bg-[#38b6ff] font-bold text-white mb-4">
              <p>02</p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              The Magic Happens
            </h3>
            <p className="text-gray-400">
              I’ll dive into the edit, blending creativity with precision to
              craft a video that truly shines. Sit back and relax, I've got
              this!
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center">
            <div className="text-4xl w-16 h-16 rounded-full flex justify-center items-center bg-[#38b6ff] font-bold text-white mb-4">
              <p>03</p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Final Touches
            </h3>
            <p className="text-gray-400">
              Review the masterpiece. Need a tweak? Let’s make it perfect
              together before it hits the spotlight.
            </p>
          </ScrollReveal>
        </div>
      </div>
  );
};
