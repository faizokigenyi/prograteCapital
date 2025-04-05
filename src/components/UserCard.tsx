import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl shadow-xl odd:bg-white border border-gray-300  p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <div className=" px-4 py-1 rounded-full">
          <div className="flex items-center justify-between gap-0">
            <RiMoneyDollarCircleFill className="text-purple-600 text-[16px]" />
            <span className="text-gray-700 text-[16px]">Income</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaArrowUp className="text-green-500 text-[16px]" />
          <span>28%</span>
        </div>
        {/* <Image src="/more.png" alt="" width={20} height={20} /> */}
      </div>

      {/* display data here */}
      <div className="flex  items-center justify-between gap-2 mt-4">
        <div className="flex items-center  text-2xl font-bold text-gray-800">
          <BsCurrencyDollar className="text-4xl font-bold" />
          8500
        </div>
        <span className="text-gray-500 font-bold text-[12px]"> $56 than last week</span>
      </div>
    </div>
  );
};

export default UserCard;
