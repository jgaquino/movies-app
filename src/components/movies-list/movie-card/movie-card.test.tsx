import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MovieCard from "./";

describe("MovieCard tests", () => {
  test("Is a movie being rendered?", () => {
    const { container } = render(<MovieCard movie={movie} />);

    const moviesRendered = container.querySelectorAll("article > div > div");
    moviesRendered.forEach((eachMovie) => {
      const title = eachMovie.querySelector("h3");
      const releaseDate = eachMovie.querySelector("div > p:first-child");
      const language = eachMovie.querySelector("div > p:last-child");

      expect(title).toBeInTheDocument();
      expect(releaseDate).toBeInTheDocument();
      expect(language).toBeInTheDocument();
    });
  });
  test("Is the event click working?", () => {
    const onClickEvent = jest.fn();
    const { container } = render(
      <MovieCard onClick={onClickEvent} movie={movie} />
    );

    const movieCardNode = container.querySelector("div") as HTMLElement;

    userEvent.click(movieCardNode);
    expect(onClickEvent).toHaveBeenCalledTimes(1);
  });
});

const movie = {
  adult: false,
  backdrop_path: "/hAOfzKLvxQcewp2OrEVajLrNhR0.jpg",
  id: 11430,
  original_language: "en",
  overview:
    "Timon the meerkat and Pumbaa the warthog are best pals and the unsung heroes of the African savanna. This prequel to the smash Disney animated adventure takes you back -- way back -- before Simba's adventure began. You'll find out all about Timon and Pumbaa and tag along as they search for the perfect home and attempt to raise a rambunctious lion cub.",
  popularity: 90.54,
  poster_path: "/sVJME5R1NmTXtbdnAxYPx7Xa7kr.jpg",
  release_date: "2004-02-06",
  title: "The Lion King 1½",
  vote_average: 6.6,
  vote_count: 2534,
};
