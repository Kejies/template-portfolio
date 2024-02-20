import Image from "next/image";
import portfolio from "../../portfolio.json";
import IconLink from "./IconLink";

interface About {
    title: string;
    header: string;
    description: string;
    image: string;
}
const AboutMe = () => {
    const Data: About = portfolio.AboutMe;
    return (
        <div id="about">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={`/images/${Data.image}`} className="md:mt-16 md:ml-36 w-80 mr-1 md:w-3/4 md:h-[38rem] rounded-lg shadow-fuchsia-800 shadow-md md:mr-24 max-w-xl" width={500} height={500} alt="profile" />
                    <div className="w-80 xl:w-screen">
                        <h1 className="text-5xl font-bold">{Data.title}</h1>
                        <p className="py-3 text-xl">{Data.header}</p>
                        <p className="text-xl">{Data.description}</p>
                        <IconLink/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;