import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sharing Successes</title>
        <meta name="description" content="" />
      </Head>
      <h1 className="text-3xl font-bold underline via-red-50">
        Sharing Successes!
      </h1>
    </>
  );
};

export default Home;
