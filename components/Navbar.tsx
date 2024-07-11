import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import NavBlock from "./NavBlock";
import { SwitchTheme } from "./SwitchTheme";

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  });
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-pink-400 text-xl border-b-4 border-pink-300 md:text-2xl">
        {activeItem}
      </span>
      <div className=" text-lg flex space-x-5">
        <NavBlock
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          Name="About"
          route="/"
        />
        <NavBlock
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          Name="Projects"
          route="/projects"
        />
        <NavBlock
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          Name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
