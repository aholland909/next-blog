import Head from "next/head";
import gql from "graphql-tag";
import apolloClient from "@/utils/apollo-client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "@/utils/contentful-helpers";

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>Andy Holland Blog</title>
        <meta name="description" content="Andy Holland Blog and Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-start mt-0 mx-8 md:mx-32 lg:mx-64 xl:mx-80 2xl:mx-96 2xl:px-30 3xl:mx-96 3xl:px-48">
        <h1>{data.title}</h1>
        {documentToReactComponents(
          data.content.json,
          renderOptions(data.content.links)
        )}
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
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String) {
        projectsCollection(where: { slug: $slug }, limit: 1) {
          items {
            title
            slug
            excerpt
            content {
              json
              links {
                entries {
                  inline {
                    sys {
                      id
                    }
                    __typename
                    ... on Projects {
                      title
                      slug
                    }
                  }
                  block {
                    sys {
                      id
                    }
                    __typename
                    ... on CodeBlock {
                      description
                      language
                      code
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                  }
                }
              }
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

  return { props: { data: data.projectsCollection.items[0] } };
}
