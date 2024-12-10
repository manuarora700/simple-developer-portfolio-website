import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { Analytics } from "@vercel/analytics/react";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Jalen Harris - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Analytics/>
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getStaticProps = async () => {
  let token = process.env.AUTH_TOKEN || null;

  const repositories = (await getLatestRepos(userData, token)) || [];

  return {
    props: {
      repositories,
    },
  };
};
