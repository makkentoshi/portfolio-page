import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`
      )}
    >
      <div className="flex flex-none py-0.5 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType}></TechIcon>

            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
