import { useState } from "react";
import { IoCloseCircleSharp, IoMenu } from "react-icons/io5";
import Button from "./Button";

const Links = [
  { name: "Sobre", link: "#about" },
  { name: "Áreas de Atuação", link: "#how" },
  { name: "Clientes", link: "#client" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="shadow-md  w-screen bg-dark  rounded-full fixed z-10">
          <div className="flex items-center justify-between text-mainWhite bg-mainBlue py-4 sm:px-4 px-2 lg:px-10 ">
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <span>
                <a href="/">
                  <img
                    className="w-1/3 md:w-[25%] lg:w-1/2 rounded-sm"
                    src="src/assets/silvacosta.png"
                    alt="Logotipo"
                  />
                </a>
              </span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer lg:hidden text-xl m-0 "
            >
              {open ? <IoCloseCircleSharp /> : <IoMenu />}
            </div>
            {/* linke items */}
            <ul
              className={`-z-20 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:pb-0 absolute flex items-start  flex-col lg:static bg-mainBlue text-background lg:z-auto left-0 w-full lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px] "
                }`}
            >
              {Links.map((link) => (
                <li className="lg:ml-2 lg:my-0 my-5 font-semibold">
                  <a
                    href={link.link}
                    className="text-mainWhite hover:text-mainYellow duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="lg:ml-8 lg:my-0 my-5 relative lg:pr-0 lg:right-0 right-5 font-bold ">
                <Button
                  title="Fale Conosco"
                  background="#99743F"
                  color="#f9fafb"

                />
              </li>
            </ul>
            {/* button */}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
