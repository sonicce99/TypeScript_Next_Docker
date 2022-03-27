import LectureItem from "../components/Lecture/LectureItem";
import { render, screen } from "@testing-library/react";

describe("강의 아이템은", () => {
  test(" 썸네일을 가지고 있어야 한다.", () => {
    render(<LectureItem />);

    const Thumb = screen.getByAltText("초격차 패키지");

    expect(Thumb).toBeInTheDocument();
  });

  test(" 뱃자을 가지고 있어야 한다.", () => {
    render(<LectureItem />);

    const badge = screen.getByText("평생소장");

    expect(badge).toBeInTheDocument();
  });

  test("강의 제목을 가지고 있어야 한다.", () => {
    render(<LectureItem />);

    const Title = screen.getByRole("heading", {
      name: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 devOps 운영",
    });

    expect(Title).toBeInTheDocument();
  });
});
