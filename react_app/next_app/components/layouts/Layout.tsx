import { ReactElement } from "react";
//import { Footer, Header } from "@src/component/ui";
import SimpleHeader from "@/components/layouts/Header/Header";
import SimpleFooter from "@/components/layouts/Footer/Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SimpleHeader />
    {children}
    <SimpleFooter />
  </>
);
