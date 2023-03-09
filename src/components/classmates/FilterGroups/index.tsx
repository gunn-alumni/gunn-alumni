import { forwardRef, LegacyRef, Ref, RefObject, SetStateAction, useEffect, useState } from "react";

type FilterGroupsProps = {
    tags: Array<string>;
    onTagClick: (arg: EventTarget) => void;
    tagText: string;
};
  
  const FilterGroups = ({ tags, onTagClick, tagText }: FilterGroupsProps, ref: any) => {
    const totalTags = tags.length; 
    const numTags = tags;
    const allTags = numTags.map((tagName) =>
      <h3 id="group_tags" className={(tagText == tagName)? "bg-[black]" : "bg-transparent"}>{tagName}</h3>
    );

    return (
      <div id="filter_groups" 
          onClick={(e) => {
            e.stopPropagation();
            onTagClick(e.target);
          }} 
          ref={ref}
          className={`bg-[#a61616] text-center text-white text-[25px] fixed w-[8.5%] max-w-[10%] h-full flex flex-col items-center left-0 top-0 py-[55px] overflow-auto max-h-full ${(totalTags > 15) ? "gap-[10px]" : "justify-evenly" }`}>
        {allTags}
      </div>
    );
  };
  
  export default forwardRef(FilterGroups);