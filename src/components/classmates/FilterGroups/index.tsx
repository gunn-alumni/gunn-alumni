import { forwardRef } from 'react';

interface FilterGroupsProps {
  tags: string[];
  onTagClick: (arg: EventTarget) => void;
  tagText?: string;
  id: string;
}

const FilterGroups = (
  { id, tags, onTagClick, tagText }: FilterGroupsProps,
  ref: any
) => {
  const totalTags = tags.length;
  const numTags = tags;
  const navBarSize = 136;
  const footerSize = 68;
  // const sidebarHeight2 = "h-[calc(100%_-_"+(navBarSize+footerSize)+"px)]";
  // const sidebarHeight = navBarSize+footerSize;
  const allTags = numTags.map((tagName) => (
    <h3
      key={tagName}
      id={id}
      className={`cursor-pointer px-[5px] ${
        tagText == tagName ? 'bg-[white]' : 'bg-transparent'
      }`}
    >
      {tagName}
    </h3>
  ));

  return (
    <div
      id={id == 'group_tags' ? 'filter_groups' : 'filter_mobile_groups'}
      onClick={(e) => {
        e.stopPropagation();
        onTagClick(e.target);
      }}
      ref={ref}
      className={`z-[1] ${
        id != 'group_tags' ? 'gap-2.5 px-2.5 py-5' : ''
      } flex-wrap text-center text-black sm:text-2xl font-bold w-full md:w-[130px] sm:w-[80px] sm:h-screen flex sm:grid items-center left-0 py-[10px] sm:overflow-y-auto ${
        totalTags > 20 ? 'gap-[10px]' : 'justify-evenly'
      }`}
    >
      {allTags}
    </div>
  );
};

export default forwardRef(FilterGroups);
