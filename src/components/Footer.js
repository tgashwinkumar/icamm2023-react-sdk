import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" flex flex-col justify-center items-center font-poppins bg-black p-6">
      <p className="text-white mb-6">Site developed By</p>
      <div className="flex flex-col items-center justify-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12">
        <DeveloperItem
          name="TG Ashwin Kumar"
          github="tgashwinkumar"
          github_id="tgashwinkumar"
          mail_id="tgashwinkumar@gmail.com"
        />
        <DeveloperItem
          name="Manuvikash S"
          github="manuvikash"
          github_id="manuvikash"
          mail_id="manuvikashs@gmail.com"
        />
        <DeveloperItem
          name="RA Sashti Amar"
          github="John-Tenning"
          github_id="John-Tenning"
          mail_id="sasti244@gmail.com"
        />
      </div>
    </footer>
  );
};

export default Footer;

export const DeveloperItem = ({ name, github, github_id, mail_id }) => {
  return (
    <div className="font-ubuntu flex flex-col space-y-1 text-white text-center items-center">
      <p className="font-bold">{name}</p>
      <button className="flex space-x-2 items-center group text-xs">
        <AiFillGithub />
        <p className="border-b border-black group-hover:border-white border-dashed">
          {github_id}
        </p>
      </button>
      <button className="flex space-x-2 items-center group text-xs">
        <AiOutlineMail />
        <p className="border-b border-black group-hover:border-white border-dashed">
          {mail_id}
        </p>
      </button>
    </div>
  );
};
