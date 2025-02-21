import Image from "next/image";

export default function OrderItemCard() {
  return (
    <>
      <div className="card bg-primary text-primary-content w-full flex flex-row justify-between py-2 my-4">
        <div className="p-2 flex flex-row">
          <div className="mx-2"> 1x</div>
          <div>
            <div>
              <p> Spicy Chicken Sandwhich</p>
              <p className="font-bold">$5.99</p>
            </div>
            <div className="mx-2 italic ">
              <p> Xtra Lettuce</p>
              <p> No Ketchup Lettuce</p>
              <p> No Mayo Lettuce</p>
              <p>2x Cheese</p>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col ">
          <div className="card-actions ">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
          <div>
            {" "}
            <button className="btn btn-sm my-2">UPDATE</button>
          </div>
        </div>
      </div>
    </>
  );
}
