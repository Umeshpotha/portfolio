import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-pink-500";
  if (active === value) className += " text-pink-500";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="Web" {...props} />
      <NavItem value="App" {...props} />
      <NavItem value="DataScience" {...props} />
      <NavItem value="Python" {...props} />
      <NavItem value="Java" {...props} />
      <NavItem value="Testing" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
