import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-vertical md:footer-horizontal bg-neutral text-neutral-content px-4 sm:px-6 md:px-10 py-8 md:py-10 gap-8 md:gap-0 lg:mt-15">
      <nav>
        <h6 className="footer-title text-sm md:text-base">Services</h6>
        <a className="link link-hover text-xs md:text-sm">Branding</a>
        <a className="link link-hover text-xs md:text-sm">Design</a>
        <a className="link link-hover text-xs md:text-sm">Marketing</a>
        <a className="link link-hover text-xs md:text-sm">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-sm md:text-base">Company</h6>
        <a className="link link-hover text-xs md:text-sm">About us</a>
        <a className="link link-hover text-xs md:text-sm">Contact</a>
        <a className="link link-hover text-xs md:text-sm">Jobs</a>
        <a className="link link-hover text-xs md:text-sm">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-sm md:text-base">Legal</h6>
        <a className="link link-hover text-xs md:text-sm">Terms of use</a>
        <a className="link link-hover text-xs md:text-sm">Privacy policy</a>
        <a className="link link-hover text-xs md:text-sm">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
