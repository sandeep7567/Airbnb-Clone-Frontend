import { Appbar } from "@/components/element/appbar";
import { AppFooter } from "@/components/element/app-footer";
import { ListingPage } from "../element/listing-page";

const Landing = () => {
  return (
    <div className="relative font-nunito w-full h-screen flex flex-col justify-between mt-44 scroll-smooth">
      <Appbar />
      <ListingPage />
      <AppFooter />
    </div>
  );
};

export default Landing;
