import Image from "next/image";

export default function Footer() {
  return (
    <>
    <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed bottom-0 left-0 right-0 overflow-auto ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Chickn Dream Ltd</p>
  </aside>
</footer>

    </>
  );
}
