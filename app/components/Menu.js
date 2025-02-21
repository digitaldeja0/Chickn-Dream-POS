import Image from "next/image";
import MainMenuItemCard from "./Cards/MainMenuItemCard";
import SmallMenuItemCard from "./Cards/smallMenuItemCard";

export default function Menu() {
  return (
    <>
      <div className="w-full lg:max-h-[700px] flex flex-col overflow-y-auto scrollbar-hidden  no-scrollbar">
        <div>
          <p className="m-2 mb-4">MENU</p>
        </div>
        <div className="flex mb-4 ">
          <button className="btn btn-small mx-2">Lunch Menu</button>
          <button className="btn btn-small mx-2">
            Breakfast Menu
            <br /> (coming soon)
          </button>
        </div>
        <div className="flex  flex-row sm:justify-center md:justify-start">
          <MainMenuItemCard itemName="Sandwhich" />
          <MainMenuItemCard itemName="Nuggets" />
          <MainMenuItemCard itemName="Sides" />
          <MainMenuItemCard itemName="Drinks" />
        </div>

        <div className="border border-gray-100  ">
          <div className=" flex flex-row justify-between w-full items-center">
            <div>
              <MainMenuItemCard itemName="Regular Sandwhich" />
              <MainMenuItemCard itemName="Spicy Sandwhich" />
            </div>
            <div className="mx-2">
              <button className="btn btn-primary">Add Item</button>
            </div>
          </div>
          <div className=" m-2">
            <SmallMenuItemCard itemName="Lettuce" />
            <SmallMenuItemCard itemName="Tomatoe" />
            <SmallMenuItemCard itemName="Bun" />
            <SmallMenuItemCard itemName="American Cheese" />
            <SmallMenuItemCard itemName="Mayo" />
          </div>
        </div>
      </div>
    </>
  );
}
