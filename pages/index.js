import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section className="pb-10">
          <div className="flex flex-col text-center items-center">
            <div className="p-4">
              <hi className="text-3xl font-bold">Hi! I&apos;m Andy Holland</hi>
              <h2>A Fullstack Developer living in the UK</h2>
            </div>
            <div className="flex items-center justify-center p-4">
              <Link href="https://github.com/aholland909">
                <FontAwesomeIcon className="fa-xl p-2" icon={faGithub} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/andrewholland909/"
                className="fa-xl p-2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
            <div className="p-4">
              <Image
                src="/../public/and_smart.png"
                alt="Profile Image"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Projects</h2>
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
