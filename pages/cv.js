import React, { useEffect } from "react";
import { useRouter } from "next/router";
import apolloClient from "@/utils/apollo-client";
import gql from "graphql-tag";

//redirect to CV
export default function CV(props) {
  const { cv } = props;

  const router = useRouter();
  useEffect(() => {
    router.push(cv.url);
  });

  return <h1>CV</h1>;
}

export async function getStaticProps({ preview = false }) {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        assetCollection(where: { title: "Andrew Holland CV" }, limit: 1) {
          items {
            title
            url
          }
        }
      }
    `,
  });
  return {
    props: {
      cv: data.assetCollection.items[0],
    },
  };
}
