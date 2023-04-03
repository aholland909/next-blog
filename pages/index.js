import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import gql from "graphql-tag";
import apolloClient from "@/utils/apollo-client";
import { formatPublishedDateForDisplay } from "@/utils/date";

export default function Home(props) {
  const { projects } = props;
  return (
    <>
      <Layout>
        <section className="pb-10">
          <div className="flex flex-col text-center items-center">
            <div className="p-4">
              <hi className="text-3xl font-bold">
                Hi! 👋 I&apos;m Andy Holland
              </hi>
              <h2>
                A Fullstack Developer, passionate about accessibility and cars!
                🚗
              </h2>
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
          <h2 className="text-2xl font-bold" id="projects">
            Projects
          </h2>
          <div className="md:flex">
            {projects.map((project) => {
              return (
                <Link className="flex flex-col flex-grow p-4 m-4 rounded text-start bg-gray-100" key={project.slug} href={`projects/${project.slug}`}>
                  <div className="flex flex-1 flex-col">
                    <Image
                      className="object-contain h-48 w-48 rounded"
                      src={project.thumbnail.url}
                      height={200}
                      width={200}
                      alt={project.slug}
                    />
                    <h3 className="text-xl pt-4">{project.title}</h3>
                    <div className="mt-2 mb-4">{project.excerpt}</div>
                    <div className="mt-auto flex-none">{formatPublishedDateForDisplay(project.date)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </Layout>
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
