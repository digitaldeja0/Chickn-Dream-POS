import Image from "next/image";
import OrderItemCard from "./Cards/OrderItemCard";

export default function Order() {
  return (
    <div className="w-full overflow-auto max-h-[700px]">
      <p className="m-2">ORDER</p>
      <OrderItemCard />
      <OrderItemCard />
     
    </div>
  );
}
