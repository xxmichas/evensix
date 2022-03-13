import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarProvider } from "../contexts/Global/Sidebar";
import useMediaMatch from "../hooks/useMediaMatch";
import { getLandingPageConfig, getNavLinks, ILandingPageConfig } from "../lib/api";
import { INavLinks } from "../types/types";

const Home = ({
  config: { title, themeColor, content },
  navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDesktop = useMediaMatch("(min-width: 900px)");

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <meta name="theme-color" content={themeColor} />
        <title>{title}</title>
      </Head>

      <SidebarProvider>
        <Header isDesktop={isDesktop} navLinks={navLinks} />
        {isDesktop ? null : <Sidebar navLinks={navLinks} />}
      </SidebarProvider>
      <LandingPage content={content} />
      <Footer />
    </Fragment>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  config: ILandingPageConfig;
  navLinks: INavLinks[];
}> = async () => {
  const [navLinks, config] = await Promise.all([getNavLinks(), getLandingPageConfig()]);

  return {
    props: {
      config,
      navLinks,
    },
    revalidate: 10,
  };
};
