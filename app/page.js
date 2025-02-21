import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  p-4 pb-8 gap-4 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col md:flex-row w-full flex-grow  p-4">
        <section className="w-full md:w-1/2 border-2 border-red-100  flex-grow flex flex-col items-start justify-start p-4 ">
          MENU
        </section>
        <section className="w-full md:w-1/2 border-2 border-red-100  flex-grow flex flec-col items-start justify-start p-4">
          RECIPET
        </section>
      </div>
    </div>
  );
}
