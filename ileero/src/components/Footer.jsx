import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white max-w-6xl mx-auto md:h-[400px] px-12 py-20">
    <div className="grid grid-cols-1 md:grid-cols-4  footer">
      <div className="">
        <div className="flex flex-col items-start justify-center space-y-3">
          <img
            src="/Ileero-logo-concept-03.svg"
            alt=""
            className="h-[44px] w-[165px]"
          />
          <p className="text-sm text-[#707070] text-left font-normal">
            Ileero Remit enables easy access for people and businesses to send
            and receive money globally.
          </p>
        </div>
      </div>
      <div></div>
      <div id="rights">
        <h3 id="links" className="font-bold text-xl text-[#34344E]">Links</h3>
        <ul className="flex flex-col items-start text-[#34344E] text-[16px] space-y-3 mt-2">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div id="rights">
        <h3 className="font-bold text-xl text-[#34344E]">Contact</h3>
        <div className="flex flex-col space-y-5 mt-2 items-start justify-between text-[#34344E]">
          <p className="text-left font-normal text-[16px]">
            Ileero Pay Ltd, Units 1J, First Floor, Cambridge Studios. 75
            Millmarsh Lane, Enfield, EN3 7PU.
          </p>
          <p className="font-normal text-left text-[16px]">
            info@ileero.com <br /> +44 20 3974 2167
          </p>
          <div className="flex items-center justify-start space-x-3  ">
        <img src="/facebook.png" alt="" id="img" className="w-6 h-6" />
        <img src="/twitter.png" alt="" id="imgs" className="w-6 h-6" />
        <img src="/linken.png" alt="" id="imge" className="w-6 h-6" />
        <img src="/instagram.png" alt="" id="imges" className="w-6 h-6" />
      </div>
        </div>
      </div>
    </div>

    <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-5">
      <p className="test text-[12px] text-[#205072]">
        © 2020 Ileero Remit. All Rights Reserved.
      </p>
      <div className="hidden md:block" />
      <div className="hidden md:block" />

      
    </div>
  </footer>
  );
};

export default Footer;
