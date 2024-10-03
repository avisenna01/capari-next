import Button from "@/components/atoms/Button";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#c6c3b3] mt-[400px]">
        <div className="content-box py-[150px] text-center">
          <p className="text-[50px]">Let’s talk about your website</p>
          <p className="text-[19px">
            Tell us about your business and we’ll arrange a call to chat about
            your needs and how we can help.
          </p>

          <Button textButton="Contact us" />
        </div>
      </footer>
      {/* <marquee>capari</marquee> */}
    </>
  );
};

export default Footer;
