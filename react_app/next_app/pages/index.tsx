import type { NextPage } from "next";
import Link from "next/link";

import DropdownMenu from "@/components/elements/DropdownMenu";

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <h1 className="bg-red-500 text-3xl font-bold underline hover:bg-orange-500">
          Hello world!
        </h1>
        <DropdownMenu />
        <Link href="/sample">
          <a>sample</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
