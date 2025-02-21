import Image from "next/image";

export default function SmallMenuItemCard({ itemName }) {
  return (
    <div className="card border border-gray-100  flex flex-row justify-center items-center  cursor-pointer my-2 w-75">
      <div className="p-2 flex flex-row">
        <div className="mx-2"> 1x</div>
        <div>
          <p className="">{itemName}</p>
        </div>
      </div>
    </div>
  );
}
