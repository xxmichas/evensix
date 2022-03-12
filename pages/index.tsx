import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarProvider } from "../contexts/Global/Sidebar";
import useMediaMatch from "../hooks/useMediaMatch";
import { getLandingPageConfig, ILandingPageConfig } from "../lib/api";

const Home = ({ title, navLinks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDesktop = useMediaMatch("(min-width: 900px)");

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <SidebarProvider>
        <Header isDesktop={isDesktop} navLinks={navLinks} />
        {isDesktop ? null : <Sidebar navLinks={navLinks} />}
      </SidebarProvider>
      <main>CARAVANS</main>
      {isDesktop ? "DESKTOP MODE" : "MOBILE MODE"}
      <Footer />
    </Fragment>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<ILandingPageConfig> = async () => {
  const config = await getLandingPageConfig();

  return {
    props: config,
    revalidate: 10,
  };
};
