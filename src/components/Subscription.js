import React from "react";

function Subscription({ option, optionIdx, selectSubscription }) {
  return (
    <div
      onClick={() => selectSubscription(option.id)}
      className={`flex flex-row relative items-center justify-between w-[90%] my-[1%] px-[4%] py-[1%] rounded  border-2  ${
        option.status === "expired"
          ? "border-neutral-400 bg-neutral-300 text-gray-500"
          : option.status === "recommended"
          ? "border-green-600 bg-green-300"
          : ""
      }`}
    >
      {option.status === "expired" ? (
        <div className="bg-red-600  px-2 text-[10px] text-white absolute top-0 left-10 rounded">
          Offer Expired
        </div>
      ) : option.status === "recommended" ? (
        <div className="bg-green-600 px-2 text-[10px] text-white absolute top-0 left-10 rounded">
          Recommended
        </div>
      ) : null}

      <div className="flex items-center gap-x-3">
        <input
          id="push-email"
          name="push-notifications"
          type="radio"
          defaultChecked={option.checked}
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
          {option.label}
        </label>
      </div>
      <div>
        <text className="text-base">
          <span className="text-sm">Total:</span>{" "}
          <span className="font-semibold">
            {"\u20B9"}
            {option.cost}
          </span>
        </text>
        <br />
        <text className="text-sm">
          {"\u20B9"}
          {option.monthlyCost} <span className="text-neutral-500">/mo</span>
        </text>
      </div>
    </div>
  );
}

export default Subscription;
