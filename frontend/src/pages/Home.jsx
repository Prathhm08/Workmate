// eslint-disable-next-line no-unused-vars
import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatorImg from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../../src/components/About/About";
import ServiceList from "../../src/components/Services/ServicesList";
import WorkerList from "../components/Workers/WorkerList";
import FaqList from "../components/faq/FaqList";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    //  ------Hero Section----
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div className="lg:w-[570px]">
              <h1
                className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] 
  md:leading-[70px]"
              >
                We help you keep your home in perfect condition.
              </h1>
              <p className="text__para">
                Our mission is to simplify and enhance your home maintenance
                experience, connecting you with reliable professionals like
                carpenters, electricians, and plumbers to ensure all your needs
                are met with efficiency and care.
              </p>
              <button className="btn">Request a Booking</button>

              {/* ----Hero Counter----- */}

              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
    text-headingColor "
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
        text-headingColor "
                  >
                    10+
                  </h2>

                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Expertise</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
        text-headingColor "
                  >
                    15+
                  </h2>

                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Service Areas</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
        text-headingColor "
                  >
                    3000+
                  </h2>

                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>

              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---hero_section_end--- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing Top-Notch Home Services
            </h2>
            <p className="text__para text-center">
              Expert solutions for all your home maintenance needs. Our network
              of skilled professionals ensures quality service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt:[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Worker
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Locate trusted carpenters, electricians, and plumbers ready to
                  help you with your home projects.
                </p>

                <Link
                  to="/workers"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-while w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt:[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Service Areas
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Discover service areas covered by our skilled professionals to
                  ensure quick and efficient assistance.
                </p>

                <Link
                  to="/map"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-while w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt:[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book a Slot
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Schedule a convenient time for our professionals to visit and
                  assist with your home maintenance tasks.
                </p>

                <Link
                  to="/workers"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-while w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section start---- */}

      <About />

      {/* About Section end---- */}

      {/* --services-section-start-- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading lg-text-center ">Our Services</h2>
            <p className="text__para ">
              Exceptional services for your home. Our system connects you with
              skilled professionals who get the job done right.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* --services-section-end-- */}

      {/* Feature_section_start */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row ">
            {/* __feature-Content__ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Assistance <br />
                Anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">1. Book your worker directly.</li>
                <li className="text__para">
                  2. Search for skilled workers in your area, and contact them
                  directly.
                </li>
                <li className="text__para">
                  3. View workers who are available, and use our platform to
                  schedule an appointment.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ---Feature-Image--- */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="felx items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                    font-[600]"
                    >
                      Tue, 24
                    </p>

                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                    font-[600]"
                    >
                      10:00 AM
                    </p>
                  </div>

                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
                  bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
                rounded-full"
                >
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatorImg} alt="" />
                  <h4
                    className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                  text-headingColor"
                  >
                    Sarabjit Sinha
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature_section_end */}
      {/* Our great workers */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading lg-text-center lg:ml-[60px]">
              Our great workers
            </h2>
            <p className="text__para text-center">
              Expert services for every need. Our platform connects you with
              skilled professionals for plumbing, electrical, carpentry, and
              more, ensuring quality and reliability.
            </p>
          </div>

          <WorkerList />
        </div>
      </section>

      {/* Out great Worker end*/}

      {/* FAQ section-------start */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block pt-20">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Questions by our beloved users</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section-------end */}

      {/* ----Testimonial section start----- */}

      <section>
        <div className="container">
          <div className="xl:w-[700px] mx-auto">
            <h2 className="heading lg-text-center lg:ml-[130px]">
              What Our Customers Say
            </h2>
            <p className="text__para text-center">
              Exceptional service for every need. Our platform connects you with
              skilled professionals, and our customers are thrilled with the
              results.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* ----Testimonial section end----- */}
    </>
  );
};

export default Home;
