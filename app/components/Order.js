import Image from "next/image";
import OrderItemCard from "./Cards/OrderItemCard";

export default function Order() {
  return (
    <>
    <div className="w-full overflow-auto lg:max-h-[700px] overflow-y-auto scrollbar-hidden  no-scrollbar p-4 mb-8 flex-grow">
      <p className="m-2">ORDER</p>
      <OrderItemCard />
      <OrderItemCard />
      <OrderItemCard />
      <OrderItemCard />
    </div>
    <section className="absolute bottom-0 left-0 w-full border-t-4 border-white-100 flex justify-between p-4 mt-8">
    <p>Total: $11.01</p>
    <div>
    <button className="btn btn-sm mx-2">Discounts</button>
    <button className="btn btn-sm">Pay Now </button>

    </div>
    
    </section>
    </>
  );
}
