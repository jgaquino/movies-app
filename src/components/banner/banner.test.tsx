import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IMovie } from "../../helpers/entities";
import Banner from "./";

describe("Banner tests", () => {
  const movieMocked: IMovie = {
    adult: false,
    backdrop_path: null,
    id: 967493,
    original_language: "en",
    overview:
      "Join host Clarke Wolfe for the ultimate backstage pass to the final season of The Walking Dead (Part 1), featuring never-before-seen footage, access to your favorite cast and crew, and sneak peeks of what’s coming next.",
    popularity: 57.275,
    poster_path: "/dzXF1zuVKfzOJcPiZrBGFJOHR8K.jpg",
    release_date: "",
    title: "Inside The Walking Dead Season 11 (Part 1)",
    vote_average: 10,
    vote_count: 2,
  };

  it("Content is visible?", () => {
    render(<Banner movie={movieMocked} />);
    const releaseDate = document.querySelector("main > h5") as HTMLElement;
    const title = document.querySelector("main > h1") as HTMLElement;
    const overview = document.querySelector("main > p") as HTMLElement;
    const popularity = screen.getByText("Popularity:");
    const voteAverage = screen.getByText("Vote average:");
    const releaseDateInDetails = screen.getByText("Release date:");
    const language = screen.getByText("Language:");

    expect(releaseDate).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(popularity).toBeInTheDocument();
    expect(voteAverage).toBeInTheDocument();
    expect(releaseDateInDetails).toBeInTheDocument();
    expect(language).toBeInTheDocument();
  });
});
