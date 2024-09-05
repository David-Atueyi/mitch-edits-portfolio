import { Link } from "react-router-dom";
import { InstagramIcon } from "../Icons/InstagramIcon";
import logoImage from "../../../assets/image/mitchLogo.jpg";
import { ScrollReveal } from "../../base/hooks/ScrollReveal";
import { TwitterXIcon } from "../Icons/TwitterXIcon";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { Link as ScrollLink } from "react-scroll";
import { menuData } from "../../base/dummyData/menuData";

export const GeneralFooterLayout = () => {
  return (
    <div className="mt-14">
      <footer className=" text-white pt-8 pb-2 max-w-[1200px] m-auto">
        <div className=" px-6 flex justify-between tablet:items-start mobile:flex-col tablet:flex-row gap-6">
          <ScrollReveal className="font-bold flex justify-center items-center gap-2">
            <div className="w-6 h-6">
              <img
                src={logoImage}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="tracking-wider">MitchEdits</span>
          </ScrollReveal>

          <ScrollReveal className="flex flex-col items-center">
            <p className="mb-3 font-bold">Get In Touch</p>
            <div className="flex gap-4 tablet:flex-col">
              <Link
                to="https://wa.me/qr/Q3PRDZQDKMS2P1"
                className="flex gap-2 w-fit p-0.5"
              >
                <WhatsappIcon className="w-5 h-5 fill-white bg-[#25D366] p-0.5 rounded" />
                <span className="tracking-wider mobile:hidden tablet:block">
                  WhatsApp
                </span>
              </Link>
              <Link
                to="https://www.instagram.com/mitchedits_?igsh=bm93cDhsenZmOXN0"
                className="flex gap-2 w-fit"
              >
                <div className="p-0.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded">
                  <InstagramIcon className="w-5 h-5 fill-white" />
                </div>
                <span className="tracking-wider mobile:hidden tablet:block">
                  Instagram
                </span>
              </Link>
              <Link
                to="https://x.com/Trip2025?t=lDr9P_ZHmVoP7T2NAraD2g&s=09"
                className="flex gap-2 w-fit p-0.5"
              >
                <TwitterXIcon className="w-5 h-5 p-0.5 fill-black bg-white rounded" />
                <span className="tracking-wider mobile:hidden tablet:block">
                  X
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="flex flex-col text-center tablet:text-left gap-4">
              {menuData.map((menuItems, index) => (
                <ScrollLink
                  to={menuItems.path.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="text-white hover:text-gray-300 cursor-pointer"
                  key={index}
                >
                  {menuItems.title}
                </ScrollLink>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="text-center pt-2 mt-3 border-t border-zinc-700">
          <p className="text-sm">Copyright {new Date().getFullYear()} ©</p>
        </div>
      </footer>
    </div>
  );
};
