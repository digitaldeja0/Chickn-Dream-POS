import Image from "next/image";

export default function MainMenuItemCard({itemName}) {
  return (
    <>
    <button>
      <div className="card bg-primary text-primary-content w-24 h-24 flex flex-row justify-center items-center py-2 my-4 mx-2 cursor-pointer">
      
      <p>{itemName}</p>
      
      </div>
      </button>
    </>
  );
}
