import Header from "@/components/Header";
import React from "react";
import BagCategories from "@/components/BagCategories";
import CardList from "@/components/CardList";

export default function Home() {
  return (
   <div>
      <Header/>
      <BagCategories/>
      <CardList/>
   </div>
  );
}
