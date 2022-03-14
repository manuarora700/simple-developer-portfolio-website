import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";

import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Projects from "@components/Projects";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mei Yang - Developer"
      description="People-oriented software developer with passion, curiosity and urge to share and learn."
    >
      <Projects />
      
      {/* <FavouriteProjects />
      <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);


  return {
    props: {
      repositories,
    },
  };
};
