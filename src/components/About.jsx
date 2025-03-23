const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-[60ch]:">
            Welcome to my portfolio 👋! I'm Vichea Chann, a web developer
            passionate about creating visually stunning and highly functional
            websites. With a blend of creativity and technical skills, I bring
            your vision to life, ensuring a seamless balance between design and
            performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:gap-2">
                  <span className="text-xl md:text-3xl font-semibold">
                    {number}
                  </span>
                  <span className="text-blue-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="pt-2 text-zinc-300 text-sm font-semibold">
                  {label}
                </p>
              </div>
            ))}

            <img
              src="/images/logo.ico"
              alt="vichea"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
