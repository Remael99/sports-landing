import Head from "next/head";
import Body from "../components/body";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col lg:px-4 min-h-screen overflow-x-hidden ">
      <Head>
        <title>Alton | main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
