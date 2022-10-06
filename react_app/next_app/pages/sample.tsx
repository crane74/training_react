import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import {
  RightToLeft,
  AppearingSoftly,
} from "@/components/FramerTransition/Transition";

const Sample: NextPage = () => {
  return (
    <div className="px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppearingSoftly>
        <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-16">
          <h1 className="m-0 text-7xl">
            Welcome to{" "}
            <a
              className="text-center text-blue-500 no-underline hover:underline focus:underline active:underline"
              href="https://nextjs.org"
            >
              Next.js!
            </a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className="flex max-w-4xl flex-col flex-wrap items-center justify-center gap-6 md:flex-row">
            <a
              href="https://nextjs.org/docs"
              className="max-w-xs rounded-xl border p-6  text-left text-inherit no-underline hover:border-blue-700
              hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:border-blue-700 active:text-blue-700 "
            >
              <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
              <p className="text-lg">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="max-w-xs rounded-xl border p-6 text-left text-inherit no-underline hover:border-blue-700
              hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:border-blue-700 active:text-blue-700"
            >
              <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
              <p className="text-lg ">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="max-w-xs rounded-xl border p-6  text-left text-inherit no-underline hover:border-blue-700
              hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:border-blue-700 active:text-blue-700 "
            >
              <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
              <p className="text-lg">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="max-w-xs rounded-xl border p-6  text-left text-inherit no-underline hover:border-blue-700
              hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:border-blue-700 active:text-blue-700 "
            >
              <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
              <p className="text-lg">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </AppearingSoftly>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Sample;
