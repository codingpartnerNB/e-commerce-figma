import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-normal leading-[100%] tracking-normal sm:tracking-[55%]" style={{ fontFamily: "Comme" }}>
            T A N N &nbsp; T R I M
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1 sm:space-x-4 text-lg">
            <Image src="/assets/search.svg" alt="Search icon" width={24} height={24} className="cursor-pointer" />
            <Image src="/assets/user.svg" alt="User icon" width={24} height={24} className="cursor-pointer" />
            <Image src="/assets/bookmark.svg" alt="Bookmark icon" width={24} height={24} className="cursor-pointer" />
            <Image src="/assets/shoppingbag.svg" alt="Shopping bag icon" width={24} height={24} className="cursor-pointer" />
          </div>
        </div>

        {/* Nav and Profile */}
        <div
          className="flex items-center justify-center gap-8 py-2 relative"
          style={{ fontFamily: "Encode Sans" }}
        >
          {/* Spacer to push items around profile (hide on mobile) */}
          <div className="flex-1 hidden md:block"></div>

          {/* Navigation Links */}
          <nav
            className="
              flex
              gap-6
              text-sm
              font-normal
              tracking-[0.1em]
              leading-[100%]
              overflow-x-auto
              whitespace-nowrap
              p-2
              max-w-full
              scrollbar-thin
              scrollbar-thumb-gray-300
              md:justify-center
              md:gap-[50px]
              md:overflow-visible
              md:whitespace-normal
            "
          >
            <span className="hover:text-gray-300 cursor-pointer">Bags</span>
            <span className="hover:text-gray-300 cursor-pointer">Travel</span>
            <span className="hover:text-gray-300 cursor-pointer">Accessories</span>
            <span className="hover:text-gray-300 cursor-pointer">Gifting</span>
            <span className="hover:text-gray-300 cursor-pointer">Jewelry</span>
          </nav>

          {/* Spacer (hide on mobile) */}
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
