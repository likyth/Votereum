import React from "react";
import { FaLock, FaCheckCircle, FaEye, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="page-container">
      {/* About Details */}
      <section className="my-10">
        <h1 className="large-heading text-center">About Votereum</h1>
        <p className="small-heading mt-5 text-center">
          Votereum is revolutionizing the way we vote by leveraging blockchain
          technology. Our platform is designed to provide a secure, transparent,
          and reliable voting experience for all users.
        </p>
      </section>
      {/* Team Members */}
      <section className="my-10">
        <h2 className="large-heading text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5  ">
          {["Neha", "Pallavi", "Prajwal", "Likith"].map((name, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg p-5 py-14 text-center bg-gradient-to-b from-blue-300 to-blue-600"
            >
              <img
                src={`https://via.placeholder.com/150?text=${name}`}
                alt={name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="small-heading !text-white mt-4">{name}</h3>
              <p className="body-text !text-white mt-2">Position</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Mission */}
      <section className="my-10 bg-gray-100 p-10 rounded-lg">
        <h2 className="large-heading text-center">Our Mission</h2>
        <p className="body-text mt-5 text-center">
          Our mission is to provide a secure and transparent voting platform
          that empowers individuals to participate in the democratic process
          with confidence and ease. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur totam sint ea nesciunt, expedita vero,
          corporis minima laudantium inventore, odio iste rem nam maxime iure
          facere dignissimos dolorem minus suscipit!
        </p>
      </section>
      {/* Our Strengths */}
      <section className="my-10">
        <h2 className="large-heading text-center">Our Strengths</h2>
        <div className="flex flex-col space-y-4 mt-5">
          <div className="bg-white rounded-lg  shadow-lg p-5 flex items-center">
            <div className="flex-shrink-0">
              <FaLock className="w-16 h-16 text-blue-700" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="small-heading">• Security</h3>
              <p className="body-text mt-2">
                Our platform ensures the highest level of security for your
                votes, protecting your data with advanced encryption.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg  shadow-lg p-5 flex items-center">
            <div className="flex-shrink-0">
              <FaCheckCircle className="w-16 h-16 text-blue-700" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="small-heading">• Reliability</h3>
              <p className="body-text mt-2">
                Votereum guarantees reliable voting processes, ensuring every
                vote is counted accurately and transparently.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg  shadow-lg p-5 flex items-center">
            <div className="flex-shrink-0">
              <FaEye className="w-16 h-16 text-blue-700" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="small-heading">• Transparency</h3>
              <p className="body-text mt-2">
                Our blockchain technology provides full transparency, allowing
                you to verify the integrity of the voting process.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg  shadow-lg p-5 flex items-center">
            <div className="flex-shrink-0">
              <FaUsers className="w-16 h-16 text-blue-700" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="small-heading">• Community</h3>
              <p className="body-text mt-2">
                We are committed to building a strong community of users who
                trust and support our platform.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default About;
