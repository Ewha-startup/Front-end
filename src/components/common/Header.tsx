import icon from "/feditIcon.png";
import logo from "@/assets/feditLogo.png";

function Header() {
  return (
    <header className="w-full h-20 bg-[#313036] pl-5 flex items-center gap-1">
      <img src={icon} alt="fedit icon" className="h-8" />
      <img src={logo} alt="fedit logo" className="h-8" />
    </header>
  );
}

export default Header;
