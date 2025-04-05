import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <div className="">
          <Link
            href="/"
            className="z-10 bg-white p-4 fixed top-0  flex items-center justify-start lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block font-bold sm:text-[9px] md:text-[12px] ">
              Prograte Capital
            </span>
          </Link>
          <Menu />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" relative w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto scrollbar-none flex flex-col">
        <div className=" absolute top-0 w-full bg-white shadow-md z-50">
          <Navbar />
        </div>
        <div className="overflow-y-auto scrollbar-none flex flex-col pt-[60px] h-screen mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}
