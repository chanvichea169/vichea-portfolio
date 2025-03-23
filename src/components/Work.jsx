import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-3.png",
    title: "Personal Finance",
    tags: [
      "Development",
      "ReactJs,NextJs with Tailwind",
      "Hono and NodeJs",
      "PostgresSQL with Neon",
      "Clark API",
    ],
    projectLink: "https://github.com/chanvichea169/personal-finance",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "E-commerce website",
    tags: [
      "Development",
      "Laravel",
      "Bootstrap",
      "NodeJs",
      "MySQL",
      "Payment Gateway",
    ],
    projectLink: "https://github.com/chanvichea169/clothes-store",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "E-commerce website",
    tags: ["Admin Dashboard", "Laravel", "Bootstrap", "NodeJs", "MySQL"],
    projectLink: "https://github.com/chanvichea169/clothes-store",
  },
  {
    imgSrc: "/images/project-6.png",
    title: "Computer shop",
    tags: [
      "Development",
      "Laravel",
      "tailwindcss",
      "NodeJs",
      "Sqlite",
      "Fillament For Admin Dashboard",
    ],
    projectLink: "https://github.com/chanvichea169/computer-shop",
  },
  {
    imgSrc: "/images/project-1.png",
    title: "Testing using Telegram Bot",
    tags: ["API", "Vue"],
    projectLink: "https://vichea-shop.vercel.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Nike store",
    tags: ["React with Tailwind", "web-design"],
    projectLink: "https://nike-ecru-mu.vercel.app",
  },
];
function Work() {
  return (
    <section id="work">
      <div className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
          <div className="grid gap-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] reveal-up">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
