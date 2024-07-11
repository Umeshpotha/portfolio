import { Skill } from "@/type";
import React, { FunctionComponent } from "react";

const SkillCard: FunctionComponent<{ skill: Skill }> = ({
  skill: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className="w-20 h-20 text-pink-400" />
      <div>
        <h4 className="font-extrabold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </div>
  );
};

export default SkillCard;
