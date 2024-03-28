import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/modal/modal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const FilterModal = () => {
  const { data: isAuth } = useSelector(
    (state: RootState) => state.authentication
  );
  
  if (!isAuth) {
    return null;
  }

  return (
    <Modal title={"Log in"}>
      <div className="grid gap-4 py-4 p-0 mt-4 pr-6 h-4/5 overflow-y-scroll">
        <div className="space-y-2">
          <Label className="" htmlFor="email">
            Email
          </Label>
          <Input
            className="w-full"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            className="w-full"
            placeholder="Enter your username"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            className="w-full"
            placeholder="Enter your phone number"
            type="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            className="w-full"
            placeholder="Enter your address"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            className="w-full"
            placeholder="Select your date of birth"
            type="date"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="security">Security Question</Label>
          <Input
            className="w-full"
            placeholder="Enter your security question"
            type="text"
          />
        </div>
        <Button
          className="w-full"
          variant={"destructive"}
          size={"lg"}
          type="submit"
        >
          Continue
        </Button>

        <div className="flex justify-center items-center gap-2">
          <div className="w-full h-[0.095rem] bg-border" />
          <div>or</div>
          <div className="w-full h-[0.095rem] bg-border" />
        </div>

        <Button
          className="w-full text-black font-nunito"
          size={"lg"}
          variant="black"
        >
          Continue with Google
        </Button>
        <Button className="w-full text-black" size={"lg"} variant="black">
          Continue with GitHub
        </Button>
      </div>
    </Modal>
  );
};
