import React from "react";

const categories = [
  { name: "All Bags", icon: "/assets/icons/allbags.svg" },
  { name: "Vanity Pouch", icon: "/assets/icons/vanity.svg" },
  { name: "Tote Bag", icon: "/assets/icons/tote.svg" },
  { name: "Duffle Bag", icon: "/assets/icons/duffle.svg" },
  { name: "Laptop Sleeve", icon: "/assets/icons/laptop.svg" },
  { name: "Messenger Bags", icon: "/assets/icons/messenger.svg" },
  { name: "Slings Bags", icon: "/assets/icons/sling.svg" },
  { name: "Handbags", icon: "/assets/icons/handbag.svg" },
  { name: "Bucket Bag", icon: "/assets/icons/bucket.svg" },
];

const BagCategories = () => {
  return (
    <div className="w-full py-4 my-5 overflow-x-auto scrollbar-hide">
      <div className="flex items-center space-x-6 sm:space-x-10 px-4 min-w-max md:justify-center">
        {categories.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[90px]">
            <img
              src={item.icon}
              alt={item.name}
              className="w-[90px] h-[90px] object-contain mb-[18px]"
            />
            <span
              className="text-center font-normal tracking-[0.1em] leading-[100%]"
              style={{ fontSize: "13px", fontFamily: "Encode Sans" }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagCategories;
