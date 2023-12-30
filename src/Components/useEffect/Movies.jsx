import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../css/Loading.module.css";
import noimage from "../../assets/images/noimage.jpg";
const Movies = () => {
  let [movie, setMovie] = useState("don");
  let [movies, setMovies] = useState([]);
  let [load, setLoad] = useState(true);
  document.body.style.color = "white";
  document.body.style.backgroundColor = "darkgray";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let apiUrl = `http://www.omdbapi.com/?apikey=9f7404c6&s=${movie}`;
    async function movieapi() {
      try {
        let {
          data: { Search },
        } = await axios.get(apiUrl, { signal });
        setLoad(false);
        // updating array for maping
        setMovies(Array.isArray(Search) ? Search : []);
        console.log(movies);
      } catch (err) {}
    }
    movieapi();

    // Cleanup function
    return () => controller.abort();
  }, [movie]);

  //   search movie
  function SearchingMovies({ target: { value } }) {
    console.log(value);
    setMovie(value);
  }

  return (
    <div>
      <input type="text" placeholder="Serach Movie" onKeyUp={SearchingMovies} />
      {load ? (
        <div>
          <span
            style={{ margin: "50px auto" }}
            className={Loading.loader}
          ></span>
        </div>
      ) : movies.length === 0 ? (
        <h1>NO data</h1>
      ) : (
        movies.map(({ Title, imdbID, Poster }) => {
          return (
            <div key={imdbID}>
              <h1>{Title}</h1>
              <img
                height="200px"
                src={Poster !== "N/A" ? Poster : noimage}
                alt=""
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Movies;
