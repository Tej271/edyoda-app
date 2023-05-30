import React from "react";

function Billing() {
  return (
    <div className="flex flex-col w-[90%] px-4 ">
      <div className="flex flex-row justify-between">
        <text>Subscription Fee</text>
        <text>{"\u20B9"}18,500</text>
      </div>
      <div className="flex flex-row justify-between border-red-500 bg-red-200 border-2 rounded-lg py-2 px-2  my-4">
        <text className="text-red-500 text-left">
          Limited time <br />
          <span>Offer valid till 25th March 2023</span>
        </text>
        <text className="">-{"\u20B9"}18401</text>
      </div>
      <div className="flex flex-row items-center  justify-between">
        <text>Total (Incl. of 18% GST)</text>
        <text className="text-2xl font-medium">{"\u20B9"}149</text>
      </div>
    </div>
  );
}

export default Billing;
