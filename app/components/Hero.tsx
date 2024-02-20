import Image from "next/image";
import portfolio from "../../portfolio.json";
import IconLink from "./IconLink";
import Link from "next/link";

interface Portfolio {
  title: string;
  header: string;
  name: string;
  description: string;
  image_hero: string;
}

const Hero = () => {
    const portfolioData: Portfolio = portfolio.portfolio;
    return (
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="mr-12 xl:mr-0">
              <Image
                src={`/images/${portfolioData.image_hero}`}
                className="max-w-sm rounded-lg shadow-2xl w-64 md:w-80 md:h-[28rem]"
                width={200}
                height={200}
                alt="hero image"
              />
            </div>
            <div className="w-screen p-5">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{portfolioData.header}</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700">{portfolioData.name}</h2>
              <p className="py-2 text-gray-800 text-2xl w-72 md:w-3/4">{portfolioData.description}</p>
              <Link className="btn bg-indigo-400 hover:bg-indigo-500 ml-2 text-gray-200" href="/#about">About Me</Link>
            </div>
          </div>
        </div>
      );
    };

export default Hero;
