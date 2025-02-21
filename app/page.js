import Image from "next/image";
import Menu from "./components/Menu";
import Order from "./components/Order";

export default function Home() {
  return (
    
      <div className="flex flex-col lg:flex-row w-full flex-grow p-4 max-h-[85vh]   ">
        <section className="w-full lg:w-1/2  border-2 border-red-100  flex-grow flex flex-col items-start justify-start p-8 m-2 mb-4 relative dark-bg-clr">
          <Menu/>
        </section>
        <section className="w-full lg:w-1/2  border-2 border-red-100  flex-grow flex flex-col items-start justify-start p-8 m-2 mb-4 relative dark-bg-clr">
          <Order/>
        </section>
      
    </div>
  );
}
