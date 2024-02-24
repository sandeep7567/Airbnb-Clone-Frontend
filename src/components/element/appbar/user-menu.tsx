import { Menu } from "lucide-react";
import { UserAvatar } from "@/components/element/appbar/user-avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDispatch } from "react-redux";
import { onOpen } from "@/redux/slice/modal-login-slice";
import { onOpen as onOpenRegisterModal } from "@/redux/slice/modal-register-slice";
import { useHosting } from "@/hooks/use-hosting";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { handleHosting } = useHosting();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={handleHosting}
          className="
            hidden
            md:block
            text-sm 
            font-semibold
            py-3
            px-4
            font-nunito
            rounded-full
            hover:bg-neutral-100 
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="
                p-4
                md:py-1
                md:px-2
                border 
                border-neutral-200 
                flex
                flex-row 
                items-center 
                gap-3
                rounded-full
                cursor-pointer 
                hover:shadow-md
                transition
              "
            >
              <Menu size={16} />
              <div className="hidden md:block">
                <UserAvatar
                  src="/images/placeholder.jpg"
                  alt="profile-picture"
                />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 absolute top-0 py-2 -right-6 md:-right-10">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => dispatch(onOpenRegisterModal())}
                className="font-bold cursor-pointer text-base py-2"
              >
                Sign up
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => dispatch(onOpen())}
                className="cursor-pointer text-base py-2"
              >
                Log in
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleHosting}
              className="cursor-pointer text-base py-2"
            >
              Airbnb your home
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-base py-2">
              Help Center
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
