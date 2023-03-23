import AddMovie from "./AddMovie";
import { useState } from "react"; //only be used in function component
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieState, setMovieList] = useState(() => {
    return {
      movieList: ["Die Hard", "Harry Potter"],
    };
  });

  function handleAddMovie(newMovie) {
    setMovieList((prevState) => {
      return {
        // ...prevState,
        movieList: prevState.movieList.concat([newMovie]),
      };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};
export default MoviePage;
