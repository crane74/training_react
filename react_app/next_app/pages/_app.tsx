import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layouts/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
