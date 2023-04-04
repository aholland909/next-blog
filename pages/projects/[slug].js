import Head from "next/head";
import gql from "graphql-tag";
import apolloClient from "@/utils/apollo-client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>Andy Holland Blog</title>
        <meta name="description" content="Andy Holland Blog and Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-start p-14 ">
        <h1>{data.title}</h1>
        {documentToReactComponents(data.content.json)}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        projectsCollection {
          items {
            title
            slug
          }
        }
      }
    `,
  });

  const projects = data.projectsCollection.items.map((project) => {
    return { params: { ...project } };
  });

  return {
    paths: [...projects],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);

  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String) {
        projectsCollection(where: { slug: $slug }) {
          items {
            title
            slug
            excerpt
            content {
              json
            }
            thumbnail {
              url
            }
            date
          }
        }
      }
    `,
    variables: params,
  });

  console.log(data);

  return { props: { data: data.projectsCollection.items[0] } };
}
