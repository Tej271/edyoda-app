import React from "react";

function ButtonSection() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 w-[100%]">
      <a
        href="#"
        className="text-sm px-3.5 py-4 w-[45%]  font-medium rounded leading-6 text-red-600 border border-rose-600"
      >
        CANCEL
      </a>
      <a
        href="#"
        className="rounded bg-[#47BA68] px-3.5 py-4  w-[45%] text-sm font-medium text-white shadow-sm hover:bg-[#47BA68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#47BA68]"
      >
        PROCEED TO PAY
      </a>
    </div>
  );
}

export default ButtonSection;
