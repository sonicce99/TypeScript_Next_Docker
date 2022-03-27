import Lecturegroup from "../components/Lecture/LectureGroup";
import { render, screen } from "@testing-library/react";

describe("강의 목록은", () => {
  test(" 제목을 가지고 있어야 한다.", () => {
    render(<Lecturegroup />);

    const lectureTitle = screen.getByRole("heading", {
      name: "이번주 베스트셀링 강의",
    });

    expect(lectureTitle).toBeInTheDocument();
  });

  test("뱃지를 가지고 있어야 한다.", () => {
    render(<Lecturegroup />);

    const badge = screen.getByText("Best");

    expect(badge).toBeInTheDocument();
  });
});
