import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Emailme } from "./Emailme";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { SwitchTheme } from "./SwitchTheme";

const Sidebar = () => {
  return (
    <div>
      <Image
        src="/images/unnamed.png"
        alt="profile avatar"
        className="rounded-full mx-auto"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-bold font-kaushan">
        <span>Umesh</span> Potha
      </h3>
      <p className="px-2 py-1 my-3 bg-pink-400 rounded-2xl font-medium dark:bg-dark-300">
        Tech Enthusiast
      </p>
      <div className="flex items-center justify-center gap-2 px-2 py-1 my-3 bg-pink-400 rounded-2xl dark:bg-dark-300">
        <p>Connect With Me</p>
        <FaArrowAltCircleDown />
      </div>

      {/* social links go here */}
      <div className="flex justify-around my-5 text-pink-800 w-9/12 md:w-full mx-auto">
        <a href="https://github.com/Umeshpotha">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/umesh-potha-8b93bb254/">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://x.com/Umeshdsit">
          <FaXTwitter className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address go here */}
      <div
        className=" py-4 my-5 bg-blue-300 dark:bg-dark-300"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Tirupati,India</span>
        </div>
        <p className="my-2">umeshpotha123@gmail.com</p>
        <p className="my-2">9154019776</p>
      </div>
      {/* Email button goes here */}

      <Emailme />
      <SwitchTheme />
    </div>
  );
};

export default Sidebar;
