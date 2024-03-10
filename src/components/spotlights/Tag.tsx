const colors : string[] = [
    "bg-red-600", "bg-orange-500", "bg-lime-600", "bg-emerald-500", "bg-blue-700"
];

function colorFromString(str : string) {
    let index = str.charCodeAt(0) + str.charCodeAt(Math.min(3, str.length));
    index = index % colors.length;

    return colors[index];
}

interface TagProps {
  tag: string;
}

const Tag = ({
  tag
} : TagProps) => {
  return (
    <span className={`${colorFromString(tag)} text-white p-1 px-2 rounded mb-2`}>{tag}</span>
  );
};

export default Tag
