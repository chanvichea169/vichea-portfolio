import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const handleDownloadCV = () => {
  const cvUrl = "/images/Chann_Vichea.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Chann_Vichea_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Vichea"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-200 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 animate-ping">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              onClick={handleDownloadCV}
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[360px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[65px] overflow-hidden">
            <img
              src="/images/hero.png"
              width={656}
              height={800}
              alt="Vichea"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
