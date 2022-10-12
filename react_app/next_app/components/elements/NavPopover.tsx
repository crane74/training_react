import { Popover, Transition } from "@headlessui/react";
import { Fragment, SVGProps } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import classNames from "classnames";

type panels = {
  name: string;
  href: string;

  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description?: string;
  id?: number;
}[];

const mid_side =
  "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0";

const left_side =
  "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2";

const NavPopover = (props: {
  title: string;
  VerticalPanelIcon: panels;
  position: boolean;

  main?: string;
  sub?: string;
  VerticalPanel?: panels;
  HorizontalPanelIcon?: panels;
}) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            )}
          >
            <span>{props.title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={classNames(props.position ? mid_side : left_side)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {props.VerticalPanelIcon.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100">
                          {item.icon && (
                            <item.icon
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              aria-hidden="true"
                            />
                          )}

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                {props.HorizontalPanelIcon && (
                  <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {props.HorizontalPanelIcon.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flow-root"
                      >
                        <a className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                          {item.icon && (
                            <item.icon
                              className="h-6 w-6 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                          )}
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                )}

                {props.VerticalPanel && (
                  <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-base font-medium text-gray-500">
                        {props.main}
                      </h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {props.VerticalPanel.map((post) => (
                          <li key={post.id} className="truncate text-base">
                            <Link href={post.href}>
                              <a className="font-medium text-gray-900 hover:text-gray-700">
                                {post.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 text-sm">
                      <Link href="#">
                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                          {props.sub}
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavPopover;
