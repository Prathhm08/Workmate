// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Proud to be one of the nation&apos;s best
            </h2>
            <p className="text__para">
              We take pride in connecting homeowners with experienced and
              reliable workers across the country. Whether you need a skilled
              carpenter, a professional electrician, or a reliable plumber, our
              network of experts is ready to help.
            </p>
            <p className="text__para mt-[30px]">
              Our commitment to quality ensures that every job is completed with
              precision and care. With years of experience and a dedication to
              customer satisfaction, we make sure your home maintenance tasks
              are in the best hands.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
