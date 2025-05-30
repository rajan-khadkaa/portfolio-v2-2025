import React from "react";

const ProjectIcons = ({ name, image }) => {
  return (
    <div
      key={name}
      className="project-icons-wrapper flex flex-col w-14 items-center gap-2"
    >
      <div className="used-tech size-10 md:size-10 lg:size-12 p-1 md:p-2 rounded-full">
        <img className="w-[300%] h-auto" src={image} alt={image} />
      </div>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default ProjectIcons;
