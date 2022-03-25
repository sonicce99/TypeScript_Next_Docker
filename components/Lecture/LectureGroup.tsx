import LectureList from "./LectureList";

const LectureGroup = (): JSX.Element => {
  return (
    <>
      <span>Best</span>
      <h1>이번주 베스트셀링 강의</h1>
      <LectureList />
    </>
  );
};

export default LectureGroup;
