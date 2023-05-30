import React from "react";

function ListItem({ logo, content, highlight }) {
  // function editString(string, wordPositon){
  //   let words = string.split(" ");
  //   if(word)
  //   let result="<span className'text-[#0096FF]'></span>"
  // }
  let n = content.length;

  return (
    <div className="flex flex-row items-center justify-start">
      <img src={logo} className="w-[60px]" />

      <text className="ml-10 text-2xl">
        {highlight === "initial" ? (
          <>
            <span className="text-[#0096FF]">{content[0] + " "}</span>
            {content.slice(1, n).join(" ")}
          </>
        ) : (
          <>
            {content.slice(0, n - 1).join(" ")}
            <span className="text-[#0096FF]">{" " + content[n - 1]}</span>
          </>
        )}
      </text>
    </div>
  );
}

export default ListItem;
