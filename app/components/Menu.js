import Image from "next/image";
import MainMenuItemCard from "./Cards/MainMenuItemCard";

export default function Menu() {
  return (
    <>
     <div className="w-full overflow-auto max-h-[700px] flex flex-col">
     <div>
     <p className="m-2 mb-8">MENU</p>
     </div>
     <div className="flex mb-8 ">
        <button className="btn btn-small mx-2">Breakfast Menu</button>
        <button className="btn btn-small mx-2">Lunch Menu</button>
     </div>
     <div className="flex">
     <MainMenuItemCard itemName="Sandwhich" />
     <MainMenuItemCard itemName="Nuggets" />
     <MainMenuItemCard itemName="Sides" />
     <MainMenuItemCard itemName="Drinks" />
     </div>
         
           
         
        </div>

    </>
  );
}
