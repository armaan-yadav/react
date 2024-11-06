import React from "react";

import data from "../../constants/data";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { AiFillStar } from "react-icons/ai";
import { CiBag1, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Card = ({ data }) => {
  const info = data;
  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };
  return (
    <div className="h-[230px] w-[200px] border-[1px] border-black rounded-md overflow-hidden">
      <img
        src={info.img}
        alt=""
        className="hover:scale-110 transition-all h-[50%] object-contain"
      />

      <h3 className="text-center font-semibold my-2">{info.title}</h3>

      <div className="flex items-center justify-start px-1 my-2">
        {" "}
        {Array.from({ length: 5 }).map((e, index) => (
          <AiFillStar className="rating-star" color="gray" key={index} />
        ))}
        <span className="text-sm"> {info.reviews}</span>
      </div>

      <div className="flex items-center justify-between px-1 ">
        <p>
          $<span className="line-through">{info.prevPrice} </span>
          {info.newPrice}
        </p>

        <div className="flex items-center justify-center gap-1">
          <FaRegHeart />
          <MdOutlineShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Card;
