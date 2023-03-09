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
      className={tagText == tagName ? "bg-[black]" : "bg-transparent"}
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
      className={`bg-gray-300 text-black text-center text-2xl font-bold w-36 space-y-8 pt-4 overflow-y-scroll overflow-x-hidden ${
        totalTags > 15 ? "gap-[10px]" : "justify-evenly"
      }`}
    >
      {allTags}
    </div>
  );
};

export default forwardRef(FilterGroups);
