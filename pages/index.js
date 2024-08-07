import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import devanzy from "../public/anzy.jpg";
import design from "../public/landing-page.png";
import cod from "../public/atom.png";
import cons from "../public/web-development.png";
import web1 from "../public/app1.png";
import web2 from "../public/app2.png";
import web3 from "../public/app3.png";
import web4 from "../public/app4.png";
import web5 from "../public/app5.png";
import web6 from "../public/app6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anderson Caleb Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">
              Developedbyanzy
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-semi-bold md:text-6xl">
              Anderson Caleb
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Web developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              With proficiency in HTML, CSS, PHP, and JavaScript.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://x.com/andersonanzy">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/in/anderson-caleb-06a58a314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={devanzy} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl py-3 text-center dark:text-gray-200">
              Services I offer
            </h3>
            <p className="text-md text-center py-2 leading-8 text-gray-80 dark:text-gray-200">
              HTML & CSS: Creating structured, accessible, and visually
              appealing web pages. JavaScript: Enhancing user experience through
              interactive <span className="text-teal-500">elements </span> and
              dynamic <span className="text-teal-500">content </span>.
            </p>
            <p className="text-md text-center py-2 leading-8 text-gray-80 dark:text-gray-200">
              PHP: Building robust server-side applications and managing
              database interactions.
            </p>
            <p className="text-md text-center py-2 leading-8 text-gray-80 dark:text-gray-200">
              Project Management: Overseeing the full development lifecycle from
              concept to deployment, ensuring timely delivery and quality
              results.
            </p>
          </div>
          <div className="lg:flex justify-center gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={cod} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Responsive React apps
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={cons} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Neat and functional codes
              </h3>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
              I have designed and developed a portfolio of projects
              demonstrating my skills in front-end and back-end web development.
              My portfolio highlights various projects where I implemented
              responsive designs, dynamic content, and user-friendly interfaces.
              Each project showcases my ability to work with different
              technologies and solve complex problems, resulting in functional
              and visually appealing websites.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
