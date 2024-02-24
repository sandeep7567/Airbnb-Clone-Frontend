import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="">
      <img
        onClick={() => {}}
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        height={100}
        width={100}
        alt="logo"
      />
    </Link>
  );
};
