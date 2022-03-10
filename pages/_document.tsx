import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
