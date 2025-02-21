import Image from "next/image";

export default function SmallMenuItemCard({ itemName }) {
  return (
    <div className="card border border-gray-100  flex flex-row justify-between  cursor-pointer my-2 w-full ">
      <div className=" flex flex-row">
        <div className="mx-2"> 1x</div>
        <div>
          <p className="">{itemName}</p>
        </div>
      </div>
      <div className=" flex flex-col p-2 ">
          <div className="card-actions ">
            <button className="btn btn-xs">+</button>
            <button className="btn btn-xs">-</button>
          </div>
        </div>
    </div>
  );
}
