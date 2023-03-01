import { forwardRef, LegacyRef, Ref, RefObject, useState } from "react";

type FilterGroupsProps = {
    tags: Array<string>;
    onTagClick: (arg: EventTarget) => void;
};
  
  const FilterGroups = ({ tags, onTagClick }: FilterGroupsProps, ref: any) => {
    const [visibleIndicator, setVisibleIndicator] = useState(false);
    const numTags = tags;
    const allTags = numTags.map((tagName) =>
      <h3 id="group_tags">{tagName}</h3>
    );

    return (
      <div id="filter_groups" 
          onClick={(e) => {
            e.stopPropagation();
            onTagClick(e.target);
          }} 
          ref={ref}
          className={`bg-red-900 text-center text-white text-[25px] fixed w-[10%] max-w-[10%] h-[calc(100%-105px)] flex flex-col items-center justify-evenly left-0 top-[55px]`}>
        {allTags}
      </div>
    );
  };
  
  export default forwardRef(FilterGroups);