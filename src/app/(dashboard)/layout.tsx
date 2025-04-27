import Footer from "@/components/Footer";
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
      <div className="xs:hidden w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 f">
        <div className="">
          <Link
            href="/"
            className="gap-2 flex items-center justify-center lg:justify-start gap-[4]  py-2 md:px-2 rounded-md"
          >
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <div className="flex flex-col justify-center items-center gap-[2px] max-h-[32]  ">
              <span className="lg:block font-extrabold text-gray-600">
                PROGRATE
              </span>
            </div>
          </Link>
          <Menu />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" relative w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto scrollbar-none flex flex-col">
        <div className=" absolute top-0 w-full bg-white  z-50">
          <Navbar />
        </div>
        <div className="overflow-y-auto scrollbar-none flex flex-col pt-[60px] h-screen mt-6">
          {children}
        </div>
        {/* <Footer /> */}

      </div>
    </div>
  );
}
