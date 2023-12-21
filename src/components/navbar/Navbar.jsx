import Image from "next/image";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className=" fixed w-full top-0 z-[10]">
      <div className="glass flex justify-between p-4 lg:p-6 lg:py-4 items-center">
        {/* logo */}
        <div className=" cursor-pointer z-[10]">
            <a href="#">
              <Image
                className=" h-[28px] w-[73px] lg:h-[31px] lg:w-[79px]"
                src="/image/logo.svg"
                height={31}
                width={79}
                alt="logo"
              />
              </a>
        </div>

        {/* navlinks */}
        <div className=" list-none lg:flex gap-10 justify-start items-center text-[16px] object-none hidden z-[10]">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#team">TEAM</a>
          </li>
          <li>
            <a href="#reservation">RESERVATION</a>
          </li>
          <li>
            <a href="#review">REVIEW</a>
          </li>
        </div>

        {/* menu button */}
        <div className="flex items-center">
          <button className="py-[8px] px-[30px] border-black border-[1px] rounded-3xl font-[500] hover:bg-black hover:text-white duration-500 hidden lg:block z-[10]">
            <a href="#popular">Our Menu</a>
          </button>
          <Hamburger />
        </div>
      </div>
      <hr className="w-[95%] m-auto hidden lg:block" />
    </div>
  );
};

export default Navbar;
