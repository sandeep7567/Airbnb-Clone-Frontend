import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";


interface CategoryBoxProps {
  Icon: IconType,
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  Icon,
  selected,
}) => {
  console.log(selected);
  return (
    // use div and onClick for api call to get data using search category;
    <Link to={`/?category=${label.toLowerCase()}`} className={cn(
      "flex justify-between items-center py-4 cursor-pointer",
      selected ? "border-black border-b-2" : "hover:border-border hover:border-b-[3px]",
    )}>
      <div className="flex flex-col gap-1.5 justify-center items-center">
        <Icon size={20} className={cn("text-muted-foreground", selected && "text-primary")} />
        <div className={cn("text-xs font-semibold",selected ? "text-primary" : "text-muted-foreground")}>{label}</div>
      </div>
    </Link>
  )
}

export default CategoryBox;