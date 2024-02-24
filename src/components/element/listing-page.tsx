import Container from "../ui/container";
import { ListingCard } from "./listing-card";

export const ListingPage = () => {
  const listings = [
    {
      _id: "1",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "2",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "3",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "4",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "5",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "6",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "7",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "8",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "9",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "10",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "11",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "12",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
    {
      _id: "13",
      visitImage:
        "https://a0.muscache.com/im/pictures/81e01e2d-0c76-4899-b5d0-ddf21b14f3b3.jpg?im_w=1200",
      location: "New Delhi, India",
      address: "47 km to Sultanpur National Park",
      visitDate: "1-6 Aug",
      price: 2000,
    },
  ];
  return (
    <Container>
      <div
        className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-4
        gap-8
        p-4
        md:p-0
      "
      >
        {listings.map((listing) => (
          <ListingCard key={listing?._id} listingData={listing} />
        ))}
      </div>
    </Container>
  );
};
