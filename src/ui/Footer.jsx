 import footerContact from "../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-[#0E172A] text-white shadow-[0_-2px_12px_rgba(0,0,0,0.5)]">
      {/* SAME WIDTH AND PADDING AS HEADER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {footerContact.map((curElm, index) => {
            const { icon, title, details } = curElm;
            return (
              <div
                key={index}
                className="flex items-center gap-2 justify-center md:justify-start"
              >
                <span className="text-xl text-blue-400">{footerIcon[icon]}</span>
                <div>
                  <p className="font-semibold text-sm leading-tight">{title}</p>
                  <p className="text-gray-300 text-xs leading-tight">{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-4 pt-2 text-center">
          <p className="text-gray-400 text-[11px]">
            © {new Date().getFullYear()} WorldAtlas — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
