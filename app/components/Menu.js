import Image from "next/image";
import MainMenuItemCard from "./Cards/MainMenuItemCard";
import SmallMenuItemCard from "./Cards/smallMenuItemCard";

export default function Menu() {
  return (
    <>
     <div className="w-full overflow-auto max-h-[700px] flex flex-col">
     <div>
     <p className="m-2 mb-8">MENU</p>
     </div>
     <div className="flex mb-8 ">
        <button className="btn btn-small mx-2">Breakfast Menu<br/> (coming soon)</button>
        <button className="btn btn-small mx-2">Lunch Menu</button>
     </div>
     <div className="flex  flex-row sm:justify-center md:justify-start">
     <MainMenuItemCard itemName="Sandwhich" />
     <MainMenuItemCard itemName="Nuggets" />
     <MainMenuItemCard itemName="Sides" />
     <MainMenuItemCard itemName="Drinks" />
     </div>

     <div className="border border-gray-100">
     <div className="pt-8">
    
    <MainMenuItemCard itemName="Regular Sandwhich" />
    <MainMenuItemCard itemName="Spicy Sandwhich" />
    </div>
    <div className=" mx-8 my-2">
    <SmallMenuItemCard itemName="Lettuce" />
    <SmallMenuItemCard itemName="Tomatoe" />
    </div>
     </div>
     
         
           
         
        </div>

    </>
  );
}
