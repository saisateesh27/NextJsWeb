"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="row align-items-center">
                <div className="col-md-12 text-center">
                  {/* Footer Logo */}
                  <div className="footer-logo">
                    <a href="/">
                      <Image
                        src="/images/logo.png"
                        height={70}
                        width={70}
                        alt="R Interior Logo"
                      />
                    </a>
                  </div>

                  {/* Footer Text */}
                  <div className="footer-copyright-text mt-3 pt-2">
                    <p>
                      © CopyRight {year} All Rights Reserved{" "}
                      <a href="#" style={{ color: "#fdb631" }}>
                        <b>RFirms</b>
                      </a>{" "}
                      - Designed by{" "}
                      <a
                        className="text-danger"
                        href="https://digitalraiz.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>DigitalRaiz</b>
                      </a>
                      .
                    </p>
                  </div>
                  {/* End */}
                </div>
              </div>
            </div>
            {/* Footer Header End */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
