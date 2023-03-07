import Image from "next/image";
import profilePic from "../public/profile.webp";

export default function Home() {
  return (
    <main className="p-8 md:py-20 font-sans font-light md:text-lg text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-linear mx-auto">
      <div className="max-w-3xl w-full sm:flex mx-auto bg-gray-100 dark:bg-gray-800 shadow-xl mb-16 items-stretch rounded-lg">
        <div className="bg-gray-200 dark:bg-gray-700 px-6 py-4 md:py-6 md:px-8 flex items-center justify-center rounded-t-lg md:rounded-r-none md:rounded-l-lg">
          <Image
            className="rounded-full border-2 dark:border-gray-300 w-32 h-32 md:w-40 md:h-40"
            src={profilePic}
            alt="Marco"
            priority
          />
        </div>
        <div className="py-6 px-6 md:px-8 md:flex-1md:text-lg flex flex-col">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold leading-8">
              Marco Singhof
            </h1>
            <div className="text-base font-normal text-blue-700 dark:text-green-500">
              Full-stack developer
            </div>
            <div className="text-base font-normal text-gray-700 dark:text-gray-300">
              Munich, Germany
            </div>
          </div>
          <div className="mt-auto">
            <a
              className="transition-colors duration-200 bg-blue-600 dark:bg-green-700 hover:bg-blue-700 dark:hover:bg-green-600 hover:text-white text-white shadow-lg p-2 px-4 rounded inline-block mt-2"
              href="mailto:coffee@singhof.dev"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl w-full mx-auto bg-gray-100 dark:bg-gray-700 shadow-xl mb-16 rounded-lg">
        <div className="bg-gray-200 dark:bg-gray-800 py-2 px-6 md:px-8 rounded-t-lg">
          <h2 className="font-semibold text-xl md:text-2xl">Who am I?</h2>
        </div>
        <div className="py-6 px-6 md:px-8 spaced">
          <p className="mb-6">
            I&apos;m{" "}
            <a
              href="https://twitter.com/marcosinghof"
              className="text-blue-700 dark:text-green-500 hover:text-blue-900 dark:hover:text-green-500"
            >
              @marcosinghof
            </a>
            , a full-stack developer who loves to create things for the web.
          </p>
          <p className="mb-6">
            In 2013, I created one of the most popular tweaks for the iOS
            jailbreak called{" "}
            <a
              className="text-blue-700 dark:text-green-500 hover:text-blue-900 dark:hover:text-green-500"
              href="https://www.idownloadblog.com/2013/12/30/noslowanimations-ios-7/"
            >
              NoSlowAnimations
            </a>
            .
          </p>
          <p>
            Currently, I&apos;m building beautiful web experiences
            using Laravel &amp; Next.js, and I study Computer Science at the Ludwig
            Maximilian University of Munich.
          </p>
        </div>
      </div>
      <footer className="text-center text-gray-800 dark:text-gray-400 text-base">
        &copy; {new Date().getFullYear()} Marco Singhof
      </footer>
    </main>
  );
}
