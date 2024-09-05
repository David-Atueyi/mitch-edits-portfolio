import { Link as ScrollLink } from "react-scroll";
import { MenuBarIcon } from "../Icons/MenuBarIcon";
import { useState, useEffect } from "react";
import { CancelIcon } from "../Icons/CancelIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import logoImage from "../../../assets/image/mitchLogo.jpg";
import { Link } from "react-router-dom";
import { menuData } from "../../base/dummyData/menuData";

export const GeneralHeaderLayout = () => {
  const [dropDownVisible, setDropDownVisible] = useState<Boolean>(false);

  const handleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (window.innerWidth <= 765) {
        if (dropDownVisible) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleOverflow);
    };
  }, [dropDownVisible]);

  return (
    <div className="bg-black sticky top-0 z-50">
      <header className="text-white flex items-center justify-between p-6 pc:pt-10 relative max-w-[1200px] m-auto">
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <div className="w-8 h-8">
            <img
              src={logoImage}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="tracking-wider">MitchEdits</span>
        </Link>

        <div className="block mediumPc:hidden">
          <button
            onClick={handleDropDown}
            className="text-white focus:outline-none"
          >
            <MenuBarIcon className="w-5 h-5 stroke-white" />
          </button>
        </div>

        <div className="space-x-5 biggerPc:space-x-7 text-lg mobile:hidden mediumPc:flex">
          {menuData.map((menuItems, index) => (
            <ScrollLink
              to={menuItems.path.substring(1)}
              smooth={true}
              duration={500}
              offset={-140}
              className="hover:text-gray-400 cursor-pointer"
              key={index}
            >
              {menuItems.title}
            </ScrollLink>
          ))}
        </div>

        <Link
          to="https://www.instagram.com/mitchedits_?igsh=bm93cDhsenZmOXN0"
          className="text-lg rounded-lg px-6 py-2 bg-[#38b6ff] transition duration-300 mobile:hidden mediumPc:flex gap-2 items-center"
        >
          <span>Get in Touch</span>
          <InstagramIcon className="w-5 h-5 fill-white" />
        </Link>
      </header>
      <div
        className={`${
          !dropDownVisible ? "hidden" : "flex"
        } mediumPc:hidden absolute top-0 left-0 w-full h-[100dvh] bg-black/90 flex-col z-20`}
        onClick={handleDropDown}
      >
        <div
          onClick={handleDropDown}
          className=" w-fit place-content-end place-self-end mt-6 mx-5"
        >
          <CancelIcon className="stroke-white w-6 h-6" />
        </div>
        <div className="text-white flex flex-col justify-center items-center h-full gap-6 px-5 py-5 text-center">
          {menuData.map((menuItems, index) => (
            <ScrollLink
              to={menuItems.path.substring(1)}
              smooth={true}
              duration={500}
              offset={-100}
              className=" hover:text-gray-400 w-full rounded-md p-2"
              key={index}
              onClick={handleDropDown}
            >
              {menuItems.title}
            </ScrollLink>
          ))}

          <Link
            to="https://www.instagram.com/mitchedits_?igsh=bm93cDhsenZmOXN0"
            className="text-lg rounded-lg px-4 py-2 bg-[#38b6ff] text-white w-[80%] flex justify-center items-center gap-2"
          >
            <span>Get in Touch</span>
            <InstagramIcon className="w-5 h-5 fill-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
