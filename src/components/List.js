import React from "react";
import book from "../assets/icon-book.png";
import clock from "../assets/icon-clock.png";
import liveTv from "../assets/icon-live0tv.png";
import grad from "../assets/icon-grad.png";
import noAds from "../assets/icon-no-ads.png";

import ListItem from "./ListItem";

function List() {
  // let input = String.fromCharCode("&#x20B9");

  const listContent = [
    {
      id: 0,
      img: book,
      content: "100+ Job relevent courses",
      highlight: "initial",
    },
    {
      id: 1,
      img: clock,
      content: "20,000+ Hours of content",
      highlight: "initial",
    },
    {
      id: 2,
      img: liveTv,
      content: "Exclusive webinar access",
      highlight: "initial",
    },
    {
      id: 3,
      img: grad,
      content: "Scholarship worth \u20B994,500",
      highlight: "end",
    },
    {
      id: 4,
      img: noAds,
      content: "AdFree learning experience",
      highlight: "initial",
    },
  ];

  return (
    <div className="flex flex-col items-left justify-between h-[400px] mt-[5%]">
      {listContent.map((feature) => (
        <ListItem
          logo={feature.img}
          content={feature.content.split(" ")}
          highlight={feature.highlight}
        />
      ))}
    </div>
  );
}

export default List;
