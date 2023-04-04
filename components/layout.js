import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const name = "Andy";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Andy Holland Blog</title>
        <meta name="description" content="Andy Holland Blog and Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center align-center items-center p-10 ">
        {children}
      </main>
    </div>
  );
}
