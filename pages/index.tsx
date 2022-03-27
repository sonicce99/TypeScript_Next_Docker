import Menu from "../components/Menu";
import Banner from "../components/Banner";
import LectureGroup from "../components/Lecture/LectureGroup";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Banner />
      <LectureGroup />
    </>
  );
};

export default Home;
