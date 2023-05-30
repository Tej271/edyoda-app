import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar";
import List from "./components/List";
import Subscription from "./components/Subscription";

import one from "./assets/one.png";
import two from "./assets/two.png";
import Billing from "./components/Billing";
import ButtonSection from "./components/ButtonSection";
import razorpayLogo from "./assets/icon-razorpay.png";

function App() {
  const [options, setOptions] = useState([
    {
      id: 0,
      value: "12 Months Subscription",
      label: "12 Month Subscription",
      checked: false,
      status: "expired",
      cost: "99",
      monthlyCost: "8",
    },
    {
      id: 1,
      value: "12 Months Subscription",
      label: "12 Month Subscription",
      checked: false,
      status: "recommended",
      cost: "179",
      monthlyCost: "15",
    },
    {
      id: 2,
      value: "6 Months Subscription",
      label: "6 Month Subscription",
      checked: false,
      status: "valid",
      cost: "149",
      monthlyCost: "25",
    },
    {
      id: 3,
      value: "3 Months Subscription",
      label: "3 Month Subscription",
      checked: false,
      status: "valid",
      cost: "99",
      monthlyCost: "33",
    },
  ]);

  const selectSubscription = (id) => {
    console.log("OPTIONS", options);
    let temp = options;
    console.log("TEMP", temp);
    temp.forEach((s) => {
      if (s.id === id) s.checked = true;
      else s.checked = false;
    });
    console.log("TEMP AFTER FOR", temp);
    setOptions([...temp]);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="flex flex-row items-start pt-[2.5%] justify-evenly  bg-bgImage h-[900px]">
        {/* Left Part */}
        <div className="flex flex-col items-start text-5xl text-white w-[50%] rounded-2xl">
          <text>Access curated courses worth</text>
          <br />
          <text className="font-semibold">
            &#x20B9; <span className="line-through decoration-red-600">18,500</span> at just{" "}
            <span className="text-[#0096FF]">&#x20B9; 99</span> per year!
          </text>

          {/* List */}
          <List />
        </div>

        {/* Right Part */}
        <div className="flex flex-col w-[550px] bg-white py-6 rounded">
          <div className="">
            {/* Top Part */}
            <div className="flex flex-row items-center justify-around">
              {[
                { text: "Sign Up", icon: one },
                { text: "Subscribe", icon: two },
              ].map((item) => (
                <div className="flex flex-col items-center">
                  <img src={item.icon} alt="one" />
                  <text className="font-light text-sm mt-2">{item.text}</text>
                </div>
              ))}
            </div>

            {/* Subscription Part */}
            <div className="flex flex-col items-center">
              <text className="my-4 text-xl font-medium">Select your subscription plan</text>
              {options?.map((option, optionIdx) => (
                <Subscription
                  option={option}
                  optionIdx={optionIdx}
                  selectSubscription={selectSubscription}
                />
              ))}

              <div className="bg-neutral-500 w-[90%] h-[1px] my-5"></div>
              <Billing />

              <ButtonSection />
            </div>
            <div className="ml-[5%] mt-5">
              <img src={razorpayLogo} alt="razorpay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
