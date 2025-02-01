import { useState } from "react";
import { HeartIcon, StarIcon } from "../../assets/icons";
import { ImageCard } from "../../assets/images";
import AddNewProductsForm from "./add-new-product";

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-[358px] h-[436px] bg-white rounded-[14px] grid grid-rows-3">
      <img
        src={ImageCard}
        alt="image"
        className="w-full h-full object-cover rounded-t-[14px] row-span-2"
      />
      <div className="text-black row-span-1 px-5 pt-3">
        <div className="flex justify-between space-y-7">
          <p className="text-[18px] font-bold">Apple Watch Series 4</p>
          <img src={HeartIcon} alt="image" className="w-5 h-5" />
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-blue-500 text-base font-bold">GHS 900.00</p>
            <div className="flex space-x-1">
              <img src={StarIcon} alt="image" className="w-5 h-5" />
              <img src={StarIcon} alt="image" className="w-5 h-5" />
              <img src={StarIcon} alt="image" className="w-5 h-5" />
              <img src={StarIcon} alt="image" className="w-5 h-5" />
            </div>
          </div>
          <button
            className="rounded-lg bg-black px-5 py-2 text-white text-xs cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <p>Edit Product</p>
          </button>
        </div>
      </div>
      {/* <AddNewProductsForm/> */}
      <AddNewProductsForm
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
