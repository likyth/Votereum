import { PrimaryButton } from "../Buttons";
import heroImg from "../../assets/heroImg.jpg";
import { FaLock, FaCheckCircle, FaEye } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero page-container grid grid-cols-1 lg:grid-cols-2 items-center gap-4 overflow-hidden">
        <div className="hero__content z-20 text-center ">
          <h1 className="hero__title large-heading">
            Votereum Blockchain Based Voting
          </h1>
          <p className="hero__description small-heading">
            We have the best products at the best prices
          </p>
          <PrimaryButton className="">Register Now</PrimaryButton>
        </div>
        <div className="z-0 ">
          <img
            src={heroImg}
            alt="heroImg"
            className=" hidden lg:block lg:w-full ml-4 lg:ml-0"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
            <div className="flex flex-col text-start justify-center bg-blue-900 rounded-3xl py-16 px-5">
              <p className="body-text !text-white">Step 1</p>
              <h2 className="small-heading !text-white">Sign Up</h2>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur,
              </p>
              {/* <div className="w-full flex justify-start">
                <PrimaryButton className="w-auto">Register Now</PrimaryButton>
              </div> */}
            </div>
            <div className="flex flex-col text-start justify-center rounded-3xl py-10 px-5  ">
              <p className="body-text !text-white">Step 2</p>
              <h2 className="small-heading !text-white">Vote</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio.
              </p>
            </div>
            <div className="flex flex-col text-start justify-center rounded-3xl py-10 px-5 ">
              <p className="body-text !text-white">Step 3</p>
              <h2 className="small-heading !text-white">
                View Election Results
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 lg:py-20 lg:px-20 px-10 py-16">
          <p className="small-heading">
            Votereum is revolutionizing the way we vote by leveraging blockchain
            technology.
            <p className="body-text mt-5">
              Our platform is easy to use and provides a seamless voting
              experience for all users. With Votereum, you can vote from the
              comfort of your home, office, or anywhere in the world.{" "}
            </p>
          </p>
        </div>
        <div className="py-14 px-0 lg:py-10 lg:px-52 bg-white">
          <p className="large-heading text-center">Our Features</p>
          <p className="small-heading mt-5 text-center !font-semibold">
            Discover the key features that make Votereum the best choice for
            secure and transparent voting.
          </p>
          <div className="flex flex-col md:flex-row pt-10 justify-around">
            <div className="flex flex-col items-center  justify-between">
              <FaLock className="w-20 h-20 text-blue-700" />
              <p className="text-center mt-4 small-heading font-semibold">
                Secure
              </p>
              <p className="text-center body-text mt-2">
                Our platform ensures the highest level of security for your
                votes, protecting your data with advanced encryption.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaCheckCircle className="w-20 h-20 text-blue-700" />
              <p className="text-center mt-4 small-heading font-semibold">
                Reliable
              </p>
              <p className="text-center body-text mt-2">
                Votereum guarantees reliable voting processes, ensuring every
                vote is counted accurately and transparently.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaEye className="w-20 h-20 text-blue-700" />
              <p className="text-center mt-4 small-heading font-semibold">
                Transparent
              </p>
              <p className="text-center body-text mt-2">
                Our blockchain technology provides full transparency, allowing
                you to verify the integrity of the voting process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
