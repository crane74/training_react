import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline bg-red-500 hover:bg-orange-500">
        Hello world!
      </h1>
      <Link href="/sample">
        <a>sample</a>
      </Link>
    </div>
  );
};

export default Home;
