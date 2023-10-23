import Image from "next/image";
import { Image as SanityImage } from "sanity";
import DonationButton from "./DonationButton";
import { FaStar } from "react-icons/fa";
import { client } from "@/utils/configSanity";
import { urlForImage } from "../../sanity/lib/image";

type HeroType = {
  _id: string;
  welcomeMessage: string;
  imageUrl: SanityImage[];
  _createdAt: string;
  _updatedAt: string;
};

async function getData() {
  const query = `*[_type == "hero"]`;
  const data = await client.fetch(query);
  return data as HeroType[];
}

const Hero = async () => {
  const pink_gradiant =
    "bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]";
  const white_gradiant = "bg-white bg-opacity-60 filter blur-[750px]";
  const blue_gradiant =
    "bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]";
  const bg_discount_gradient = "bg-gradient-to-tr from-gray-700 to-indigo-900";
  const text_gradient =
    " bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text";

  const data = await getData();
  const heroText = data?.[0].welcomeMessage.split(" ");
  console.log(heroText);

  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}
        >
          <FaStar className="text-yellow-300" />
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2`}
          >
            <span className="text-white">Empower</span> Generosity:{" "}
            <span className="text-white">Your Click,</span> Their Hope.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {heroText?.[0]} <br className="sm:block hidden" />{" "}
            <span className={`${text_gradient}`}>{heroText?.[1]}</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <DonationButton />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          {heroText?.[2]}
        </h1>
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Welcome to the Moga Charity {"Association's"} official website, where
          compassion meets action. Our mission is to make a positive and lasting
          impact on the lives of those in need, right here in the heart of Moga
          and beyond.
        </p>
      </div>

      <div
        className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}
      >
        <Image
          src={urlForImage(data?.[0].imageUrl?.[0]).url()}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          width={500}
          height={500}
        />
        <div
          className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `}
        />
        <div
          className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`}
        />
        <div
          className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`}
        />
      </div>

      <div className={`ss:hidden flex justify-center items-center`}>
        <DonationButton />
      </div>
    </section>
  );
};

export default Hero;
