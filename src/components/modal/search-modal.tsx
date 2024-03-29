import { Modal } from "@/components/modal/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  STEPS,
  incrementStep,
  onClose,
} from "@/redux/slice/modal-search-slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const SearchModal = () => {
  const dispatch = useDispatch();
  const { open, step } = useSelector((state: RootState) => state.searchModal);
  const { data: isAuth } = useSelector((state: RootState) => state.authentication);

  if (!isAuth) {
    return null;
  }

  const onSubmit = () => {
    alert("data submit");
  };

  let footerBtn = (
    <Button className="w-full" onClick={() => dispatch(incrementStep())}>
      Continue
    </Button>
  );

  if (step === STEPS.DATE) {
    footerBtn = (
      <Button className="w-full" onClick={() => dispatch(incrementStep())}>
        Continue
      </Button>
    );
  }

  if (step === STEPS.INFO) {
    footerBtn = (
      <Button className="w-full" onClick={onSubmit}>
        Submit
      </Button>
    );
  }

  console.log(step);

  let children: React.ReactElement = (
    <div className="relative grid gap-4 py-4 p-0 mt-4 pr-6 h-4/5 overflow-y-scroll">
      <div className="space-y-2">
        <Label className="" htmlFor="email">
          Email
        </Label>
        <Input className="w-full" placeholder="Enter your email" type="email" />
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
    </div>
  );

  if (step === STEPS.DATE) {
    children = (
      <div className="relative grid gap-4 py-4 p-0 mt-4 pr-6 h-4/5 overflow-y-scroll">
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
      </div>
    );
  }

  if (step === STEPS.INFO) {
    children = (
      <div className="relative grid gap-4 py-4 p-0 mt-4 pr-6 h-4/5 overflow-y-scroll">
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
      </div>
    );
  }

  return (
    <Modal
      title={"Log in"}
      onClose={() => dispatch(onClose())}
      open={open}
      footer
      footerBtn={footerBtn}
      className="sm:max-w-[775px]"
    >
      {/* children */}
      {children}
    </Modal>
  );
};
