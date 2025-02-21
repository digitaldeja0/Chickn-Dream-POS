import Image from "next/image";
import Menu from "./components/Menu";
import Order from "./components/Order";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-4 gap-4 sm:p-4 font-[family-name:var(--font-geist-sans)] min-h-screen ">
      <div className="flex flex-col lg:flex-row w-full flex-grow p-4 max-h-[85vh] overflow-auto  ">
        <section className="w-full lg:w-1/2 max-[]: border-2 border-red-100  flex-grow flex flex-col items-start justify-start p-8 m-2 ">
          <Menu/>
        </section>
        <section className="w-full lg:w-1/2 border-2 border-red-100  flex-grow flex flec-col items-start justify-start p-8  m-2">
          <Order/>
        </section>
      </div>
    </div>
  );
}
