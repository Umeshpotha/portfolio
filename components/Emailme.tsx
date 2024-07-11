import React from "react";
import { Button } from "@/components/ui/button";

export function Emailme() {
  const handleClick = () => {
    window.open("mailto:umeshpotha123@gmail.com");
  };
  return (
    <Button className=" dark:bg-white" onClick={handleClick}>
      Email Me
    </Button>
  );
}
