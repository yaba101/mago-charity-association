import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

const bg_blue_gradient =
  "bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500";
const text_gradient =
  "bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text font-bold";

const GetStarted = () => (
  <Link
    href={"/donation"}
    className={`flex justify-center items-center w-[140px] h-[140px] rounded-full ${bg_blue_gradient} p-[2px] cursor-pointer`}
  >
    <div
      className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`flex justify-center items-start flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className={text_gradient}>Donate</span>
        </p>
        <FaDollarSign className="w-[23px] h-[23px] object-contain" />
      </div>
    </div>
  </Link>
);
export default GetStarted;
