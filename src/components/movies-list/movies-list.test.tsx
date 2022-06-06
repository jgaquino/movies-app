import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "./";

describe("MoviesList tests", () => {
  test("are Movies being rendered?", () => {
    const { container } = render(
      <MemoryRouter>
        <MoviesList location="my-list" movies={movies} />
      </MemoryRouter>
    );
    const moviesRendered = container.querySelectorAll("article > div > div");
    expect(moviesRendered.length).toBe(20);
  });
  test("No results rendered correctly with location=home", () => {
    render(<MoviesList location="home" movies={[]} />);
    const noResults = screen.getByText("Sorry! no results found...");
    expect(noResults).toBeInTheDocument();
  });
  test("No reviews rendered correctly with location=my-list", () => {
    render(
      <MemoryRouter>
        <MoviesList location="my-list" movies={[]} />
      </MemoryRouter>
    );
    const noReviews = screen.getByText("You don't rated any movie yet.");
    expect(noReviews).toBeInTheDocument();
  });
});

const movies = [
  {
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
  },
  {
    adult: false,
    backdrop_path: "/tFlSDoWQsAZ2qjICKzfP5Yw6zM5.jpg",
    id: 131631,
    original_language: "en",
    overview:
      "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    popularity: 117.959,
    poster_path: "/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    release_date: "2014-11-19",
    title: "The Hunger Games: Mockingjay - Part 1",
    vote_average: 6.8,
    vote_count: 13582,
  },
  {
    adult: false,
    backdrop_path: "/palbhPOSYf2g1p18vWd91dDhZLM.jpg",
    id: 485811,
    original_language: "en",
    overview:
      "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
    popularity: 28.241,
    poster_path: "/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
    release_date: "2018-09-07",
    title: "Redcon-1",
    vote_average: 5.6,
    vote_count: 200,
  },
  {
    adult: false,
    backdrop_path: "/fXRXpzxUApE3OuXhIqsdavQjCVa.jpg",
    id: 12444,
    original_language: "en",
    overview:
      "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    popularity: 175.669,
    poster_path: "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    release_date: "2010-10-17",
    title: "Harry Potter and the Deathly Hallows: Part 1",
    vote_average: 7.8,
    vote_count: 16057,
  },
  {
    adult: false,
    backdrop_path: "/yLpMWckfrzRiNZxB2tgBa5TkUKh.jpg",
    id: 50619,
    original_language: "en",
    overview:
      "The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world.",
    popularity: 110.672,
    poster_path: "/dSSzv6JrlwS48pBeTNSswLJXOYF.jpg",
    release_date: "2011-11-16",
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    vote_average: 6.2,
    vote_count: 7565,
  },
  {
    adult: false,
    backdrop_path: "/lVy5Zqcty2NfemqKYbVJfdg44rK.jpg",
    id: 24,
    original_language: "en",
    overview:
      "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
    popularity: 32.291,
    poster_path: "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    release_date: "2003-10-10",
    title: "Kill Bill: Vol. 1",
    vote_average: 8,
    vote_count: 14657,
  },
  {
    adult: false,
    backdrop_path: null,
    id: 812341,
    original_language: "en",
    overview: "Disturbing shock footage mixtape",
    popularity: 19.359,
    poster_path: null,
    release_date: "2014-01-01",
    title: "FUBAR Vol. 1",
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    id: 951076,
    original_language: "en",
    overview:
      "On Bill Bilingston jr the III's 20 1/2 birthday, he invites his friends from the multiverse over for some fun...or did he? Created in under 48 hours for the Okotoks film festival 2022.",
    popularity: 22.484,
    poster_path: "/3S9PDj8VrucXSSaOdCuDeKCKwJX.jpg",
    release_date: "2022-06-05",
    title: "20 1/2",
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/3t6rSXaycM6LHsEMYvoWoBboJfy.jpg",
    id: 197583,
    original_language: "en",
    overview:
      "A misfit group of New Mexico cowboys find themselves on the journey of a lifetime when they learn their crooked-footed racehorse qualifies to run in the Kentucky Derby. Based on the true story of Mine That Bird, the cowboys must overcome impossible odds even before they reach Churchill Downs and the land of Kentucky's blue bloods.",
    popularity: 15.379,
    poster_path: "/uIbniwxSlHyvGECiBMkTeWI0pib.jpg",
    release_date: "2014-03-21",
    title: "50 to 1",
    vote_average: 6.7,
    vote_count: 57,
  },
  {
    adult: false,
    backdrop_path: "/nPqDbXYaMhR2XKQ9IU8bkX7YgO7.jpg",
    id: 217316,
    original_language: "en",
    overview:
      "Set in the golden era of Grand Prix Racing '1' tells the story of a generation of charismatic drivers who raced on the edge, risking their lives during Formula 1's deadliest period, and the men who stood up and changed the sport forever.",
    popularity: 7.488,
    poster_path: "/jo7KYaK7Rf7Ru6uhbDHAzMhjUG4.jpg",
    release_date: "2013-09-30",
    title: "1",
    vote_average: 7.4,
    vote_count: 97,
  },
  {
    adult: false,
    backdrop_path: null,
    id: 967493,
    original_language: "en",
    overview:
      "Join host Clarke Wolfe for the ultimate backstage pass to the final season of The Walking Dead (Part 1), featuring never-before-seen footage, access to your favorite cast and crew, and sneak peeks of what’s coming next.",
    popularity: 77.38,
    poster_path: "/dzXF1zuVKfzOJcPiZrBGFJOHR8K.jpg",
    release_date: "",
    title: "Inside The Walking Dead Season 11 (Part 1)",
    vote_average: 10,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: "/msg9CXQMmYIffIjGJaAbHKtn69D.jpg",
    id: 176068,
    original_language: "en",
    overview:
      "Three college friends go to the biggest party of the year, each looking for something different: love, sex and a simple human connection. When a supernatural phenomenon disrupts the party, it lights a fuse on what will become the strangest night anyone has ever seen. As the three friends struggle to find what they’re looking for, the party quickly descends into a chaos that challenges if they can stay friends or if they can even stay alive.",
    popularity: 6.356,
    poster_path: "/ve3e7AzvlfLDi2z3T05tCjYAT31.jpg",
    release_date: "2013-09-20",
    title: "+1",
    vote_average: 5.3,
    vote_count: 211,
  },
  {
    adult: false,
    backdrop_path: "/cf7jOkeY8tqSnVRzAbdlUKQynhe.jpg",
    id: 10068,
    original_language: "en",
    overview:
      "An erotic story about a woman, the assistant of an art gallery, who gets involved in an impersonal affair with a man. She barely knows about his life, only about the sex games they play, so the relationship begins to get complicated.",
    popularity: 15.628,
    poster_path: "/vnTCgupgTMZSGbl1InrO2UhTz9S.jpg",
    release_date: "1986-02-09",
    title: "Nine 1/2 Weeks",
    vote_average: 6.1,
    vote_count: 743,
  },
  {
    adult: false,
    backdrop_path: "/mouu6kAzrEuPFBCRU5NkPHM292v.jpg",
    id: 41371,
    original_language: "en",
    overview:
      "A pair of horny college guys get summer jobs at a sexy cheerleader camp.",
    popularity: 10.514,
    poster_path: "/jnZ9RiTyusgR3D6QOhF7CAI44TK.jpg",
    release_date: "2010-07-27",
    title: "#1 Cheerleader Camp",
    vote_average: 4.6,
    vote_count: 73,
  },
  {
    adult: false,
    backdrop_path: "/1f9kaPcMAHGZmy3F81Z0d041UXX.jpg",
    id: 3685,
    original_language: "de",
    overview:
      "The construction of the Great Western Railroad creates heavy conflict between the railway company and neighboring Indian tribes. Worse, criminal gang leader Santer sets his eyes on a gold mine located on holy Indian land and influences the construction supervisor to re-rout the planned railroad straight through Apache land. Old Shatterhand, who works as a measurement technician, discovers the evil plan and searches contact with the Apaches in an effort to avert war.",
    popularity: 6.298,
    poster_path: "/xxItMixAWHdd6bKcSk3EXWgt3P3.jpg",
    release_date: "1963-12-11",
    title: "Winnetou 1: Apache Gold",
    vote_average: 6.7,
    vote_count: 102,
  },
  {
    adult: false,
    backdrop_path: "/1YaG52CwGY3pKh76OBlwX0ymncg.jpg",
    id: 123025,
    original_language: "en",
    overview:
      "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?",
    popularity: 29.675,
    poster_path: "/kkjTbwV1Xnj8wBL52PjOcXzTbnb.jpg",
    release_date: "2012-08-21",
    title: "Batman: The Dark Knight Returns, Part 1",
    vote_average: 7.8,
    vote_count: 1238,
  },
  {
    adult: false,
    backdrop_path: "/cnFn8iShHVnu0K4gGGKuII3JPJa.jpg",
    id: 10394,
    original_language: "en",
    overview:
      "An old gangster is advised that Freddie Mays would leave jail after thirty years in prison. His mood changes and he recalls when he was a young punk and who joined Freddie's gang—a man he both envied and ultimately betrayed.",
    popularity: 7.55,
    poster_path: "/gIQUVBPM9ehCelrjQEdKX29AaCT.jpg",
    release_date: "2000-06-09",
    title: "Gangster No. 1",
    vote_average: 6.6,
    vote_count: 152,
  },
  {
    adult: false,
    backdrop_path: "/lgaLsjUmJaj9WX68tdHhNRLUyV3.jpg",
    id: 715869,
    original_language: "it",
    overview: "Now without Aramis, the Musketeers embark on a new mission.",
    popularity: 7.095,
    poster_path: "/8PBmNXkiSskH6VzJ4FcmMH06QxK.jpg",
    release_date: "2020-12-25",
    title: "Tutti per 1 - 1 per tutti",
    vote_average: 5.8,
    vote_count: 137,
  },
  {
    adult: false,
    backdrop_path: "/uKFqdRcJ3Oe2qZscCLCZVKo1nml.jpg",
    id: 152584,
    original_language: "fr",
    overview:
      "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire, to assert herself as a woman and as an adult. In front of others, Adele grows, seeks herself, loses herself, finds herself.",
    popularity: 23.064,
    poster_path: "/kgUk1wti2cvrptIgUz0VTAtSF6w.jpg",
    release_date: "2013-10-09",
    title: "Blue Is the Warmest Color",
    vote_average: 7.1,
    vote_count: 3861,
  },
  {
    adult: false,
    backdrop_path: "/prqQoRgx1hiHokgqrqG2eGD1cOC.jpg",
    id: 415665,
    original_language: "fr",
    overview:
      "Tim is a bit of a loner. At school he gravitates towards another shy boy and they become friends. But the verbal and physical bullying by a gang of kids, as well as an aggressive use of social media, unsettle Tim’s new mate and he backs away from him – an act of cowardice which will have serious repercussions. As a result of Tim’s unwillingness to snitch, the bullies appear to get away with their actions, none more so than the gang’s leader Jeff. He’s one of the school’s star athletes, who seems guaranteed a place in the national championships with an 800m time of 1.54 minutes. When Tim decides to start training in order to go up against Jeff, even having a girlfriend as cover, his enemies seem willing to go to any lengths to stop him.",
    popularity: 6.791,
    poster_path: "/8uHDTAHeIE5VebYNxLGarQ39GNm.jpg",
    release_date: "2016-10-13",
    title: "1:54",
    vote_average: 6.8,
    vote_count: 118,
  },
];
