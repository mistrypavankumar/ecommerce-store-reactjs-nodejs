// About.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="h-auto w-[100%] py-24 md:px-10 ">
      <h1 className="headingStyle">
        <div className="headingStylesDiv" />
        Products
      </h1>
      <p className="mt-4 text-gray-600">
        Welcome to Ecommerce, where we offer the best products for your daily
        needs.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
        <p className="mt-2 text-gray-600">
          Here at Ecommerce, we started with a vision to provide quality
          products to all our customers, ensuring a seamless online shopping
          experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Meet the Team</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {/* Team Member Block */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
          </div>
          {/* Additional team members can be added in a similar format */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-2 text-gray-600">
          Our mission is to revolutionize the online shopping experience,
          bringing the best products directly to your doorstep.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us</h2>
        <p className="mt-2 text-gray-600">
          Choose Ecommerce for unparalleled product variety, top-notch customer
          service, and a shopping experience that's tailored to your needs.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
