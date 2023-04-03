import gql from "graphql-tag";
import apolloClient from "@/utils/apollo-client";

export default function Projects({ data }) {
  return <h1>{JSON.stringify(data)}</h1>;
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
