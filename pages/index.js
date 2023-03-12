import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section className="pb-10">
          <hi className="text-3xl font-bold">Hi! I&apos;m Andy Holland</hi>
          <h2>A Full-stack Developer living in the UK</h2>
        </section>
        <section>
          <div className={styles.grid}>
            <a
              href="/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Reading Bin Calendar</h2>
              <p>Learn more about the how Reading Bin Calendar was made.</p>
            </a>

            <a
              href="/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Commercetools API</h2>
              <p>Commercetools with express middleware API.</p>
            </a>

            <a
              href="/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Angular Pokemon Pokedex</h2>
              <p>Developing Angular skills with the Pokemon API</p>
            </a>

            <a
              href="/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>EasyEDA Keyboard PCB Design</h2>
              <p>How I use the EasyEDA API to make PCBs.</p>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}