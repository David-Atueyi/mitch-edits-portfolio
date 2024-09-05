import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../../base/hooks/EmblaCarouselButtons";
import { ScrollReveal } from "../../../base/hooks/ScrollReveal";
import phoneImage from "../../../../assets/image/phone.png";
import { useGetProjects } from "../../../base/utilities/handleProjects/useGetProjects";

type PropType = {
  options?: EmblaOptionsType;
};

export const Projects: React.FC<PropType> = ({ options }) => {
  const { data: myProjects = [] } = useGetProjects();

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const currentVideoIndex = useRef<number | null>(null);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const isMobile = window.innerWidth < 1000;

  const handleVideoPlay = (index: number) => {
    if (
      currentVideoIndex.current !== null &&
      currentVideoIndex.current !== index
    ) {
      const prevVideo = videoRefs.current[currentVideoIndex.current];
      if (prevVideo) {
        prevVideo.pause();
      }
    }

    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      currentVideo.play();
      currentVideoIndex.current = index;
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      const video = videoRefs.current[index];
      if (video) {
        video.play();
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    if (!isMobile) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
      }
    }
  };

  return (
    <div id="my-creation" className="flex flex-col items-center gap-10">
      <h2 className="text-center text-3xl font-extrabold text-white">
        A Glimpse of My Creations
      </h2>
      <ScrollReveal className="relative flex max-w-[1200px] m-auto pb-16">
        <div className="overflow-hidden w-[90dvw]" ref={emblaRef}>
          <div className="flex gap-3">
            {myProjects.map((myProject, index) => (
              <div
                key={myProject.id}
                className="m-1 mobile:flex-[0_0_90%] tablet:flex-[0_0_60%] pc:flex-[0_0_40%] biggerPc:flex-[0_0_25%] h-full"
              >
                <img
                  src={phoneImage}
                  alt=""
                  className="w-full h-full object-contain relative"
                />
                <div className="bg-black mobile:w-[79.85%] rounded-b-lg tablet:w-[53.4%] pc:w-[35.4%] biggerPc:w-[22.1%] h-[85%] absolute top-[8.8%] mobile:ml-[5.2%] tablet:ml-[3.31%] pc:ml-[2.3%] biggerPc:ml-[1.4%]">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={myProject.video_url}
                    loop
                    muted
                    playsInline
                    controls
                    className="absolute w-full h-full object-cover"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onPlay={() => handleVideoPlay(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollReveal className="absolute bottom-3">
          <div className="flex gap-3">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </div>
  );
};
