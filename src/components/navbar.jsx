import Logo from "../assets/revire-logo.gif";
import Button from "./button";
import Link from "./link";

export default function Navbar() {
  return (
    <nav className="bg-revire-light-orange py-5 px-[4.5rem] flex justify-between align items-center">
      <div className="flex align items-center">
        <img src={Logo} alt="logo" className="h-[60px] w-[60px] mr-4" />
        <Link extraClasses="text-[30px]" label={"Revire"} />
      </div>
      <div className="flex align items-center">
        <Link label="Demo" extraClasses={"text-[17px]"} />
        <Link
          label="Features &amp; Benefits"
          extraClasses={"mx-10 text-[17px]"}
        />
        <Button type="secondary" label="Choose a Plan" />
      </div>
    </nav>
  );
}
