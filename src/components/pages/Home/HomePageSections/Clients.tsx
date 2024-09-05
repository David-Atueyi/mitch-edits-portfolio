import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { ScrollReveal } from "../../../base/hooks/ScrollReveal";
import { useGetClients } from "../../../base/utilities/handleClients/useGetClients";
import { ClientSkeleton } from "../LoadingSkeleton/ClientSkeleton";

export const Clients = ({ options }: { options?: EmblaOptionsType }) => {

  const { data: clients = [], isLoading } = useGetClients();

  const [emblaRef] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay(),
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <div id="clients" className=" w-[95dvw] m-auto mobile">
      <ScrollReveal className="text-3xl text-center font-bold text-white mb-8">
        Trusted by Creators Worldwide 🌟
      </ScrollReveal>
      <ScrollReveal className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
        {isLoading ? (
          <ClientSkeleton />
        ) : (
          <div className="flex">
            {clients.map(( client ) => (
              <div
                className="text-white border border-[#38b6ff] rounded-lg mobile:flex-[0_0_90%] tablet:flex-[0_0_50%] pc:flex-[0_0_35%] biggerPc:flex-[0_0_20%] ml-4"
                key={client.id}
              >
                <div className="p-4 flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full ">
                    <img
                      src={client.profile_image}
                      alt=""
                      className="w-full h-full rounded-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{client.account_name}</p>
                    <p>{client.account_handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>)}
        </div>
        <div className="absolute mobile:w-8 tablet:w-16 pc:w-36 bg-gradient-to-r from-black via-black/90 via-30% to-black/10 h-full bottom-0 left-0"></div>
        <div className="absolute mobile:w-8 tablet:w-16 pc:w-36 h-full bg-gradient-to-r from-black/10 via-black/90 via-60% to-black bottom-0 right-0"></div>
      </ScrollReveal>
    </div>
  );
};
