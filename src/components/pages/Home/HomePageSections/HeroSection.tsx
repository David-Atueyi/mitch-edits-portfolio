import { Link } from "react-router-dom";
import video1 from "../../../../assets/videos/heroVideo1.mp4";
import video2 from "../../../../assets/videos/heroVideo2.mp4";
import backgroundVideo from "../../../../assets/videos/herobgVideo.mp4";
import { ScrollReveal } from "../../../base/hooks/ScrollReveal";
import { InstagramIcon } from "../../../Global/Icons/InstagramIcon";
import { WhatsappIcon } from "../../../Global/Icons/WhatsappIcon";
import { TwitterXIcon } from "../../../Global/Icons/TwitterXIcon";

export const HeroSection = () => {
  return (
    <div className="relative max-w-[1200px] m-auto pc:my-11">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover mobile:block pc:hidden"
        />
      </div>
      <div className="relative bg-black/80 text-white py-20 pc:px-6 pc:flex gap-3 items-center z-10">
        <ScrollReveal className="flex flex-col items-center p-5">
          <h1 className="text-4xl font-bold mb-4 tracking-wide">
            <span>Transforming Your Videos Into</span>
            <span className="text-[#38b6ff] pl-2">Visual Masterpieces</span>
          </h1>
          <ScrollReveal className="mobile:text-base pc:text-lg mb-8 tracking-wide text-gray-400">
            Elevate your content with cinematic edits that captivate and engage.
            Let's create something unforgettable together.
          </ScrollReveal>
          <ScrollReveal className="flex mobile:gap-6 tablet:gap-4 mobile:flex-col tablet:flex-row w-full">
            <div>
              <p className="mb-3 font-bold">Get In Touch</p>
              <div className="flex gap-4">
                <Link
                  to="https://wa.me/qr/Q3PRDZQDKMS2P1"
                  className="block w-fit p-0.5 mobile:bg-[#25D366] pc:bg-black hover:bg-[#25D366] rounded"
                >
                  <WhatsappIcon className="w-7 h-7 fill-white" />
                </Link>
                <div className="mobile:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded">
                  <Link
                    to="https://www.instagram.com/mitchelle.kennedy.a?igsh=cGVkdW9sYjdoODZp&utm_source=qr"
                    className="block w-fit p-0.5 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] pc:bg-black rounded"
                  >
                    <InstagramIcon className="w-7 h-7 fill-white" />
                  </Link>
                </div>
                <Link
                  to="https://x.com/Trip2025?t=lDr9P_ZHmVoP7T2NAraD2g&s=09"
                  className="block w-fit p-0.5 mobile:bg-white pc:bg-black hover:bg-white rounded"
                >
                  <TwitterXIcon className="w-7 h-7 mobile:fill-black pc:fill-white hover:fill-black" />
                </Link>
              </div>
            </div>
            <Link
              to="#portfolio"
              className="border tablet:self-end h-fit border-[#38b6ff] text-[#38b6ff] mobile:py-3 tablet:py-1 px-6 rounded hover:bg-[#38b6ff] hover:text-white transition text-center"
            >
              See My Work
            </Link>
          </ScrollReveal>
        </ScrollReveal>
        <div className="relative mobile:mt-8 pc:mt-0 justify-center items-center mobile:hidden pc:flex">
          <ScrollReveal>
            <video
              src={video1}
              width="400"
              height="400"
              autoPlay
              loop
              muted
              className="rounded-[2rem] z-20"
            />
          </ScrollReveal>

          <ScrollReveal className="-translate-x-80">
            <video
              src={video2}
              width="400"
              height="400"
              autoPlay
              loop
              muted
              className="rounded-[2rem] -translate-x-16 translate-y-20 z-20"
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
