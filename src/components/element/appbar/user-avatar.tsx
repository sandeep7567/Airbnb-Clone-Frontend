import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src: string;
  alt: string;
}

export function UserAvatar({ src, alt }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage
        src={src}
        alt={alt}
        height={30}
        width={30}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
