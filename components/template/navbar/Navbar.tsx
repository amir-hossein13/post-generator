"use client";

import { useState, useCallback } from "react";
import NavItem from "./NavItem";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="sticky top-0 z-50 ">
      <div className=" backdrop-blur-md px-10  ">
        <div className="flex items-center justify-between">
          <div>
            <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <NavItem />
          </div>

          <button
            onClick={toggle}
            className="sm:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-6">
          <NavItem />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
