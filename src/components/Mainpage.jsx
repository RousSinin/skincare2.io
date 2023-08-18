import React from "react";
import Category from "./Category";
import Product from "./Product";
import { ProductInfo } from "../data";
const Mainpage = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:flex xl:flex md:flex grid max-w-[1440px] items-center h-[50vh] mx-auto">
        <div className="lg:w-[70%] xl:w-[70%] md:w-[70%] w-full h-full bg-pink-400 lg:rounded-bl-2xl lg:rounded-br-2xl xl:rounded-br-2xl xl:rounded-bl-2xl md:rounded-bl-2xl md:rounded-br-2xl">
          <img
            className="w-full h-full object-cover lg:rounded-bl-2xl xl:rounded-bl-2xl md:rounded-bl-2xl"
            src="https://img.freepik.com/free-photo/close-up-body-butter-recipient_23-2148543001.jpg?w=1380&t=st=1692154459~exp=1692155059~hmac=53de02dc0f80989b53d7d8f3f5a00f48991c82f7596e1b60426b661db1f2ef6e"
            alt=""
          />
        </div>
        <div className="lg:w-[30%] xl:w-[30%] md:w-[30%] w-full h-full bg-pink-300 lg:rounded-br-2xl lg:rounded-bl-none xl:rounded-br-2xl xl:rounded-bl-none md:rounded-br-2xl md:rounded-bl-none rounded-br-2xl rounded-bl-2xl">
          <h1 className="text-black text-2xl font-semibold text-center py-7 lg:mt-[20%] xl:mt-[20%] md:mt-[20%] mt-3">
            Let's Get Ready <br /> With Tynin
          </h1>
          <div className="w-full lg:flex xl:flex md:flex hidden">
            <button className="text-white text-lg font-semibold mx-auto py-2 px-7  bg-black rounded-full">
              About Us
            </button>
          </div>
        </div>
      </div>
      <Category />
      <div className="ww-full max-x-[1440px] mx-auto flex items-center justify-between">
        <h1 className="text-gray-700 text-xl font-semibold ml-5">
          Our Product
        </h1>
        <h1 className="text-lg text-blue-600 mr-5 font-normal">View All</h1>
      </div>
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between py-7">
        {/* left Icon */}
        <div className="lg:block xl:block md:hidden hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] md:w-[3rem] md:h-[3rem] w-[40px] h-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* cart */}
        <div className="lg:grid-cols-3 xl:grid-cols-4 md:gird-cols-2 grid grid-cols-1 mx-auto gap-x-5">
          {ProductInfo.map((item) => {
            return <Product item={item} key={item.id}/> ;
            })}
        </div>
        {/* right Icon */}
        <div className="lg:block xl:block md:hidden hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] md:w-[3rem] md:h-[3rem] w-[40px] h-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
