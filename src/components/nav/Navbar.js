import "./navbar.css";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({ searchBar, addButton }) => {
  return (
    <nav>
      <div className="logo">
        <img
          src=" https://cdn-icons-png.flaticon.com/512/15526/15526253.png"
          alt="logo"
        />
      </div>
      <div className="searchBar">
        <LuMenu />
        <IoIosSearch />
        <input
          type="text"
          placeholder={searchBar?.placeholder || "Search Here..."}
        />
      </div>
      <div className="options">
        <a title={addButton?.tooltip}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 10 10"
            fill="none"
            className="optionIcon"
          >
            <rect
              y="6"
              width="2"
              height="10"
              rx="0.990741"
              transform="rotate(-90 0 6)"
              fill="white"
            ></rect>
            <rect x="4" width="2" height="10" rx="0.990741" fill="white"></rect>
          </svg>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
