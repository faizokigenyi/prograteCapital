import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

type UserCardProps = {
  name: string;
  amount: number;
  percentageIncrease: number;
};

const UserCard = ({ name, amount, percentageIncrease }: UserCardProps) => {
  const isPositive = percentageIncrease >= 0;
  return (
    <div className="rounded-2xl shadow-xl odd:bg-white border border-gray-300 p-2 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <div className="px-4 py-1 rounded-full">
          <div className="flex items-center gap-2">
            <RiMoneyDollarCircleFill className="text-purple-600 text-[20px]" />
            <span className="text-gray-700 xs:text-[8px] sm:text-[9px] md:text-[12px] font-semibold">
              {name}
            </span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <FaArrowUp /> : <FaArrowDown />}
          <span className="xs:text-6px">{Math.abs(percentageIncrease)}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mt-4">
        <div className="flex items-center text-2xl font-bold text-gray-800">
          <BsCurrencyDollar className="text-3xl" />
          {amount.toLocaleString()}
        </div>
        <span className="text-gray-500 font-bold text-[8px] md:text-[10px]">
          ${Math.round((amount * percentageIncrease) / 100)}
          {percentageIncrease >= 0 ? <span> more</span> : <span> less</span>} than last week
        </span>
      </div>
    </div>
  );
};

export default UserCard;
