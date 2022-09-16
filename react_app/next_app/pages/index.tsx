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
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
