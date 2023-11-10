import Layout from "~/components/Layout";
import Up from "~/motions/Up";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const links = [
  {
    name: "Github",
    href: "https://github.com/L-Michael1",
    icon: <FiGithub size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mlam11/",
    icon: <AiOutlineLinkedin size={24} />,
  },
  {
    name: "Email",
    href: "mailto:m.lam08@outlook.com",
    icon: <AiOutlineMail size={24} />,
  },
];

const Home = () => {
  return (
    <Layout description="Home">
      <div className="px-8 py-10 md:px-4">
        <Up delay={0.2}>
          <h1 className="mb-8 text-4xl font-bold">Michael Lam</h1>
        </Up>
        <article className="text-zinc-600 dark:text-zinc-400">
          <Up delay={0.4}>
            <p className="my-6">
              Hey, I am Michael Lam, a software developer from Guelph.
            </p>
          </Up>
          <Up delay={0.5}>
            <p className="my-6">
              I&apos;m in my last year studying Computer Science @ the
              University of Guelph. Passionate about full-stack development,
              hoping one day I can create software to help others. My current
              favourite stack is the T3 stack (Next.js, TypeScript, tRPC,
              TailwindCSS, Prisma).
            </p>
          </Up>
          <Up delay={0.6}>
            <p className="my-6">
              I&apos;m currently looking for a new grad full-time software
              engineering position.
            </p>
          </Up>
          <Up delay={0.7}>
            <p className="my-6">
              Outside of programming, I enjoy lifting weights sometimes. I like
              playing sports - even though I&apos;m not the best at them.
              I&apos;ve recently gotten into reading, and I don&apos;t think
              I&apos;ll stop any time soon. I&apos;m also a big fan of anime 🍖
              and k-dramas, recommend me some!
            </p>
          </Up>
        </article>

        <Up delay={0.8}>
          <hr className="mx-auto my-4 w-12" />
        </Up>
        <Up delay={0.9}>
          <p className="text-zinc-600 dark:text-zinc-400">Find me @</p>
          <div className="mt-4 flex gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <span>{link.icon}</span>
                <span className="ml-1 border-b-[1px] border-zinc-400 transition-colors duration-200 hover:border-zinc-200">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </Up>
        <Up delay={1.0}>
          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            <a href="https://opensource.org/license/mit/" target="_blank">
              <span className="ml-1 border-b-[1px] border-zinc-400 transition-colors duration-200 hover:border-zinc-200">
                MIT
              </span>{" "}
            </a>
            2023 mikso
          </p>
        </Up>
      </div>
    </Layout>
  );
};

export default Home;
