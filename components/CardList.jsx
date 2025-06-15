'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Image from 'next/image';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-22">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '0ms', backgroundColor: "#E5DFD9" }}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '150ms', backgroundColor: "#E5DFD9" }}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '300ms', backgroundColor: "#E5DFD9" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-1 px-4 mb-10" style={{fontFamily: "Encode Sans"}}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center px-4 mb-10 text-sm md:text-[16px] font-medium tracking-[0.1em] leading-[100%]">
          {/* Left Section */}
          <div>
            Bags • Backpacks
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <span className='mr-1 md:mr-3.5'>13 products</span>
            

            {/* Share Icon */}
            <Image src="/assets/share.svg" alt="Bookmark Icon" width={16.67} height={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;