import Banner from "@/components/Banner";
import LectureGroup from "@/components/Lecture/LectureGroup";
import Menu from "@/components/Menu";
import type { NextPage } from "next";

const Details: NextPage = () => {
  return (
    <>
      <Menu />
      <Banner />
      <LectureGroup />
    </>
  );
};

export default Details;
