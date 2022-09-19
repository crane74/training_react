import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layouts/Layout";
import { AnimatePresence } from "framer-motion";
import Div100vh from "react-div-100vh";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout>
        <Div100vh>
          <Component {...pageProps} />
        </Div100vh>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
