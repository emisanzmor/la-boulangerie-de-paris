import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky w-full left-0 top-0 flex justify-between items-center backdrop-blur-md  z-50 border-b-[0.5px] border-black/50 ">
      <div className="flex flex-row p-4 w-auto">
        <h1 className="text-xl whitespace-nowrap">
          <a href="/">La Boulangerie de Paris</a>
        </h1>
      </div>
      <nav className="w-full flex justify-end px-4 ">
        <ul className="flex gap-8">
          <li className="text-xs font-semibold cursor-pointer">
            <a href="/">HOME</a>
          </li>
          <li className="text-xs font-semibold cursor-pointer">
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
