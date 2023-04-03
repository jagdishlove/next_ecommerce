import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";
import {IoMdHeartEmpty} from "react-icons/io"
import {BsCart} from "react-icons/bs"
import {BiMenuAltRight} from "react-icons/bi"
import {VscChromeClose} from "react-icons/vsc"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="w-full flex justify-between items-center ">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        <div className="flex items-center gap-2 text-black">

        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
