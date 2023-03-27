import {
  forwardRef,
  LegacyRef,
  Ref,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type FilterGroupsProps = {
  tags: Array<string>;
  onTagClick: (arg: EventTarget) => void;
  tagText?: string;
};

const FilterGroups = (
  { tags, onTagClick, tagText }: FilterGroupsProps,
  ref: any
) => {
  const totalTags = tags.length;
  const numTags = tags;
  const allTags = numTags.map((tagName) => (
    <h3
      key={tagName}
      id="group_tags"
      className={`px-[5px] ${tagText == tagName ? "bg-[white]" : "bg-transparent"}`}
    >
      {tagName}
    </h3>
  ));

  return (
    <div
      id="filter_groups"
      onClick={(e) => {
        e.stopPropagation();
        onTagClick(e.target);
      }}
      ref={ref}
      className={`bg-[#a61619] text-center text-black text-[25px] text-2xl font-bold fixed w-[8.5%] max-w-[10%] h-full flex flex-col items-center left-0 top-0 pt-[88px] pb-[68px] overflow-auto max-h-full ${
        totalTags > 20 ? "gap-[10px]" : "justify-evenly"}`
      }>
      {allTags}
    </div>
  );
};

export default forwardRef(FilterGroups);
