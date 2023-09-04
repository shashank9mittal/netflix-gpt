import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";

const SearchMovies = async (searchText) => {
  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

  const tmdbResults = await Promise.all(promiseArray);
  return tmdbResults;
};
const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};

export default SearchMovies;
