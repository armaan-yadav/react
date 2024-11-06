import React, { useState } from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [seachValue, setSeachValue] = useState("");
  return (
    <div className="h-[56px] w-full  flex items-center justify-between px-10 border-b-2 border-gray-300">
      <div className="flex items-center justify-center gap-3">
        <input
          className="bg-transparent outline-none border-b-2 border-black w-[400px]"
          placeholder="Search for footwears"
          type="text"
          value={seachValue}
          onChange={(e) => setSeachValue(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <CiShoppingCart size={30} />
        <CiUser size={30} />
        <CiHeart size={30} />
      </div>
    </div>
  );
};

export default Navbar;
