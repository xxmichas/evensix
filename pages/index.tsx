import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getHomePageContent } from "../lib/api";

const Home = ({ test }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PLANET CARAVANS</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>{test.name}</div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getHomePageContent();

  return {
    props: {
      test: data,
    },
  };
};

export default Home;
