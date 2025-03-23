import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/chanvichea169",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chan-vichea-3181652b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Instagram",
    href: "https://web.facebook.com/chan.vichea.184/about_profile_transparency",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/chan.vichea.184/about_profile_transparency",
  },
  {
    label: "CodePen",
    href: "https://www.youtube.com/@chanvichea4931",
  },
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:chanvichea169@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="font-semibold mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block tex-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block tex-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="flex items-center space-x-2 reveal-up">
            <img src="images/logo.ico" width={36} height={36} alt="Logo" />
          </a>
          <p className="text-sm font-semibold text-zinc-500">
            &copy;2025{" "}
            <span className="text-zinc-300 reveal-up">Chann Vichea</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
