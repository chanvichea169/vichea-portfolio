import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/django.svg",
    label: "Django",
    desc: "Framework",
  },
  {
    imgSrc: "/images/spring-boot.svg",
    label: "Spring Boot",
    desc: "Framework",
  },

  {
    imgSrc: "/images/mysql.svg",
    label: "mySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/laravel.svg",
    label: "laravel",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwind.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
];
function Skill() {
  return (
    <section>
      <div className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                key={key}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
