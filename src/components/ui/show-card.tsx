import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";

interface ShowCardProps {
  children: React.ReactNode;
  className: string;
  img: string;
}

export const ShowCard: React.FC<ShowCardProps> = ({ children, img, className }) => {
  return (
    <Card className={cn("", className)}>
      <img
        src={img}
        alt="Listing"
        className="w-full aspect-square object-cover mb-4 rounded-xl"
      />
      <CardContent className="text-gray-800 p-0">{children}</CardContent>
    </Card>
  );
};
