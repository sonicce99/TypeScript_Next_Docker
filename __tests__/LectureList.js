import LectureList from "../components/Lecture/LectureList";
import { render, screen } from "@testing-library/react";

describe("강의 목록은", () => {
  test("노출이 되어야 한다.", () => {
    render(<LectureList />);
  });
});
