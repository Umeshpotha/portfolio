import Link from "next/link";
import { FunctionComponent } from "react";

interface NavBlockProps {
  activeItem: string;
  setActiveItem: Function;
  Name: string;
  route: string;
}

const NavBlock: FunctionComponent<NavBlockProps> = ({
  activeItem,
  Name,
  route,
  setActiveItem,
}) => {
  return activeItem !== Name ? (
    <Link href={route}>
      <span
        className=" hover:text-pink-400"
        onClick={() => setActiveItem(Name)}
      >
        {Name}
      </span>
    </Link>
  ) : null;
};

export default NavBlock;
