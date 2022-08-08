import React from "react";
import Why_choose_here from "./Section/Why_choose_here";
import How_Card_Work from "./Section/How_Card_Work"
import Testimonials from "./Testimonials";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

const HomeSection = () => {
    return (
      <section className="Section_one">
      <div className="First_line">
      <h1 className="Heading_line">Why Choose Ileero Remit</h1>
      <p className="Paragraph_line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum <br />
                        recusandae, pariatur facere ea accusantium nesciunt nam!.</p>
      </div>
      <div className="Why_choose_me">
           <Why_choose_here />
           <Why_choose_here />
           <Why_choose_here />
        </div>
        <div className="Why_choose_me">
           <Why_choose_here />
           <Why_choose_here />
           <Why_choose_here />
        </div>
        <section className="World_Name p-10 py-20 bg-[#011A1D] min-h-screen">
            <div className="first_int flex flex-col items-center justify-center text-white space-y-5">
                 <h2 className="text-3xl font-bold text-center white">Send Money to Countries around the globe</h2>
                   <p className="font-bold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit.
Omnis doloremque ad mollitia atque quibusdam.</p>
<center>
<button className="Transaction pointer text-center rounded flex items-center justify-center font-semibold">Transfer Partners</button>
</center>       
<div className="flex items-center mt-10 ">
           <center>
           <img src="/world.png" alt="" className="object-cover world_img" srcset="" />
           </center>
          </div>
     </div>
        </section>
        <section className="how bg-white p-10 py-20 min-h-screen">
        <div>
            <h1 className="text-3xl font-bold text-center">How it works</h1>
            <p className="text-center text-sm font-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
              <br /> Omnis doloremque ad mollitia atque quibusdam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  max-w-6xl gap-2 mt-10 mx-auto">
          <How_Card_Work />
        </div>
        </section>
        <section className="bg-[#EFF7FF] h-[450px]">
             <div id="Run_Around" className="">
             <div id="extend" className="">
            <img id="images" src="./Mask Group 66.png" className="object-cover" alt="" srcset=""/>
          </div>
          <div className="justify-center text-black space-y-5">
              <div id="justify" className="relative -top[40px] items-center justify-start py-28 pl-5">
                <h1 className="text-3xl font-bold text-start">
                  Fastest way to send <br /> money online
                </h1>
                <p className="text-start text-sm font-normal mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut
                </p>
              </div>
            </div>
             </div>
        </section>
        <section>
            <Testimonials />
        </section>
        <section className="faq p-10 py-20 min-h-screen ">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center text-black space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-center">FAQ</h1>
              <p className="text-center text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore <br /> et dolore magna
                aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
              <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="cursor-pointer h-[48px] w-[152px] bg-[#205072] border border-[#205072] text-white rounded flex items-center justify-center text-lg font-semibold">
              See More
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 pt-20 bg-[#EFF7FF]">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-center text-black space-y-10">
              <div>
                <h1 className="text-3xl font-bold text-start">
                  Lorem Ipsum Flows
                </h1>
                <p className="text-start text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam <br /> nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <img
                  src="/Image 5@2x.png"
                  className="w-[134px] h-[40px]"
                  alt=""
                />
                <img
                  src="/Image 4@2x.png"
                  className="w-[134px] h-[40px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img src="/Mask Group 68.png" alt="" />
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[20pc] bg-[#1894F8]">
          <div className="subscribe h-[90%] flex items-center justify-center flex flex-col items-center justify-center text-white space-y-10">
          <div>
              <h1 className="text-3xl font-bold text-center">
                Subscribe to our newsletters
              </h1>
              <p className="text-center text-white text-sm font-normal mt-2">
                Learn about our products. Hear about our offers.
              </p>
            </div>
            <form className="flex items-center justify-center space-x-2">
              <div className="w-[364px] h-[56px] px-2 bg-white rounded">
                <input
                  type="text"
                  placeholder="Email"
                  className="mx-1 w-full h-full rounded-md outline-none border-none focus:ring-0 focus:outline-none placeholder:pl-2 placeholder:text-sm  text-black "
                />
              </div>
              <button className="cursor-pointer h-[56px] w-[152px] hover:text-white bg-[#205072] border border-[#205072] hover:border-white text-white rounded flex items-center justify-center text-lg font-semibold">
                Subscribe
              </button>
            </form>
          </div>
      </section>
      </section>
      
    )
}

export default HomeSection;