import "../styles/global.scss";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarProvider } from "../contexts/Global/Sidebar";
import { INavLinks } from "../types/types";
import Footer from "../components/Footer/Footer";
import useMediaMatch from "../hooks/useMediaMatch";

const navLinks: INavLinks[] = [
  { name: "Commercial", link: "/commercial" },
  { name: "Tourers", link: "/tourers" },
  { name: "Our history", link: "/history" },
  { name: "Get in touch", link: "/contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaMatch("(min-width: 900px)");

  return (
    <Fragment>
      <SidebarProvider>
        <Header />
        <Sidebar navLinks={navLinks} />
      </SidebarProvider>
      <Component {...pageProps} />
      {isDesktop ? "DESKTOP MODE" : "MOBILE MODE"}
      <Footer />
    </Fragment>
  );
}

export default MyApp;
