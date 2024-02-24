import Container from "../ui/container";
import { Logo } from "@/components/element/appbar/logo";
import { UserMenu } from "@/components/element/appbar/user-menu";
import { Search } from "@/components/element/appbar/search";
import { Categories } from "./appbar/categories";

export const Appbar = () => {
  return (
    <div className="fixed w-full bg-white top-0 z-10">
      {/* <div className="py-4"> */}
      <div className="border-b py-5 shadow-sm">
        <Container>
          <div className="flex justify-between items-center w-full gap-4">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <div className="shadow">
        {/* Categories */}
        <Categories />
      </div>
    </div>
  );
};
