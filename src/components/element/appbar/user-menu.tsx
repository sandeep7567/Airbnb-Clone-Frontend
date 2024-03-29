import { UserAvatar } from "@/components/element/appbar/user-avatar";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { auth } from "@/firebase/firebase-config";
import { useHosting } from "@/hooks/use-hosting";
import { cn } from "@/lib/utils";
import { logout } from "@/redux/slice/authentication-slice";
import { onOpen } from "@/redux/slice/modal-login-slice";
import { onOpen as onOpenRegisterModal } from "@/redux/slice/modal-register-slice";
import { RootState } from "@/redux/store";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { data: isAuth } = useSelector(
    (state: RootState) => state.authentication
  );

  const { handleHosting } = useHosting();

  const logoutHandler = async () => {
    await signOut(auth)
      .then(() => console.log("User is signed out"))
      .catch((error) => console.log("logout failed", error));

    dispatch(logout());
  };

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
              className={cn(`p-4
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
              transition`)}
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
          {isAuth ? (
            <DropdownMenuContent className="w-56 absolute top-0 py-2 -right-6 md:-right-10">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {}}
                  className="cursor-pointer text-base py-2"
                >
                  Whishlists
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {}}
                  className="cursor-pointer text-base py-2"
                >
                  Manage listings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {}}
                  className="cursor-pointer text-base py-2"
                >
                  Trips
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {}}
                  className="cursor-pointer text-base py-2"
                >
                  Account
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleHosting}
                className="cursor-pointer text-base py-2"
              >
                Airbnb your home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={logoutHandler}
                className="font-bold cursor-pointer text-base py-2"
              >
                logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
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
          )}
        </DropdownMenu>
      </div>
    </div>
  );
};
