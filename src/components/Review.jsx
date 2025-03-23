import ReviewCard from "./ReviewCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "SoK Kanhchana",
    imgSrc: "/images/people-1.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Phal Puthipong",
    imgSrc: "/images/people-3.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "/images/people-4.jpg",
    company: "Web Designers",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-4.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-1.jpg",
    company: "TechMosaic",
  },
];

const Review = () => {
  useGSAP(() => {
    const totalWidth = reviews.length * 150;

    gsap.to(".scrup-slide", {
      x: `-=${totalWidth}`,
      scrollTrigger: {
        trigger: "#reviews",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  });

  return (
    <section id="reviews" className="sectiont overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 mt-16 reveal-up">
          What our customers say
        </h2>
        <div className="scrup-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
