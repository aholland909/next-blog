import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import gql from "graphql-tag";
import apolloClient from "@/utils/apollo-client";
import { formatPublishedDateForDisplay } from "@/utils/date";

export default function Home(props) {
  const { projects } = props;
  return (
    <>
      <Head>
        <title>Andy Holland Blog</title>
        <meta name="description" content="Andy Holland Blog and Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center align-center items-center pt-0 p-10 ">
        <section className="pb-10">
          <div className="flex flex-col text-center items-center">
            <div className="pt-0 p-4">
              <h1 className="text-3xl font-bold">Hi! I&apos;m Andy Holland</h1>
              <h2 className="text-xl text-gray-700">
                A Fullstack Developer, passionate about accessibility and cars!
                🚗
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://github.com/aholland909">
                <FontAwesomeIcon className="fa-xl p-2" icon={faGithub} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/andrewholland909/"
                className="fa-xl p-2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>

              <Link
                href="mailto:andrewholland909@gmail.com"
                className="fa-xl p-2"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
            <div className="p-4">
              <Image
                src="/and_smart.png"
                alt="Profile Image"
                width={300}
                height={300}
                className=""
              />
            </div>
            <Link
              href='/cv'
              rel="noopener noreferrer"
              target="_blank"
              className="font-general-medium flex justify-evenly items-center w-40 my-0 sm:my-6 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-600 text-gray-500 hover:text-white duration-500"
            >
              <FontAwesomeIcon icon={faCircleArrowDown} />
              Download CV
            </Link>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-2xl font-bold" id="projects">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => {
              return (
                <Link
                  key={project.slug}
                  href={`projects/${project.slug}`}
                  className="flex flex-1 flex-col max-w-sm rounded-md overflow-hidden shadow-lg"
                >
                  <Image
                    className="w-full h-48 object-contain"
                    src={project.thumbnail.url}
                    height={300}
                    width={300}
                    alt={project.slug}
                    priority
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {project.title}
                    </div>
                    <p className="text-gray-700 text-base">{project.excerpt}</p>
                  </div>
                  <div className="px-6 py-4 mt-auto flex-none">
                    <div className="w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {formatPublishedDateForDisplay(project.date)}
                    </div>
                    {/* <Link
                        key={project.slug}
                        href={`projects/${project.slug}`}
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-2 transition duration-200 ease-in-out"
                      >
                        View Project
                      </Link> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        projectsCollection(order: date_ASC, where: { featured: true }) {
          items {
            title
            slug
            excerpt
            thumbnail {
              url
            }
            date
          }
        }
      }
    `,
  });

  return {
    props: {
      preview,
      projects: data.projectsCollection.items,
    },
  };
}
