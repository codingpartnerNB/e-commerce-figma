import Image from 'next/image';
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-sm hover:shadow-lg transition duration-300" style={{backgroundColor: "#141414", fontFamily: "Encode Sans"}}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-fill"
        />
        <div className="absolute top-2 right-2 rounded-full p-2 cursor-pointer">
          <Image src="/assets/bookmark-black.svg" alt="Bookmark Icon" width={26} height={34} className='transition drop-shadow-none hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]' />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="relative group">
          <h3 className="font-medium tracking-[0.1em] leading-[100%] text-lg mb-6 line-clamp-2 group-hover:opacity-80 transition-opacity duration-200">
            {product.title}
          </h3>
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 w-full px-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 z-10 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm font-normal p-2 rounded-md shadow-lg whitespace-normal break-words max-w-xs transform transition-all duration-200 origin-bottom scale-95 group-hover:scale-100 pointer-events-auto">
              {product.title}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-b-0 border-l-transparent border-r-transparent border-b-transparent border-t-4 border-t-gray-800"></div>
            </div>
          </div>
        </div>
        <div className='flex items-end gap-1 tracking-[0.1em] leading-[100%]'>
          <div className="text-lg font-bold tracking-normal">
            ₹ {(product.price * 80).toFixed(0)}
          </div>
          <div className="line-through font-normal text-[11.96px] pb-0.75">{(product.price * 160).toFixed(0)}</div>
          <div className="font-medium text-[11.96px] pb-0.75" style={{color: "#2FC14F"}}>(50% Off)</div>
          <div className="ml-auto">
            <Image src="/assets/add-bag.svg" alt="Add To Cart" width={35.87} height={43.44} className="text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;