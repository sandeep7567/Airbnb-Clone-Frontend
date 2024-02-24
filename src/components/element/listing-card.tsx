import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowCard } from "../ui/show-card";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

import { useDispatch } from "react-redux";
import { onOpen } from "@/redux/slice/modal-login-slice";

interface ListingData {
  _id: string;
  visitImage: string;
  location: string;
  address: string;
  visitDate: string;
  price: number;
}

interface ListingCardProps {
  listingData: ListingData;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listingData }) => {
  const isAuth = false;
  const dispatch = useDispatch();
  
  const { _id, visitImage, location, address, visitDate, price } = listingData;

  const navigate = useNavigate();
  const [heartActive, setHeartActive] = useState<boolean>(false);

  const toggleHeart = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation(); // Stop event propagation here
    if (isAuth) {
      setHeartActive((prevHeartActive) => !prevHeartActive);
    } else {
      // open log in modal;
      dispatch(onOpen());
    }
  };

  const onClick = (): void => {
    navigate(`/${_id}`);
  };

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      {/* Absolute Heart */}
      <div onClick={toggleHeart}>
        <Heart
          className={cn(
            "text-white absolute right-4 top-5 hover:scale-110 transition-all duration-200",
            heartActive ? "fill-destructive/85" : "fill-accent-foreground/60"
          )}
        />
      </div>
      {/* Main Card-Data Display */}
      <ShowCard
        img={visitImage}
        className="bg-white mt-2 shadow-none border-none"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-base font-bold">{location}</h2>
          <p>&#9733; 4.8</p>
        </div>
        <p className="text-base">{address}</p>
        <p className="text-base">{visitDate}</p>
        <p className="text-base font-bold">₹{price}</p>
      </ShowCard>
    </div>
  );
};
