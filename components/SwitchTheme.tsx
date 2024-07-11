import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex  my-5 text-pink-800 w-8/12 md:w-full mx-auto justify-center space-x-2 ">
      <FaSun className="w-5 h-5" />
      <Switch id="toggle-theme" onClick={changeTheme} />
      <FaMoon className="w-5 h-5" />
    </div>
  );
}
